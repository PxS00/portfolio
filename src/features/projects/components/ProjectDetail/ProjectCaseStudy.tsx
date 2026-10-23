import { ArrowLeft, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../../app/providers/LanguageContext'
import type { ProjectStory } from '../../data/projectStories'

type Props = { story: ProjectStory; repoName: string }

const ProjectCaseStudy = ({ story, repoName }: Props) => {
  const { language, t } = useLanguage()
  const copy = story.copy[language]
  const pt = language === 'pt-BR'
  const links = [
    {
      url: `https://github.com/PxS00/${repoName}`,
      label: { 'pt-BR': 'Código no GitHub', 'en-GB': 'Code on GitHub' },
    },
    ...story.links,
  ]

  return (
    <article className="mx-auto w-full max-w-6xl px-4 py-32 sm:px-6 lg:px-12">
      <Link
        to="/projects"
        className="mb-10 inline-flex items-center gap-2 font-semibold text-(--primary-color)"
      >
        <ArrowLeft className="h-4 w-4" />
        {t('project_detail_back_to_list')}
      </Link>
      <header className="mb-12 border-b border-(--border-color) pb-10">
        <p className="mb-4 text-sm font-semibold text-(--primary-color)">
          {story.category[language]}
        </p>
        <h1 className="mb-6 text-4xl font-bold text-(--title-color) sm:text-6xl">{story.name}</h1>
        <p className="max-w-3xl text-xl leading-relaxed text-(--text-color)">{copy.summary}</p>
        <ul aria-label={pt ? 'Tecnologias' : 'Technologies'} className="mt-6 flex flex-wrap gap-2">
          {story.stack.map((technology) => (
            <li
              key={technology}
              className="rounded-full border border-(--border-color) px-3 py-1 text-sm text-(--text-color)"
            >
              {technology}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-4">
          {links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-(--primary-color)/30 px-4 py-3 font-semibold text-(--primary-color) transition-colors hover:bg-(--primary-color)/10"
            >
              {link.label[language]}
              <ExternalLink className="h-4 w-4 shrink-0" />
            </a>
          ))}
        </div>
      </header>
      {story.screenshots && (
        <section aria-label={pt ? 'Telas do projeto' : 'Project screenshots'} className="mb-12">
          <h2 className="mb-3 text-2xl font-bold text-(--title-color)">
            {pt ? 'Telas do projeto' : 'Project screenshots'}
          </h2>
          <p className="mb-6 text-sm text-(--muted-color)">
            {pt
              ? 'Selecione uma imagem para ver em tamanho completo.'
              : 'Select an image to view it at full size.'}
          </p>
          <div className="grid items-start gap-6 md:grid-cols-2">
            {story.screenshots.map((screenshot) => (
              <figure
                key={screenshot.src}
                className="overflow-hidden rounded-2xl border border-(--border-color)"
              >
                <a
                  href={screenshot.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={
                    pt
                      ? `Ampliar: ${screenshot.caption[language]}`
                      : `Enlarge: ${screenshot.caption[language]}`
                  }
                >
                  <img
                    src={screenshot.src}
                    alt={screenshot.caption[language]}
                    width={screenshot.width}
                    height={screenshot.height}
                    loading="lazy"
                    decoding="async"
                    className="aspect-[4/3] w-full bg-(--bg-color-alt) object-contain"
                  />
                </a>
                <figcaption className="bg-(--bg-color-alt) px-5 py-3 text-sm text-(--muted-color)">
                  {screenshot.caption[language]}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
      <div className="grid gap-10 md:grid-cols-2">
        <section>
          <h2 className="mb-4 text-2xl font-bold text-(--title-color)">
            {pt ? 'O problema' : 'The problem'}
          </h2>
          <p className="leading-relaxed text-(--text-color)">{copy.context}</p>
        </section>
        <section>
          <h2 className="mb-4 text-2xl font-bold text-(--title-color)">
            {pt ? 'Minha contribuição' : 'My contribution'}
          </h2>
          <p className="mb-4 leading-relaxed text-(--text-color)">{copy.role}</p>
          <ul className="list-disc space-y-3 pl-5 text-(--text-color)">
            {copy.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <section className="mt-14">
        <h2 className="mb-6 text-2xl font-bold text-(--title-color)">
          {pt ? 'Decisões de engenharia' : 'Engineering decisions'}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {copy.decisions.map((decision) => (
            <div
              key={decision.title}
              className="rounded-2xl border border-(--border-color) bg-(--secondary-color)/5 p-6"
            >
              <h3 className="mb-3 text-lg font-bold text-(--title-color)">{decision.title}</h3>
              <p className="leading-relaxed text-(--text-color)">{decision.description}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="mt-14">
        <h2 className="mb-4 text-2xl font-bold text-(--title-color)">
          {pt ? 'Entrega e estágio do projeto' : 'Delivery and project status'}
        </h2>
        <p className="max-w-4xl leading-relaxed text-(--text-color)">{copy.outcome}</p>
      </section>
      <section className="mt-14 rounded-2xl border border-(--border-color) p-6 sm:p-8">
        <h2 className="mb-4 text-2xl font-bold text-(--title-color)">
          {pt ? 'Roteiro de demonstração' : 'Demo walkthrough'}
        </h2>
        <ol className="list-decimal space-y-3 pl-5 text-(--text-color)">
          {copy.walkthrough.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </article>
  )
}

export default ProjectCaseStudy
