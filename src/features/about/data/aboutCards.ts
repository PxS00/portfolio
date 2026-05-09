import type { LucideIcon } from 'lucide-react'
import { Cloud, Database, Layers, Server, Layout, Shield, BookOpen, Bot } from 'lucide-react'

export interface AboutCardData {
  title: string
  description: string
  icon: LucideIcon
}

export const aboutCards: AboutCardData[] = [
  {
    title: 'Backend & APIs',
    description:
      'Construção de APIs utilizando Java e Spring Boot, com foco na organização de serviços, implementação de regras de negócio e arquitetura em camadas.',
    icon: Server,
  },
  {
    title: 'Dados & Persistência',
    description:
      'Desenvolvimento de soluções de persistência com SQL, aplicando boas práticas de modelagem, integridade e performance de dados.',
    icon: Database,
  },
  {
    title: 'Arquitetura & Boas\u00A0Práticas',
    description:
      'Aplicação de SOLID, Clean Code e padrões arquiteturais na construção de sistemas sustentáveis, escaláveis e de fácil manutenção.',
    icon: Layers,
  },
  {
    title: 'Cloud & Infraestrutura',
    description:
      'Utilização de ambientes em nuvem e conteinerização com Docker, com foco em deploy, escalabilidade e eficiência operacional.',
    icon: Cloud,
  },
  {
    title: 'Frontend & UI',
    description:
      'Desenvolvimento de interfaces modernas e responsivas com React, Angular, HTML, CSS e JavaScript, integrando APIs REST e aplicações backend.',
    icon: Layout,
  },
  {
    title: 'Segurança & Autenticação',
    description:
      'Implementação de práticas de segurança, autenticação e controle de acesso para APIs e aplicações modernas.',
    icon: Shield,
  },
  {
    title: 'Docs & Integração',
    description:
      'Documentação e organização de APIs com foco em manutenção, padronização e comunicação eficiente entre serviços.',
    icon: BookOpen,
  },
  {
    title: 'IA & Automação',
    description:
      'Desenvolvimento de soluções inteligentes com foco em automação, integração de APIs e experiências orientadas por IA.',
    icon: Bot,
  },
]
