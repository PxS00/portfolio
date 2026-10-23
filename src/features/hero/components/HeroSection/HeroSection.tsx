import { useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import GridPattern from '../../../../shared/components/GridPattern/GridPattern'
import ShadowEffect from '../../../../shared/components/ShadowEffect/ShadowEffect'
import { useTypewriter } from '../../../../shared/hooks/useTypewriter'
import { useLanguage } from '../../../../app/providers/LanguageContext'

const HeroSection = () => {
  const [showCursor, setShowCursor] = useState(true)
  const { language, t } = useLanguage()
  const title = useTypewriter({
    text: 'Backend Software Engineer',
    delay: 80,
    startDelay: 400,
    onDone: () => setShowCursor(false),
  })

  return (
    <section className="relative z-30 flex flex-col items-center justify-start overflow-hidden px-4 pt-24 pb-10 text-center sm:min-h-[75vh] sm:justify-center sm:py-24">
      <GridPattern />
      <ShadowEffect />
      <div className="mb-8 flex flex-col items-center gap-5 px-4 sm:flex-row sm:gap-8">
        <img
          src="/images/lucas-rossoni.jpg"
          alt={language === 'pt-BR' ? 'Retrato de Lucas Rossoni' : 'Portrait of Lucas Rossoni'}
          width="400"
          height="400"
          fetchPriority="high"
          className="h-28 w-28 shrink-0 rounded-full border-2 border-(--primary-color)/40 object-cover shadow-lg sm:h-36 sm:w-36"
        />
        <h1 className="text-[clamp(1.8rem,6vw,4.5rem)] font-extrabold text-(--title-color)">
          Lucas Rossoni
        </h1>
      </div>
      <p className="mb-6 text-[clamp(1.7rem,5.8vw,4.5rem)] font-extrabold text-(--title-color)">
        {title}
        {showCursor && (
          <span
            className="animate-pulse text-7xl font-thin opacity-70"
            style={{ letterSpacing: '-0.2em' }}
          >
            |
          </span>
        )}
      </p>
      <p className="mb-10 text-xl font-semibold text-(--muted-color)">{t('hero_subtitle')}</p>
      <div className="pointer-events-auto relative z-40 flex w-full max-w-2xl flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center">
        <Link
          to="/#projects"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-purple-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-purple-700"
        >
          {t('hero_view_projects')}
        </Link>
        <Link
          to="/contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-(--primary-color)/50 bg-(--bg-color-alt) px-6 py-3 font-semibold text-(--title-color) transition-colors hover:bg-(--primary-color)/10"
        >
          {t('hero_contact')}
        </Link>
        <a
          href={
            language === 'pt-BR'
              ? '/cv/lucas_rossoni_dieder_cv_pt_backend.pdf'
              : '/cv/lucas_rossoni_dieder_cv_en_backend.pdf'
          }
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-(--border-color) bg-(--bg-color-alt) px-6 py-3 font-semibold text-(--text-color) transition-colors hover:bg-(--primary-color)/10"
        >
          <FiDownload
            className="transition-transform duration-300 group-hover:translate-y-1"
            size={20}
          />
          {t('hero_download_cv')}
        </a>
      </div>
    </section>
  )
}

export default HeroSection
