import type { LucideIcon } from 'lucide-react'
import { Database, Layers, Network, Server } from 'lucide-react'

export interface AboutCardData {
  title: string
  description: string
  icon: LucideIcon
}

export const aboutCards: AboutCardData[] = [
  {
    title: 'Backend & APIs',
    description:
      'Desenvolvimento de APIs REST com Java e Spring Boot, focando na implementação de regras de negócio.',
    icon: Server,
  },
  {
    title: 'Dados & Persistência',
    description:
      'Modelagem de banco de dados e persistência avançada utilizando PostgreSQL, MySQL, Oracle e JPA/Hibernate.',
    icon: Database,
  },
  {
    title: 'Arquitetura & Boas Práticas',
    description:
      'Aplicação de SOLID, Clean Code e Arquitetura em camadas (MVC) para garantir sistemas sustentáveis.',
    icon: Layers,
  },
  {
    title: 'Integração & Sistemas',
    description:
      'Integração de sistemas, comunicação entre serviços e processamento eficiente de dados em larga escala.',
    icon: Network,
  },
]
