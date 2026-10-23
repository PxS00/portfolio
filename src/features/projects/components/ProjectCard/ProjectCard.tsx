import { motion } from 'framer-motion'
import { ArrowRight, FolderGit2, GitFork, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { GithubRepo } from '../../types/github.types'
import { getProjectStory } from '../../data/projectStories'
import {
  formatRepoDate,
  getDisplayLanguage,
  getLanguageColor,
  getLanguageIcon,
} from '../../utils/projectHelpers'
import { useLanguage } from '../../../../app/providers/LanguageContext'

type ProjectCardProps = {
  repo: GithubRepo
  index?: number
}

const ProjectCard = ({ repo, index = 0 }: ProjectCardProps) => {
  const { language, t } = useLanguage()
  const story = getProjectStory(repo.name)
  const displayLang = getDisplayLanguage(repo.language, repo.name)
  const languageIcon = getLanguageIcon(displayLang)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="w-full min-w-0"
    >
      <Link
        to={`/projects/${repo.name}`}
        className="group flex h-full w-full min-w-0 flex-col rounded-2xl border border-(--border-color) bg-(--secondary-color)/5 p-4 shadow-lg backdrop-blur-xl transition-all duration-200 hover:-translate-y-2 hover:bg-(--secondary-color)/10 hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.12)] sm:p-6"
      >
        {story?.screenshots?.[0] && (
          <img
            src={story.screenshots[0].src}
            alt={story.screenshots[0].caption[language]}
            width={story.screenshots[0].width}
            height={story.screenshots[0].height}
            loading="lazy"
            decoding="async"
            className="mb-5 aspect-video w-full rounded-xl border border-(--border-color) object-cover object-top"
          />
        )}
        {story?.screenshots && story.screenshots.length > 1 && (
          <div className="mb-5">
            <div className="mb-2 grid grid-cols-2 gap-2" aria-hidden="true">
              {story.screenshots.slice(1, 3).map((screenshot) => (
                <img
                  key={screenshot.src}
                  src={screenshot.src}
                  alt=""
                  width={screenshot.width}
                  height={screenshot.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-video w-full rounded-lg border border-(--border-color) object-cover object-top"
                />
              ))}
            </div>
            <p className="text-xs font-semibold text-(--primary-color)">
              {language === 'pt-BR'
                ? `Ver ${story.screenshots.length} telas do projeto`
                : `View ${story.screenshots.length} project screenshots`}
            </p>
          </div>
        )}
        <div className="mb-4 flex min-w-0 items-start justify-between gap-2">
          <div className="flex min-w-0 flex-1 items-center gap-3">
            <FolderGit2
              className="h-6 w-6 shrink-0"
              style={{ color: getLanguageColor(displayLang) }}
            />
            <h3 className="min-w-0 text-xl font-bold wrap-break-word text-(--title-color) transition-colors group-hover:text-(--primary-color)">
              {story?.name ?? repo.name}
            </h3>
            {repo.fork && (
              <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-(--border-color) bg-(--bg-color-alt) px-2 py-0.5 text-xs text-(--text-color)/50">
                <GitFork className="h-3 w-3" />
                Fork
              </span>
            )}
          </div>
          <ArrowRight className="h-5 w-5 shrink-0 text-(--text-color)/50 transition-all group-hover:translate-x-1 group-hover:text-(--primary-color)" />
        </div>

        {story && (
          <p className="mb-3 text-xs font-semibold text-(--primary-color)">
            {story.category[language]}
          </p>
        )}
        <p className="mb-6 flex-1 text-sm leading-relaxed text-(--text-color)">
          {story?.copy[language].summary ?? (repo.description || t('project_card_fallback_desc'))}
        </p>

        <div className="mt-auto flex flex-col items-start gap-4 text-xs font-medium text-(--text-color)/70 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            {languageIcon ? (
              <img
                src={languageIcon}
                alt={displayLang}
                width="14"
                height="14"
                loading="lazy"
                decoding="async"
                className="h-3.5 w-3.5"
              />
            ) : (
              <span
                className="h-3 w-3 rounded-full"
                style={{ backgroundColor: getLanguageColor(displayLang) }}
              />
            )}
            <span>{displayLang}</span>
          </div>

          <div className="flex items-center gap-1.5 opacity-70">
            <Github className="h-3.5 w-3.5" />
            <span>{formatRepoDate(repo.updated_at, language)}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard
