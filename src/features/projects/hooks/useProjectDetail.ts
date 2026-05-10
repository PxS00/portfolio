import { useState, useEffect, useCallback } from 'react'
import type { GithubRepo } from '../types/github.types'
import { githubService } from '../services/github.service'

interface ProjectDetailState {
  repo: GithubRepo | null
  readme: string | null
  loading: boolean
  error: string | null
}

// Fetches repo metadata and README content in parallel
export const useProjectDetail = (repoName: string) => {
  const [state, setState] = useState<ProjectDetailState>({
    repo: null,
    readme: null,
    loading: true,
    error: null,
  })

  const fetchDetail = useCallback(async () => {
    try {
      setState((prev) => ({ ...prev, loading: true, error: null }))

      const [repo, readme] = await Promise.allSettled([
        githubService.fetchRepoByName(repoName),
        githubService.fetchReadme(repoName),
      ])

      setState({
        repo: repo.status === 'fulfilled' ? repo.value : null,
        readme: readme.status === 'fulfilled' ? readme.value : null,
        loading: false,
        error: repo.status === 'rejected' ? 'Repositório não encontrado.' : null,
      })
    } catch (err) {
      setState({
        repo: null,
        readme: null,
        loading: false,
        error: err instanceof Error ? err.message : 'Failed to load project',
      })
    }
  }, [repoName])

  useEffect(() => {
    fetchDetail()
  }, [fetchDetail])

  return { ...state, retry: fetchDetail }
}
