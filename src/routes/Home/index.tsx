import GridPattern from '../../components/GridPattern/GridPattern'
import ShadowEffect from '../../components/ShadowEffect/ShadowEffect'
import { useTypewriter } from '../../hooks/useTypewriter'

export default function Home() {
  const title = useTypewriter({ text: 'Full-Stack Developer', delay: 80, startDelay: 400 })
  return (
    <section className="relative z-30 flex min-h-[75vh] flex-col items-center justify-center py-24 text-center">
      <GridPattern />
      <ShadowEffect />
      <h1 className="mb-6 text-6xl font-extrabold text-(--title-color) md:text-7xl">
        Lucas Rossoni
      </h1>
      <h1 className="mb-6 text-6xl font-extrabold text-(--title-color) md:text-7xl">
        {title}
        <span className="animate-pulse opacity-70">|</span>
      </h1>
      <p className="mb-10 text-xl font-semibold text-(--muted-color)">
        Explore my projects and get to know more about me.
      </p>
    </section>
  )
}
