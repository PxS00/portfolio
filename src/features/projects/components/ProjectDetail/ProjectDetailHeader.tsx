import { FolderGit2, GitFork, Github } from 'lucide-react'
import type { GithubRepo } from '../../types/github.types'
import { formatRepoDate, getDisplayLanguage, getLanguageColor, getLanguageIcon } from '../../utils/projectHelpers'

interface ProjectDetailHeaderProps {
  repo: GithubRepo
}

// Displays repo name, description, language icon, and update date
export default function ProjectDetailHeader({ repo }: ProjectDetailHeaderProps) {
  const language = getDisplayLanguage(repo.language, repo.name)
  const languageIcon = getLanguageIcon(language)

  return (
    <div className="mb-10 border-b border-white/5 pb-10">
      <div className="mb-3 flex items-center gap-3">
        <FolderGit2 className="h-7 w-7 flex-shrink-0" style={{ color: getLanguageColor(language) }} />
        <h1 className="break-words text-2xl font-bold text-(--title-color) md:text-4xl min-w-0 flex-1">
          {repo.name}
        </h1>
        {repo.fork && (
          <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-xs text-(--text-color)/50 flex-shrink-0">
            <GitFork className="h-3 w-3" />
            Fork
          </span>
        )}
      </div>
      {repo.description && (
        <p className="mt-2 max-w-2xl text-lg text-(--text-color) break-words">{repo.description}</p>
      )}
      <div className="mt-4 flex flex-col gap-4 text-sm text-(--text-color)/70 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          {languageIcon ? (
            <img src={languageIcon} alt={language} className="h-4 w-4" />
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
    </div>
  )
}
