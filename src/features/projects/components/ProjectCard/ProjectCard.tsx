import { motion } from 'framer-motion'
import { ArrowRight, FolderGit2, GitFork, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { GithubRepo } from '../../types/github.types'
import { formatRepoDate, getDisplayLanguage, getLanguageColor, getLanguageIcon } from '../../utils/projectHelpers'

interface ProjectCardProps {
  repo: GithubRepo
  index?: number
}

export default function ProjectCard({ repo, index = 0 }: ProjectCardProps) {
  const language = getDisplayLanguage(repo.language)
  const languageIcon = getLanguageIcon(language)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link
        to={`/projects/${repo.name}`}
        className="group flex h-full flex-col rounded-2xl bg-(--secondary-color)/5 p-6 border border-white/5 shadow-lg transition-all hover:-translate-y-2 hover:bg-(--secondary-color)/10 hover:shadow-xl hover:shadow-(--primary-color)/5"
      >
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3 text-(--primary-color)">
            <FolderGit2 className="h-6 w-6" />
            <h3 className="text-xl font-bold text-(--title-color) transition-colors group-hover:text-(--primary-color) line-clamp-1">
              {repo.name}
            </h3>
            {repo.fork && (
              <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-2 py-0.5 text-xs text-(--text-color)/50">
                <GitFork className="h-3 w-3" />
                Fork
              </span>
            )}
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-(--text-color)/50 transition-all group-hover:translate-x-1 group-hover:text-(--primary-color)" />
        </div>

        <p className="mb-6 flex-1 text-(--text-color) text-sm leading-relaxed line-clamp-3">
          {repo.description || 'Nenhuma descrição fornecida.'}
        </p>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 text-xs font-medium text-(--text-color)/70">
          <div className="flex items-center gap-2">
            {languageIcon ? (
              <img src={languageIcon} alt={language} className="h-3.5 w-3.5" />
            ) : (
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: getLanguageColor(language) }}
              />
            )}
            <span>{language}</span>
          </div>

          <div className="flex items-center gap-1.5 opacity-70">
            <Github className="h-3.5 w-3.5" />
            <span>Atualizado em {formatRepoDate(repo.updated_at)}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
