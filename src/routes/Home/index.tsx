import GridPattern from '../../components/GridPattern/GridPattern'
import ShadowEffect from '../../components/ShadowEffect/ShadowEffect'

export default function Home() {
  return (
    <section className="relative z-30 flex min-h-[75vh] flex-col items-center justify-center py-24 text-center">
      <GridPattern />
      <ShadowEffect />
      <h1 className="mb-6 text-6xl font-extrabold text-(--title-color) md:text-7xl">
        Lucas Rossoni
      </h1>
      <h1 className="mb-6 text-6xl font-extrabold text-(--title-color) md:text-7xl">
        Full-Stack Developer
      </h1>
      <p className="mb-10 text-xl font-semibold text-(--muted-color)">
        Explore my projects and get to know more about me.
      </p>
    </section>
  )
}
