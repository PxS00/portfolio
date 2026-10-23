import { useEffect, useState } from 'react'
import { githubService } from '../services/github.service'
import { FEATURED_REPO_SNAPSHOTS } from '../data/featuredRepos'

export const useFeaturedRepos = () => {
  const [repos, setRepos] = useState(FEATURED_REPO_SNAPSHOTS)

  useEffect(() => {
    let active = true
    Promise.allSettled(
      FEATURED_REPO_SNAPSHOTS.map((repo) => githubService.fetchRepoByName(repo.name)),
    ).then((results) => {
      if (active) {
        setRepos(
          results.map((result, index) =>
            result.status === 'fulfilled' ? result.value : FEATURED_REPO_SNAPSHOTS[index],
          ),
        )
      }
    })
    return () => {
      active = false
    }
  }, [])

  return { repos }
}
