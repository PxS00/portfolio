import { motion } from 'framer-motion'
import { ArrowRight, FolderGit2, GitFork, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { GithubRepo } from '../../types/github.types'
import {
  formatRepoDate,
  getDisplayLanguage,
  getLanguageColor,
  getLanguageIcon,
} from '../../utils/projectHelpers'

type ProjectCardProps = {
  repo: GithubRepo
  index?: number
}

export default function ProjectCard({ repo, index = 0 }: ProjectCardProps) {
  const language = getDisplayLanguage(repo.language, repo.name)
  const languageIcon = getLanguageIcon(language)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="w-full"
    >
      <Link
        to={`/projects/${repo.name}`}
        className="group flex h-full w-full flex-col rounded-2xl border border-white/5 bg-(--secondary-color)/5 p-6 shadow-lg backdrop-blur-xl transition-all duration-200 hover:-translate-y-2 hover:bg-(--secondary-color)/10 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.12)]"
      >
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <FolderGit2 className="h-6 w-6" style={{ color: getLanguageColor(language) }} />
            <h3 className="line-clamp-1 text-xl font-bold text-(--title-color) transition-colors group-hover:text-(--primary-color)">
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

        <p className="mb-6 line-clamp-3 flex-1 text-sm leading-relaxed text-(--text-color)">
          {repo.description || 'Nenhuma descrição fornecida.'}
        </p>

        <div className="mt-auto flex flex-col items-start gap-4 text-xs font-medium text-(--text-color)/70 sm:flex-row sm:items-center sm:justify-between">
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
            <span>Atualiz. {formatRepoDate(repo.updated_at)}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
