import type { GithubRepo } from '../types/github.types'

const GITHUB_USERNAME = 'PxS00'
const GITHUB_API_URL = 'https://api.github.com'
const CACHE_DURATION = 30 * 60 * 1000 // 30 minutes

const GITHUB_HEADERS = {
  Accept: 'application/vnd.github.v3+json',
}

// Helper to handle localStorage caching
const cache = {
  get<T>(key: string): T | null {
    try {
      const item = localStorage.getItem(`github_cache_${key}`)
      if (!item) return null

      const parsed = JSON.parse(item)
      
      // Basic shape validation
      if (!parsed || typeof parsed !== 'object' || !('data' in parsed) || !('timestamp' in parsed)) {
        localStorage.removeItem(`github_cache_${key}`)
        return null
      }

      const isExpired = Date.now() - parsed.timestamp > CACHE_DURATION
      if (isExpired) {
        localStorage.removeItem(`github_cache_${key}`)
        return null
      }

      return parsed.data
    } catch (error) {
      console.warn('Cache parsing failed:', error)
      return null
    }
  },
  set(key: string, data: any) {
    try {
      localStorage.setItem(
        `github_cache_${key}`,
        JSON.stringify({
          data,
          timestamp: Date.now(),
        })
      )
    } catch (error) {
      // Ignore quota errors or privacy blocks to avoid breaking the app
      console.warn('Failed to write to GitHub cache:', error)
    }
  },
}

const handleHttpError = (status: number, repoName?: string) => {
  if (status === 403) {
    throw new Error('Limite de requisições excedido. Tente novamente em alguns minutos.')
  }
  if (status === 404) {
    throw new Error(repoName ? `Repositório "${repoName}" não encontrado.` : 'Repositório não encontrado.')
  }
  throw new Error(`Erro ao conectar com o GitHub (Status: ${status}).`)
}

export const githubService = {
  async fetchAllPublicRepos(): Promise<GithubRepo[]> {
    const cachedRepos = cache.get<GithubRepo[]>('repos')
    if (cachedRepos) return cachedRepos

    try {
      const response = await fetch(
        `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?type=public&sort=updated&per_page=100`,
        { headers: GITHUB_HEADERS }
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
      const expiredData = localStorage.getItem('github_cache_repos')
      if (expiredData) {
        try {
          return JSON.parse(expiredData).data
        } catch {
          /* ignore */
        }
      }
      throw error
    }
  },
  
  async fetchRepoByName(repoName: string): Promise<GithubRepo> {
    const cacheKey = `repo_${repoName}`
    const cachedRepo = cache.get<GithubRepo>(cacheKey)
    if (cachedRepo) return cachedRepo

    try {
      const response = await fetch(
        `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}`,
        { headers: GITHUB_HEADERS }
      )
      
      if (!response.ok) {
        handleHttpError(response.status, repoName)
      }
      
      const data = await response.json()
      cache.set(cacheKey, data)
      return data
    } catch (error) {
      const expiredData = localStorage.getItem(`github_cache_${cacheKey}`)
      if (expiredData) {
        try {
          return JSON.parse(expiredData).data
        } catch {
          /* ignore */
        }
      }
      throw error
    }
  },

  async fetchReadme(repoName: string): Promise<string> {
    const cacheKey = `readme_${repoName}`
    const cachedReadme = cache.get<string>(cacheKey)
    if (cachedReadme) return cachedReadme

    try {
      const response = await fetch(
        `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}/readme`,
        { headers: GITHUB_HEADERS }
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
      const expiredData = localStorage.getItem(`github_cache_${cacheKey}`)
      if (expiredData) {
        try {
          return JSON.parse(expiredData).data
        } catch {
          /* ignore */
        }
      }
      throw error
    }
  },
}
