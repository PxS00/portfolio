import { useState } from 'react'
import GridPattern from '../../components/GridPattern/GridPattern'
import ShadowEffect from '../../components/ShadowEffect/ShadowEffect'
import { useTypewriter } from '../../hooks/useTypewriter'

export default function HeroSection() {
  const [showCursor, setShowCursor] = useState(true)
  const title = useTypewriter({
    text: 'Full-Stack Developer',
    delay: 80,
    startDelay: 400,
    onDone: () => setShowCursor(false),
  })
  return (
    <section className="relative z-30 flex min-h-[75vh] flex-col items-center justify-center py-24 text-center">
      <GridPattern />
      <ShadowEffect />
      <h1 className="mb-6 text-6xl font-extrabold text-(--title-color) md:text-7xl">
        Lucas Rossoni
      </h1>
      <h1 className="mb-6 text-6xl font-extrabold text-(--title-color) md:text-7xl">
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
        Dive into my work and get to know the developer behind the code.
      </p>
    </section>
  )
}
