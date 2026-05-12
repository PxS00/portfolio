import type { GithubRepo } from '../types/github.types'

const GITHUB_USERNAME = 'PxS00'
const GITHUB_API_URL = 'https://api.github.com'
const CACHE_DURATION = 30 * 60 * 1000 // 30 minutes

const GITHUB_HEADERS = {
  Accept: 'application/vnd.github.v3+json',
}

// Helper to safe-access localStorage (prevents crashes in private modes/blocked storage)
const safeGetItem = (key: string): string | null => {
  try {
    return localStorage.getItem(key)
  } catch {
    return null
  }
}

const safeRemoveItem = (key: string) => {
  try {
    localStorage.removeItem(key)
  } catch {
    /* ignore */
  }
}

// Helper to handle localStorage caching
const cache = {
  get<T>(key: string, ignoreExpiration = false): T | null {
    try {
      const item = safeGetItem(`github_cache_${key}`)
      if (!item) return null

      const parsed = JSON.parse(item)

      // Validate shape and timestamp
      const hasValidStructure =
        parsed &&
        typeof parsed === 'object' &&
        'data' in parsed &&
        typeof parsed.timestamp === 'number' &&
        Number.isFinite(parsed.timestamp)

      if (!hasValidStructure) {
        safeRemoveItem(`github_cache_${key}`)
        return null
      }

      if (ignoreExpiration) {
        return parsed.data
      }

      const isExpired = Date.now() - parsed.timestamp > CACHE_DURATION
      if (isExpired) {
        // We don't remove it here to allow fallback if network fails later
        return null
      }

      return parsed.data
    } catch (error) {
      console.warn('Cache parsing failed, cleaning up:', error)
      safeRemoveItem(`github_cache_${key}`)
      return null
    }
  },
  set(key: string, data: unknown) {
    try {
      localStorage.setItem(
        `github_cache_${key}`,
        JSON.stringify({
          data,
          timestamp: Date.now(),
        }),
      )
    } catch (error) {
      console.warn('Failed to write to GitHub cache:', error)
    }
  },
}

const handleHttpError = (status: number, repoName?: string) => {
  if (status === 403) {
    throw new Error('Limite de requisições excedido. Tente novamente em alguns minutos.')
  }
  if (status === 404) {
    throw new Error(
      repoName ? `Repositório "${repoName}" não encontrado.` : 'Repositório não encontrado.',
    )
  }
  throw new Error(`Erro ao conectar com o GitHub (Status: ${status}).`)
}

export const githubService = {
  async fetchAllPublicRepos(): Promise<GithubRepo[]> {
    const cachedRepos = cache.get<GithubRepo[]>('repos')
    if (cachedRepos) {
      return cachedRepos
    }

    try {
      const response = await fetch(
        `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?type=public&sort=updated&per_page=100`,
        { headers: GITHUB_HEADERS },
      )

      if (!response.ok) {
        handleHttpError(response.status)
      }

      const data = await response.json()
      cache.set('repos', data)
      return data
    } catch (error) {
      console.error('Failed to fetch repositories:', error)
      // Fallback: try to return expired cache if available
      return cache.get<GithubRepo[]>('repos', true) || ((): never => { throw error })()
    }
  },

  async fetchRepoByName(repoName: string): Promise<GithubRepo> {
    const cacheKey = `repo_${repoName}`
    const cachedRepo = cache.get<GithubRepo>(cacheKey)
    if (cachedRepo) {
      return cachedRepo
    }

    try {
      const response = await fetch(`${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}`, {
        headers: GITHUB_HEADERS,
      })

      if (!response.ok) {
        handleHttpError(response.status, repoName)
      }

      const data = await response.json()
      cache.set(cacheKey, data)
      return data
    } catch (error) {
      return cache.get<GithubRepo>(cacheKey, true) || ((): never => { throw error })()
    }
  },

  async fetchReadme(repoName: string): Promise<string> {
    const cacheKey = `readme_${repoName}`
    const cachedReadme = cache.get<string>(cacheKey)
    if (cachedReadme) {
      return cachedReadme
    }

    try {
      const response = await fetch(
        `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}/readme`,
        { headers: GITHUB_HEADERS },
      )

      if (!response.ok) {
        handleHttpError(response.status, repoName)
      }

      const data = await response.json()

      const binaryString = atob(data.content)
      const bytes = Uint8Array.from(binaryString, (char) => char.charCodeAt(0))
      const decodedContent = new TextDecoder('utf-8').decode(bytes)

      cache.set(cacheKey, decodedContent)
      return decodedContent
    } catch (error) {
      return cache.get<string>(cacheKey, true) || ((): never => { throw error })()
    }
  },
}
