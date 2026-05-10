import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import ErrorState from '../../../../shared/components/ErrorState/ErrorState'
import { useTypewriter } from '../../../../shared/hooks/useTypewriter'
import { useFeaturedRepos } from '../../hooks/useFeaturedRepos'
import ProjectCard from '../ProjectCard/ProjectCard'
import ProjectCardSkeleton from '../ProjectCard/ProjectCardSkeleton'

export default function ProjectsSection() {
  const { repos, loading, error, retry } = useFeaturedRepos()
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Trigger typewriter only when section scrolls into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const title = useTypewriter({
    text: isVisible ? 'Projetos Recentes' : '',
    delay: 60,
    startDelay: 200,
    onDone: () => {
      if (isVisible) setShowCursor(false)
    },
  })

  return (
    <section id="projects" ref={sectionRef} className="relative py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="mb-6 inline-flex items-center gap-4 rounded-full bg-(--primary-color)/10 px-6 py-3 text-3xl font-bold text-(--title-color) md:text-4xl lg:text-5xl">
              <span className="font-mono text-(--primary-color)">{'>'}_</span>
              <span className="flex items-center">
                {title}
                <span
                  className={`ml-1 text-4xl font-thin text-(--primary-color) md:text-5xl ${
                    showCursor && isVisible ? 'animate-pulse opacity-70' : 'opacity-0'
                  }`}
                  style={{ letterSpacing: '-0.2em' }}
                >
                  |
                </span>
              </span>
              {/* Reserve height to prevent layout shift */}
              {!isVisible && <span className="invisible">Projetos Recentes</span>}
            </h2>
            <p className="text-lg text-(--text-color)">
              Confira os projetos e soluções que venho desenvolvendo recentemente.
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
          <ErrorState message={error} onRetry={retry} />
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {loading
              ? Array.from({ length: 3 }).map((_, idx) => (
                  <ProjectCardSkeleton key={idx} />
                ))
              : repos.map((repo, index) => (
                  <ProjectCard key={repo.id} repo={repo} index={index} />
                ))}
          </div>
        )}
      </div>
    </section>
  )
}
