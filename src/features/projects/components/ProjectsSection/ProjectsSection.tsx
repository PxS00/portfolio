import { Link } from 'react-router-dom'
import { ArrowRight, Terminal } from 'lucide-react'
import { useFeaturedRepos } from '../../hooks/useFeaturedRepos'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectCardSkeleton from '../ProjectCard/ProjectCardSkeleton'

export default function ProjectsSection() {
  const { repos, loading, error, retry } = useFeaturedRepos()

  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-(--primary-color)/10 px-4 py-2 text-sm font-medium text-(--primary-color)">
              <Terminal className="h-4 w-4" />
              <span>Projetos em Destaque</span>
            </div>
            <h2 className="mb-4 text-3xl font-bold text-(--title-color) md:text-4xl lg:text-5xl">
              Meus principais trabalhos
            </h2>
            <p className="text-lg text-(--text-color)">
              Confira os principais projetos open-source que desenvolvi no GitHub.
            </p>
          </div>
          <Link
            to="/projects"
            className="group flex items-center gap-2 rounded-lg border border-(--primary-color)/30 px-6 py-3 font-semibold text-(--primary-color) transition-all hover:bg-(--primary-color)/10"
          >
            Ver todos os projetos
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
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
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 3 }).map((_, idx) => (
                  <ProjectCardSkeleton key={idx} />
                ))
              : repos.map((repo) => (
                  <ProjectCard key={repo.id} repo={repo} />
                ))}
          </div>
        )}
      </div>
    </section>
  )
}
