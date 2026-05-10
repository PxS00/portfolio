import { useCallback, useEffect, useState } from 'react'
import { githubService } from '../services/github.service'
import type { GithubRepo } from '../types/github.types'

export const useGithubRepos = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRepos = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const allRepos = await githubService.fetchAllPublicRepos()
      
      // Sort by recently updated
      const sortedRepos = allRepos
        .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        
      setRepos(sortedRepos)
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
