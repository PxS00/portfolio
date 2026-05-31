import { FolderGit2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import ErrorState from '../../../../shared/components/ErrorState/ErrorState'
import { useTypewriter } from '../../../../shared/hooks/useTypewriter'
import { useGithubRepos } from '../../hooks/useGithubRepos'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectCardSkeleton from '../ProjectCard/ProjectCardSkeleton'
import { useLanguage } from '../../../../app/providers/LanguageContext'

const ProjectsGrid = () => {
  const { repos, loading, error, retry } = useGithubRepos()
  const { language, t } = useLanguage()
  const [showCursor, setShowCursor] = useState(true)

  // Reset typewriter cursor when language toggles
  useEffect(() => {
    setShowCursor(true)
  }, [language])

  const titleText = t('projects_title')
  const title = useTypewriter({
    text: titleText,
    delay: 60,
    startDelay: 200,
    onDone: () => setShowCursor(false),
  })

  return (
    <div className="container mx-auto px-6 py-12 sm:py-24 lg:px-12">
      <div className="mb-12 text-center md:text-left">
        <h1 className="mb-8 inline-flex items-center gap-4 rounded-full bg-(--primary-color)/10 px-6 py-3 text-2xl font-bold text-(--title-color) md:text-4xl">
          <span className="font-mono text-(--primary-color)">{'>'}_</span>
          <span className="flex items-center">
            {title}
            <span
              className={`ml-1 text-5xl font-thin text-(--primary-color) md:text-6xl ${
                showCursor ? 'animate-pulse opacity-70' : 'opacity-0'
              }`}
              style={{ letterSpacing: '-0.2em' }}
            >
              |
            </span>
          </span>
        </h1>
        <p className="max-w-2xl text-lg text-(--text-color)">{t('projects_grid_subtitle')}</p>
      </div>

      {error ? (
        <ErrorState message={error} onRetry={retry} />
      ) : (
        <>
          <div className="mb-8 flex items-center justify-between text-sm font-medium text-(--text-color)/70">
            <div className="flex items-center gap-2">
              <FolderGit2 className="h-5 w-5 text-(--primary-color)" />
              {loading ? (
                <span>{t('projects_loading')}</span>
              ) : (
                <span>{t('projects_displaying', { count: repos.length })}</span>
              )}
            </div>
          </div>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 9 }).map((_, idx) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <ProjectCardSkeleton key={idx} />
                ))
              : repos.map((repo, index) => <ProjectCard key={repo.id} repo={repo} index={index} />)}
          </div>
        </>
      )}
    </div>
  )
}

export default ProjectsGrid
