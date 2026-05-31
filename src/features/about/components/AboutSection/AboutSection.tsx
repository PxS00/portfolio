import TechCarousel from '../../../stacks/components/TechCarousel'
import { aboutCards } from '../../data/aboutCards'
import AboutCard from '../AboutCard/AboutCard'
import AcademicHighlight from '../AcademicHighlight/AcademicHighlight'
import { useLanguage } from '../../../../app/providers/LanguageContext'
import type { TranslationKeys } from '../../../../shared/constants/translations'

const AboutSection = () => {
  const { t } = useLanguage()

  return (
    <section
      id="about"
      className="relative z-30 mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-24 lg:px-8"
    >
      {/* Title */}
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-(--title-color) sm:text-4xl">
          {t('about_title_pre')}
          <span className="text-(--primary-color)">{t('about_title_post')}</span>
        </h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-(--muted-color)">
          {t('about_intro')}
        </p>
      </div>

      {/* Tech Carousel */}
      <div className="mb-20">
        <div className="mb-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-(--title-color)">{t('about_tech_title')}</h3>
          <p className="text-sm text-(--muted-color)">{t('about_tech_subtitle')}</p>
        </div>
        <TechCarousel />
      </div>

      {/* Specialization Cards */}
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {aboutCards.map((card, index) => (
          <AboutCard
            key={card.titleKey}
            title={t(card.titleKey as TranslationKeys)}
            description={t(card.descriptionKey as TranslationKeys)}
            icon={card.icon}
            delay={index * 0.1}
          />
        ))}
      </div>

      <AcademicHighlight />
    </section>
  )
}

export default AboutSection
