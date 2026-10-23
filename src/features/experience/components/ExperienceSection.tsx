import { ArrowRight, BriefcaseBusiness, LockKeyhole } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../app/providers/LanguageContext'

const experienceCopy = {
  'pt-BR': {
    title: 'Experiência profissional',
    intro: 'Experiência freelance no desenvolvimento de software e soluções para negócios.',
    comRole: 'Back-end Developer',
    comPeriod: 'Abril – novembro de 2025',
    comType: 'Freelance',
    comDescription:
      'Desenvolvimento de serviços e APIs para coleta, processamento e visualização de dados operacionais de sensores industriais.',
    comItems: [
      'Serviços em Python para coleta e processamento contínuo de dados em tempo real.',
      'Rotinas de análise preditiva e detecção de anomalias em séries temporais para apoiar o monitoramento de processos.',
      'Componentes em Java e APIs REST integrados a dashboards React para visualização de métricas operacionais.',
    ],
    confidentiality:
      'Projeto confidencial. Código, telas e demonstração não estão disponíveis publicamente.',
    freelanceRole: 'Desenvolvedor de software · Freelance',
    freelancePeriod: 'Trabalho por projeto',
    freelanceDescription:
      'Entregas para a Céu de Lavanda, da presença digital à gestão de processos do negócio.',
    freelanceItems: [
      'API REST em Java e Spring Boot para gestão de clientes e processamento de pagamentos, com modelagem relacional, JPA/Hibernate e validações de entrada (agosto – setembro de 2025).',
      'Catálogo digital para descoberta de fragrâncias, com categorias, busca, filtros e páginas individuais de produtos.',
      'Lavanda Flow: sistema de estoque e produção com controle de lotes, validade e rastreabilidade.',
    ],
    catalogLink: 'Ver catálogo digital',
    flowLink: 'Conhecer o Lavanda Flow',
  },
  'en-GB': {
    title: 'Professional experience',
    intro: 'Freelance experience developing software and business solutions.',
    comRole: 'Backend Developer',
    comPeriod: 'April – November 2025',
    comType: 'Freelance',
    comDescription:
      'Developed services and APIs to collect, process and visualise operational data from industrial sensors.',
    comItems: [
      'Python services for continuous collection and processing of real-time data.',
      'Predictive analysis and time-series anomaly detection routines to support process monitoring.',
      'Java components and REST APIs integrated with React dashboards for operational metrics.',
    ],
    confidentiality:
      'Confidential project. Source code, screenshots and a demonstration are not publicly available.',
    freelanceRole: 'Software Developer · Freelance',
    freelancePeriod: 'Project-based work',
    freelanceDescription:
      'Software delivery for Céu de Lavanda, from its digital presence to business process management.',
    freelanceItems: [
      'Java and Spring Boot REST API for customer management and payment processing, with relational modelling, JPA/Hibernate and input validation (August – September 2025).',
      'A digital fragrance catalogue with categories, search, filters and individual product pages.',
      'Lavanda Flow: an inventory and production system with batch management, expiry control and traceability.',
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
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-(--border-color) bg-(--bg-color-alt) p-6 sm:p-8">
          <p className="mb-3 text-sm font-semibold text-(--primary-color)">
            {copy.comType} · {copy.comPeriod}
          </p>
          <h3 className="mb-2 text-2xl font-bold text-(--title-color)">
            COM Inovação e Biotecnologia Aplicada LTDA
          </h3>
          <p className="mb-5 font-semibold text-(--text-color)">{copy.comRole}</p>
          <p className="mb-5 leading-relaxed text-(--text-color)">{copy.comDescription}</p>
          <ul className="list-disc space-y-3 pl-5 text-(--text-color)">
            {copy.comItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 flex items-start gap-2 border-t border-(--border-color) pt-5 text-sm leading-relaxed text-(--muted-color)">
            <LockKeyhole aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
            {copy.confidentiality}
          </p>
        </article>
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
