import type { LucideIcon } from 'lucide-react'
import { Cloud, Database, Layers, Server, Layout } from 'lucide-react'

export interface AboutCardData {
  title: string
  description: string
  icon: LucideIcon
}

export const aboutCards: AboutCardData[] = [
  {
    title: 'Backend & APIs',
    description:
      'Construção de APIs utilizando Java e Spring Boot, com foco na organização de serviços, implementação de regras de negócio e definição de arquitetura em camadas.',
    icon: Server,
  },
  {
    title: 'Dados & Persistência',
    description:
      'Modelagem e persistência de dados com JPA/Hibernate, garantindo integridade, performance e consistência das informações.',
    icon: Database,
  },
  {
    title: 'Arquitetura & Boas\u00A0Práticas',
    description:
      'Aplicação de SOLID, Clean Code e padrões arquiteturais para construção de sistemas sustentáveis e de fácil manutenção.',
    icon: Layers,
  },
  {
    title: 'Cloud & Infraestrutura',
    description:
      'Utilização de ambientes em nuvem e conteinerização com Docker, com foco em deploy e escalabilidade.',
    icon: Cloud,
  },
  {
    title: 'Frontend & UI',
    description:
      'Experiência com desenvolvimento frontend utilizando HTML puro (WordPress) e frameworks modernos como React e Angular. Compreensão profunda do processo de integração (merge) entre o backend e frontend.',
    icon: Layout,
  },
]
