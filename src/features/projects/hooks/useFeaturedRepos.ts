import { useCallback, useEffect, useState } from 'react'
import { FEATURED_REPOS } from '../data/featuredRepos'
import { githubService } from '../services/github.service'
import type { GithubRepo } from '../types/github.types'

export const useFeaturedRepos = () => {
  const [repos, setRepos] = useState<GithubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchFeaturedRepos = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      
      const promises = FEATURED_REPOS.map(repoName => 
        githubService.fetchRepoByName(repoName)
      )
      
      // Use allSettled to gracefully handle partial failures
      const results = await Promise.allSettled(promises)
      const fulfilled = results
        .filter((r): r is PromiseFulfilledResult<GithubRepo> => r.status === 'fulfilled')
        .map(r => r.value)

      setRepos(fulfilled)

      if (fulfilled.length === 0) {
        setError('Não foi possível carregar os projetos em destaque.')
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load featured repositories')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchFeaturedRepos()
  }, [fetchFeaturedRepos])

  return { repos, loading, error, retry: fetchFeaturedRepos }
}
