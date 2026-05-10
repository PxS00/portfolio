import TechCarousel from '../../../stacks/components/TechCarousel'
import { aboutCards } from '../../data/aboutCards'
import AboutCard from '../AboutCard/AboutCard'
import AcademicHighlight from '../AcademicHighlight/AcademicHighlight'

export default function AboutSection() {
  return (
    <section id="about" className="relative z-30 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-(--title-color) sm:text-4xl">Sobre Mim</h2>
        <p className="mx-auto max-w-3xl text-lg leading-relaxed text-(--muted-color)">
          Desenvolvedor Back-end com foco em Java e Spring Boot, atuando na construção de APIs e soluções escaláveis. Possui forte base em arquitetura de software, integração de sistemas e boas práticas de desenvolvimento, com foco em código limpo e sustentável.
        </p>
      </div>

      {/* Tech Carousel */}
      <div className="mb-20">
        <div className="mb-8 text-center">
          <h3 className="mb-2 text-2xl font-bold text-(--title-color)">Tecnologias</h3>
          <p className="text-sm text-(--muted-color)">
            Ferramentas e tecnologias que utilizo no dia a dia
          </p>
        </div>
        <TechCarousel />
      </div>

      {/* Specialization Cards */}
      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {aboutCards.map((card, index) => (
          <AboutCard
            key={card.title}
            title={card.title}
            description={card.description}
            icon={card.icon}
            delay={index * 0.1}
          />
        ))}
      </div>

      <AcademicHighlight />
    </section>
  )
}
