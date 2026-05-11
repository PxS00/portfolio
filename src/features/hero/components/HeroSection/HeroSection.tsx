import { useState } from 'react'
import { FiDownload } from 'react-icons/fi'
import GridPattern from '../../../../shared/components/GridPattern/GridPattern'
import ShadowEffect from '../../../../shared/components/ShadowEffect/ShadowEffect'
import { useTypewriter } from '../../../../shared/hooks/useTypewriter'

export default function HeroSection() {
  const [showCursor, setShowCursor] = useState(true)
  const title = useTypewriter({
    text: 'Backend Software Engineer',
    delay: 80,
    startDelay: 400,
    onDone: () => setShowCursor(false),
  })
  return (
    <section className="relative z-30 flex min-h-[75vh] flex-col items-center justify-center py-24 text-center">
      <GridPattern />
      <ShadowEffect />
      <h1 className="mb-6 text-[clamp(1.8rem,6vw,4.5rem)] font-extrabold text-(--title-color)">
        Lucas Rossoni
      </h1>
      <h1 className="mb-6 text-[clamp(1.7rem,5.8vw,4.5rem)] font-extrabold text-(--title-color)">
        {title}
        {showCursor && (
          <span
            className="animate-pulse text-7xl font-thin opacity-70"
            style={{ letterSpacing: '-0.2em' }}
          >
            |
          </span>
        )}
      </h1>
      <p className="mb-10 text-xl font-semibold text-(--muted-color)">
        Desenvolvendo arquiteturas escaláveis para soluções digitais modernas.
      </p>
      <a
        href="/cv/lucas_rossoni_dieder_cv_pt_backend.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="relative z-50 pointer-events-auto group flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-105 hover:bg-purple-700 active:scale-95"
      >
        <FiDownload className="transition-transform duration-300 group-hover:translate-y-1" size={20} />
        Baixar currículo
      </a>
    </section>
  )
}
