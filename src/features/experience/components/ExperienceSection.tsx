import { ArrowRight, BriefcaseBusiness } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../app/providers/LanguageContext'

const experienceCopy = {
  'pt-BR': {
    title: 'Experiência profissional',
    intro: 'Experiência freelance no desenvolvimento de software e soluções para negócios.',
    freelanceRole: 'Desenvolvedor de software · Freelance',
    freelancePeriod: 'Setembro de 2026 – atual',
    freelanceDescription:
      'Desenvolvimento freelance do Lavanda Flow para apoiar o controle de estoque e produção da Céu de Lavanda.',
    freelanceItems: [
      'Backend em Java 25, Spring Boot e Spring Modulith, com APIs REST e persistência em PostgreSQL.',
      'Controle de lotes, validade e movimentações com FEFO para priorizar lotes elegíveis que vencem primeiro.',
      'Registro de produção e rastreabilidade entre matérias-primas, produtos intermediários e lotes produzidos.',
      'Migrações Flyway, testes automatizados com Testcontainers e entregas organizadas com GitHub Projects, Kanban e pull requests.',
    ],
    catalogLink: 'Ver catálogo digital',
    flowLink: 'Conhecer o Lavanda Flow',
  },
  'en-GB': {
    title: 'Professional experience',
    intro: 'Freelance experience developing software and business solutions.',
    freelanceRole: 'Software Developer · Freelance',
    freelancePeriod: 'September 2026 – present',
    freelanceDescription:
      'Freelance development of Lavanda Flow to support inventory and production management for Céu de Lavanda.',
    freelanceItems: [
      'Java 25, Spring Boot and Spring Modulith backend with REST APIs and PostgreSQL persistence.',
      'Batch, expiry and movement control with FEFO allocation, prioritising eligible batches that expire first.',
      'Production registration and traceability across raw materials, intermediate products and output batches.',
      'Flyway migrations, automated tests with Testcontainers and delivery organised with GitHub Projects, Kanban and pull requests.',
    ],
    catalogLink: 'Explore the digital catalogue',
    flowLink: 'Explore Lavanda Flow',
  },
}

const ExperienceSection = () => {
  const { language } = useLanguage()
  const copy = experienceCopy[language]

  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-24 lg:px-12"
    >
      <div className="mb-10 max-w-3xl">
        <BriefcaseBusiness aria-hidden="true" className="mb-4 h-8 w-8 text-(--primary-color)" />
        <h2
          id="experience-title"
          className="mb-4 text-3xl font-bold text-(--title-color) sm:text-4xl"
        >
          {copy.title}
        </h2>
        <p className="text-lg text-(--muted-color)">{copy.intro}</p>
      </div>
      <div className="grid gap-6">
        <article className="rounded-2xl border border-(--border-color) bg-(--bg-color-alt) p-6 sm:p-8">
          <p className="mb-3 text-sm font-semibold text-(--primary-color)">
            {copy.freelancePeriod}
          </p>
          <h3 className="mb-2 text-2xl font-bold text-(--title-color)">Céu de Lavanda</h3>
          <p className="mb-5 font-semibold text-(--text-color)">{copy.freelanceRole}</p>
          <p className="mb-5 leading-relaxed text-(--text-color)">{copy.freelanceDescription}</p>
          <ul className="list-disc space-y-3 pl-5 text-(--text-color)">
            {copy.freelanceItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-5">
            <Link
              to="/projects/ceu-de-lavanda-catalog"
              className="inline-flex items-center gap-2 font-semibold text-(--primary-color)"
            >
              {copy.catalogLink}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              to="/projects/lavanda-flow"
              className="inline-flex items-center gap-2 font-semibold text-(--primary-color)"
            >
              {copy.flowLink}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}

export default ExperienceSection
