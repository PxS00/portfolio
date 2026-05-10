import { useState, useEffect, useCallback } from 'react'
import type { GithubRepo } from '../types/github.types'
import { githubService } from '../services/github.service'

export const useGithubRepos = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRepos = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const allRepos = await githubService.fetchAllPublicRepos()
      
      // Filter out forks and sort by recently updated just to be safe
      const originalRepos = allRepos
        .filter((repo) => !repo.fork)
        .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        
      setRepos(originalRepos)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load repositories')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchRepos()
  }, [fetchRepos])

  return { repos, loading, error, retry: fetchRepos }
}
