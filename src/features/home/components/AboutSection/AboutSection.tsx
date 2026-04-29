import { Server, Database, Layers, Network, Award } from 'lucide-react'
import { motion } from 'framer-motion'

export default function AboutSection() {
  const cards = [
    {
      title: 'Backend & APIs',
      description: 'Desenvolvimento de APIs REST com Java e Spring Boot, focando na implementação de regras de negócio.',
      icon: <Server className="h-6 w-6 text-(--primary-color)" />,
    },
    {
      title: 'Dados & Persistência',
      description: 'Modelagem de banco de dados e persistência avançada utilizando PostgreSQL, MySQL, Oracle e JPA/Hibernate.',
      icon: <Database className="h-6 w-6 text-(--primary-color)" />,
    },
    {
      title: 'Arquitetura & Boas Práticas',
      description: 'Aplicação de SOLID, Clean Code e Arquitetura em camadas (MVC) para garantir sistemas sustentáveis.',
      icon: <Layers className="h-6 w-6 text-(--primary-color)" />,
    },
    {
      title: 'Integração & Sistemas',
      description: 'Integração de sistemas, comunicação entre serviços e processamento eficiente de dados em larga escala.',
      icon: <Network className="h-6 w-6 text-(--primary-color)" />,
    },
  ]

  return (
    <section id="about" className="relative z-30 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-3xl font-extrabold text-(--title-color) sm:text-4xl">
          Sobre Mim
        </h2>
        <p className="mx-auto max-w-3xl text-lg text-(--muted-color) leading-relaxed">
          Desenvolvedor Back-end com foco em Java e Spring Boot, atuando na construção de APIs REST, integração de sistemas e implementação de regras de negócio. Busca evolução contínua na criação de sistemas escaláveis e bem estruturados.
        </p>
      </div>

      {/* Specialization Cards */}
      <div className="mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="flex flex-col rounded-2xl border border-(--border-color) bg-(--bg-color-alt) p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md hover:border-(--primary-color)/30"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-(--primary-color)/10">
              {card.icon}
            </div>
            <h3 className="mb-3 text-xl font-bold text-(--title-color)">{card.title}</h3>
            <p className="text-(--muted-color) leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Academic Highlight */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-3xl border border-(--primary-color)/20 bg-gradient-to-br from-(--bg-color-alt) to-(--bg-color) p-8 sm:p-12"
      >
        <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-(--primary-color)/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 h-64 w-64 rounded-full bg-(--secondary-color)/5 blur-3xl"></div>
        
        <div className="relative z-10 flex flex-col items-start gap-8 md:flex-row md:items-center">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-(--primary-color)/10 text-(--primary-color)">
            <Award className="h-10 w-10" />
          </div>
          <div>
            <h3 className="mb-3 text-2xl font-bold text-(--title-color)">Destaque Acadêmico</h3>
            <p className="text-lg leading-relaxed text-(--muted-color)">
              Durante minha formação na FIAP, fui selecionado entre os 10 melhores grupos do curso para apresentar um projeto na feira <strong>FIAP NEXT</strong>. Participei do desenvolvimento de uma solução tecnológica voltada ao Hospital das Clínicas (HC), atuando em equipe multidisciplinar e contribuindo na criação de uma solução para um problema real, conectando tecnologia e impacto social.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
