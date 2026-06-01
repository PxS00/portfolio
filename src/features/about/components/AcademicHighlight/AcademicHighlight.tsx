import { motion } from 'framer-motion'
import { ArrowRight, Award } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../../../app/providers/LanguageContext'

const AcademicHighlight = () => {
  const { t } = useLanguage()

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
            <p
              className="text-lg leading-relaxed text-(--muted-color)"
              dangerouslySetInnerHTML={{
                __html: t('academic_highlight_desc')
                  .replace('FIAP NEXT', '<strong>FIAP NEXT</strong>')
                  .replace('Hospital das Clínicas', '<strong>Hospital das Clínicas</strong>'),
              }}
            />
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

      {/* Certification Highlight */}
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
              Oracle Cloud Infrastructure Foundations Associate 2025
            </h3>
            <p
              className="text-lg leading-relaxed text-(--muted-color)"
              dangerouslySetInnerHTML={{
                __html: t('cert_desc').replace(
                  'Oracle University',
                  '<strong>Oracle University</strong>',
                ),
              }}
            />
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
