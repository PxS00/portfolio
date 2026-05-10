import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import ErrorState from '../../../../shared/components/ErrorState/ErrorState'
import { useProjectDetail } from '../../hooks/useProjectDetail'
import './ProjectDetail.css'
import ProjectDetailHeader from './ProjectDetailHeader'
import ProjectDetailSkeleton from './ProjectDetailSkeleton'
import ReadmeViewer from './ReadmeViewer'

export default function ProjectDetail() {
  const { repoName } = useParams<{ repoName: string }>()
  const { repo, readme, loading, error, retry } = useProjectDetail(repoName!)

  if (loading) return <ProjectDetailSkeleton />

  if (error || !repo) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-6 py-32 text-center lg:px-12">
        <ErrorState message={error || 'Projeto não encontrado.'} onRetry={retry}>
          <Link
            to="/projects"
            className="rounded-lg border border-(--primary-color)/30 px-6 py-2 text-sm font-semibold text-(--primary-color) transition-colors hover:bg-(--primary-color)/10"
          >
            Voltar aos projetos
          </Link>
        </ErrorState>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-32 lg:px-12">
      {/* Floating back button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="fixed top-20 left-8 z-40"
      >
        <Link
          to="/projects"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-(--bg-color)/80 px-5 py-3 text-sm font-semibold text-(--text-color) shadow-lg backdrop-blur-xl transition-all hover:border-(--primary-color)/30 hover:text-(--primary-color)"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Voltar
        </Link>
      </motion.div>

      {/* Floating GitHub button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.4 }}
        className="fixed top-20 right-8 z-40"
      >
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-(--primary-color) px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:brightness-110"
        >
          Ver no GitHub
          <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </a>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
        <ProjectDetailHeader repo={repo} />

        {readme ? (
          <ReadmeViewer content={readme} repoName={repo.name} defaultBranch={repo.default_branch} />
        ) : (
          <div className="rounded-2xl bg-(--secondary-color)/5 p-12 text-center border border-white/5">
            <p className="text-(--text-color)/50">Este repositório não possui README.</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}
