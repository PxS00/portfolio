import { useState, useEffect, useCallback } from 'react'
import type { GithubRepo } from '../types/github.types'
import { githubService } from '../services/github.service'
import { FEATURED_REPOS } from '../data/featuredRepos'

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
      
      const results = await Promise.all(promises)
      setRepos(results)
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
