import type { GithubRepo } from '../types/github.types'

const GITHUB_USERNAME = 'PxS00'
const GITHUB_API_URL = 'https://api.github.com'

const getHeaders = () => {
  const token = import.meta.env.VITE_GITHUB_TOKEN
  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
  }
  
  if (token) {
    headers.Authorization = `token ${token}`
  }
  
  return headers
}

export const githubService = {
  async fetchAllPublicRepos(): Promise<GithubRepo[]> {
    const response = await fetch(
      `${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?type=public&sort=updated&per_page=100`,
      { headers: getHeaders() }
    )
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories')
    }
    
    return response.json()
  },
  
  async fetchRepoByName(repoName: string): Promise<GithubRepo> {
    const response = await fetch(
      `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}`,
      { headers: getHeaders() }
    )
    
    if (!response.ok) {
      throw new Error(`Failed to fetch repository: ${repoName}`)
    }
    
    return response.json()
  },

  // Fetch and decode README content from a repository
  async fetchReadme(repoName: string): Promise<string> {
    const response = await fetch(
      `${GITHUB_API_URL}/repos/${GITHUB_USERNAME}/${repoName}/readme`,
      { headers: getHeaders() }
    )

    if (!response.ok) {
      throw new Error('README not found')
    }

    const data = await response.json()

    // Decode base64 to UTF-8 to properly handle accented characters and emojis
    const binaryString = atob(data.content)
    const bytes = Uint8Array.from(binaryString, (char) => char.charCodeAt(0))
    return new TextDecoder('utf-8').decode(bytes)
  },
}
