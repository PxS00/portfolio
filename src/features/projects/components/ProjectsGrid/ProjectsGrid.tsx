import { FolderGit2 } from 'lucide-react'
import { useState } from 'react'
import ErrorState from '../../../../shared/components/ErrorState/ErrorState'
import { useTypewriter } from '../../../../shared/hooks/useTypewriter'
import { useGithubRepos } from '../../hooks/useGithubRepos'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectCardSkeleton from '../ProjectCard/ProjectCardSkeleton'

export default function ProjectsGrid() {
  const { repos, loading, error, retry } = useGithubRepos()
  const [showCursor, setShowCursor] = useState(true)

  const title = useTypewriter({
    text: 'Meus Projetos',
    delay: 60,
    startDelay: 200,
    onDone: () => setShowCursor(false),
  })

  return (
    <div className="container mx-auto px-6 py-24 lg:px-12">
      <div className="mb-12 text-center md:text-left">
        <h1 className="mb-8 inline-flex items-center gap-4 rounded-full bg-(--primary-color)/10 px-6 py-3 text-4xl font-bold text-(--title-color) md:text-5xl">
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
        <p className="text-lg text-(--text-color) max-w-2xl">
          Explore todos os meus repositórios públicos no GitHub. Abaixo estão os projetos em que venho trabalhando, ordenados pelas atualizações mais recentes.
        </p>
      </div>

      {error ? (
        <ErrorState message={error} onRetry={retry} />
      ) : (
        <>
          <div className="mb-8 flex items-center justify-between text-sm font-medium text-(--text-color)/70">
            <div className="flex items-center gap-2">
              <FolderGit2 className="h-5 w-5 text-(--primary-color)" />
              {loading ? (
                <span>Carregando repositórios...</span>
              ) : (
                <span>Exibindo {repos.length} repositórios</span>
              )}
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 9 }).map((_, idx) => (
                  <ProjectCardSkeleton key={idx} />
                ))
              : repos.map((repo, index) => (
                  <ProjectCard key={repo.id} repo={repo} index={index} />
                ))}
          </div>
        </>
      )}
    </div>
  )
}
