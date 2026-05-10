import { useGithubRepos } from '../../hooks/useGithubRepos'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectCardSkeleton from '../ProjectCard/ProjectCardSkeleton'
import { FolderGit2 } from 'lucide-react'

export default function ProjectsGrid() {
  const { repos, loading, error, retry } = useGithubRepos()

  return (
    <div className="container mx-auto px-6 py-24 lg:px-12">
      <div className="mb-12 text-center md:text-left">
        <h1 className="mb-4 text-4xl font-bold text-(--title-color) md:text-5xl">
          Meus Projetos
        </h1>
        <p className="text-lg text-(--text-color) max-w-2xl">
          Explore todos os meus repositórios públicos no GitHub. Abaixo estão os projetos em que venho trabalhando, ordenados pelas atualizações mais recentes.
        </p>
      </div>

      {error ? (
        <div className="flex flex-col items-center justify-center rounded-2xl bg-red-500/5 p-12 text-center border border-red-500/10">
          <p className="mb-4 text-red-400">{error}</p>
          <button
            onClick={retry}
            className="rounded-lg bg-red-500/20 px-6 py-2 text-sm font-semibold text-red-400 transition-colors hover:bg-red-500/30"
          >
            Tentar novamente
          </button>
        </div>
      ) : (
        <>
          <div className="mb-8 flex items-center justify-between text-sm font-medium text-(--text-color)/70">
            <div className="flex items-center gap-2">
              <FolderGit2 className="h-5 w-5 text-(--primary-color)" />
              {loading ? (
                <span>Carregando repositórios...</span>
              ) : (
                <span>Exibindo {repos.length} repositórios originais</span>
              )}
            </div>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 9 }).map((_, idx) => (
                  <ProjectCardSkeleton key={idx} />
                ))
              : repos.map((repo) => (
                  <ProjectCard key={repo.id} repo={repo} />
                ))}
          </div>
        </>
      )}
    </div>
  )
}
