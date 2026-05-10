import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink, Github, FolderGit2 } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { useProjectDetail } from '../../hooks/useProjectDetail'
import { getLanguageColor, formatRepoDate } from '../../utils/projectHelpers'
import './ProjectDetail.css'

export default function ProjectDetail() {
  const { repoName } = useParams<{ repoName: string }>()
  const { repo, readme, loading, error, retry } = useProjectDetail(repoName!)

  if (loading) {
    return (
      <div className="container mx-auto px-6 py-32 lg:px-12">
        <div className="animate-pulse space-y-6">
          <div className="h-8 w-48 rounded bg-white/10" />
          <div className="h-12 w-2/3 rounded bg-white/10" />
          <div className="h-6 w-1/3 rounded bg-white/10" />
          <div className="mt-12 space-y-4">
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-5/6 rounded bg-white/10" />
            <div className="h-4 w-4/6 rounded bg-white/10" />
            <div className="h-4 w-full rounded bg-white/10" />
            <div className="h-4 w-3/4 rounded bg-white/10" />
          </div>
        </div>
      </div>
    )
  }

  if (error || !repo) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-6 py-32 text-center lg:px-12">
        <p className="mb-4 text-red-400">{error || 'Projeto não encontrado.'}</p>
        <div className="flex gap-4">
          <button
            onClick={retry}
            className="rounded-lg bg-red-500/20 px-6 py-2 text-sm font-semibold text-red-400 transition-colors hover:bg-red-500/30"
          >
            Tentar novamente
          </button>
          <Link
            to="/projects"
            className="rounded-lg border border-(--primary-color)/30 px-6 py-2 text-sm font-semibold text-(--primary-color) transition-colors hover:bg-(--primary-color)/10"
          >
            Voltar aos projetos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-6 py-32 lg:px-12">
      {/* Floating buttons — fixed at bottom corners */}
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
        {/* Header */}
        <div className="mb-10 border-b border-white/5 pb-10">
          <div className="mb-3 flex items-center gap-3 text-(--primary-color)">
            <FolderGit2 className="h-7 w-7" />
            <h1 className="text-3xl font-bold text-(--title-color) md:text-4xl">{repo.name}</h1>
          </div>
          {repo.description && (
            <p className="mt-2 max-w-2xl text-lg text-(--text-color)">{repo.description}</p>
          )}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-(--text-color)/70">
            <div className="flex items-center gap-2">
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: getLanguageColor(repo.language) }}
              />
              <span>{repo.language || 'N/A'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Github className="h-3.5 w-3.5" />
              <span>Atualizado em {formatRepoDate(repo.updated_at)}</span>
            </div>
          </div>
        </div>

        {/* README */}
        {readme ? (
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="readme-content prose prose-invert max-w-none"
          >
            <Markdown 
              remarkPlugins={[remarkGfm]} 
              rehypePlugins={[rehypeRaw]}
              components={{
                img: ({ node, ...props }) => {
                  let src = props.src || ''
                  // Rewrite relative URLs to absolute GitHub raw URLs
                  if (src && !src.startsWith('http') && !src.startsWith('data:')) {
                    src = src.replace(/^\/+/, '') // Remove leading slash
                    src = `https://raw.githubusercontent.com/PxS00/${repo.name}/${repo.default_branch}/${src}`
                  }
                  return <img {...props} src={src} alt={props.alt || ''} loading="lazy" />
                }
              }}
            >
              {readme}
            </Markdown>
          </motion.article>
        ) : (
          <div className="rounded-2xl bg-(--secondary-color)/5 p-12 text-center border border-white/5">
            <p className="text-(--text-color)/50">Este repositório não possui README.</p>
          </div>
        )}
      </motion.div>
    </div>
  )
}
