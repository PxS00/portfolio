import { motion } from 'framer-motion'
import { ArrowRight, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../../app/providers/LanguageContext'
import { ENERGIAI_HACKATHON_CREDENTIAL_URL } from '../../../projects/data/credentials'

const renderFormattedText = (text: string, termsToBold: string[]): React.ReactNode => {
  if (!text) {
    return ''
  }
  let parts: Array<string | React.ReactNode> = [text]

  termsToBold.forEach((term) => {
    const nextParts: Array<string | React.ReactNode> = []
    parts.forEach((part) => {
      if (typeof part === 'string') {
        const splitText = part.split(term)
        splitText.forEach((subPart, i) => {
          nextParts.push(subPart)
          if (i < splitText.length - 1) {
            // eslint-disable-next-line react/no-array-index-key
            nextParts.push(<strong key={`${term}-${i}`}>{term}</strong>)
          }
        })
      } else {
        nextParts.push(part)
      }
    })
    parts = nextParts
  })

  return parts
}

const AcademicHighlight = () => {
  const { language, t } = useLanguage()
  const pt = language === 'pt-BR'

  return (
    <div className="flex flex-col gap-8">
      {/* FIAP Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-(--primary-color)/20 bg-linear-to-br from-(--bg-color-alt) to-(--bg-color) p-8 transition-all hover:-translate-y-1 hover:border-(--primary-color)/40 hover:shadow-md sm:p-12"
      >
        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-(--primary-color)/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-(--secondary-color)/5 blur-3xl" />

        <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-(--primary-color)/10 text-(--primary-color)">
            <Award className="h-10 w-10" />
          </div>
          <div>
            <h3 className="mb-3 text-2xl font-bold text-(--title-color)">
              {t('academic_highlight_title')}
            </h3>
            <p className="text-lg leading-relaxed text-(--muted-color)">
              {renderFormattedText(t('academic_highlight_desc'), [
                'FIAP NEXT',
                'Hospital das Clínicas',
              ])}
            </p>
            <Link
              to="/projects/Luma"
              className="group mt-4 inline-flex items-center gap-2 font-semibold text-(--primary-color) transition-all hover:translate-x-1"
            >
              {t('academic_highlight_link')}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </motion.div>

      <section className="rounded-3xl border border-(--primary-color)/20 bg-(--bg-color-alt) p-8 sm:p-12">
        <p className="mb-3 text-sm font-semibold text-(--primary-color)">
          Hackathon Oracle ONE + Alura · 2026
        </p>
        <h3 className="mb-4 text-2xl font-bold text-(--title-color)">EnergiAI</h3>
        <p className="text-lg leading-relaxed text-(--muted-color)">
          {pt
            ? 'Atuação no backend Java e Spring Boot, configuração de OCI e IAM, deploy e organização de issues e pull requests. Colaboração com Data Science nas revisões dos modelos e apoio técnico ao Demo Day.'
            : 'Java and Spring Boot backend development, OCI and IAM configuration, deployment, and issue and pull request coordination. Collaboration with Data Science on model reviews and technical support for Demo Day.'}
        </p>
        <div className="mt-5 flex flex-wrap gap-5">
          <Link
            to="/projects/energi-ai-g9-br-team-09"
            className="inline-flex items-center gap-2 font-semibold text-(--primary-color)"
          >
            {pt ? 'Conhecer o projeto e a participação' : 'Explore the project and my contribution'}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={ENERGIAI_HACKATHON_CREDENTIAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-semibold text-(--primary-color)"
          >
            {pt ? 'Certificado do hackathon' : 'Hackathon certificate'}
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Certification Highlight */}
      <section className="rounded-3xl border border-(--primary-color)/20 bg-(--bg-color-alt) p-8 sm:p-12">
        <img
          src="/certs/OCI-AI-Foundations-2026-badge.jpg"
          alt="Oracle Certified AI Foundations Associate 2026 badge"
          width="552"
          height="276"
          loading="lazy"
          decoding="async"
          className="mb-6 h-auto w-full max-w-64 rounded-xl object-contain"
        />
        <h3 className="mb-3 text-2xl font-bold text-(--title-color)">
          Oracle Cloud Infrastructure Certified AI Foundations Associate
        </h3>
        <p className="text-lg leading-relaxed text-(--muted-color)">
          {pt
            ? 'Certificação Oracle em fundamentos de inteligência artificial.'
            : 'Oracle certification in artificial intelligence foundations.'}
        </p>
        <p className="mt-3 text-sm text-(--muted-color)">
          {pt
            ? 'Emitida em 30/09/2026 · Válida até 30/09/2028'
            : 'Issued 30 September 2026 · Valid until 30 September 2028'}
        </p>
        <a
          href="/certs/OCI-AI-Foundations-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 font-semibold text-(--primary-color)"
        >
          {t('cert_pdf_link')}
          <ArrowRight className="h-4 w-4" />
        </a>
      </section>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative overflow-hidden rounded-3xl border border-(--primary-color)/20 bg-linear-to-br from-(--bg-color-alt) to-(--bg-color) p-8 transition-all hover:-translate-y-1 hover:border-(--primary-color)/40 hover:shadow-md sm:p-12"
      >
        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-64 w-64 rounded-full bg-(--primary-color)/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-64 w-64 rounded-full bg-(--secondary-color)/5 blur-3xl" />

        <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center">
          <div className="group flex h-24 w-24 shrink-0 items-center justify-center overflow-visible">
            <img
              src="/certs/OCI25FNDCFA.webp"
              alt="Oracle Cloud Infrastructure Foundations Associate 2025 Badge"
              width="96"
              height="96"
              loading="lazy"
              decoding="async"
              className="h-full w-full scale-[2.5] object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-[2.8]"
            />
          </div>
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-bold text-(--title-color)">
              Oracle Cloud Infrastructure 2025 Certified Foundations Associate
            </h3>
            <p className="text-lg leading-relaxed text-(--muted-color)">
              {renderFormattedText(t('cert_desc'), ['Oracle University'])}
            </p>
            <p className="mt-2 text-sm text-(--muted-color)">{t('cert_skills')}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <span className="inline-block rounded-full bg-(--primary-color)/10 px-3 py-1 text-sm font-medium text-(--primary-color)">
                {t('cert_status')}
              </span>
              <a
                href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=E63998027E057F05952B3E9B77916904361B1492B6DAF2EC28A3040227D2891D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-(--primary-color) hover:underline"
              >
                {t('cert_badge_link')}
              </a>
              <span className="text-(--muted-color)">•</span>
              <a
                href="/certs/OCI-associateCertificate.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-(--primary-color) hover:underline"
              >
                {t('cert_pdf_link')}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default AcademicHighlight
