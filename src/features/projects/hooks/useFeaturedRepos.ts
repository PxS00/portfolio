import { useCallback, useEffect, useState } from 'react'
import { githubService } from '../services/github.service'
import type { GithubRepo } from '../types/github.types'

const RECENT_REPOS_COUNT = 3

// Fetches the most recently updated public repos instead of a static list
export const useFeaturedRepos = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchRecentRepos = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)

      const allRepos = await githubService.fetchAllPublicRepos()

      // Sort by most recently updated and take the top N
      const recentRepos = allRepos
        .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        .slice(0, RECENT_REPOS_COUNT)

      setRepos(recentRepos)
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Não foi possível carregar os projetos recentes.',
      )
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchRecentRepos()
  }, [fetchRecentRepos])

  return { repos, loading, error, retry: fetchRecentRepos }
}
