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
      'Desenvolvimento de APIs REST estruturadas, com foco na organização de serviços, validação de dados e implementação consistente de regras de negócio.',
    icon: Server,
  },
  {
    title: 'Dados & Persistência',
    description:
      'Experiência na modelagem de dados e construção de camadas de persistência eficientes, garantindo integridade, performance e organização das informações.',
    icon: Database,
  },
  {
    title: 'Arquitetura & Boas Práticas',
    description:
      'Aplicação de princípios como SOLID e Clean Code para criação de sistemas organizados, de fácil manutenção e preparados para evolução contínua.',
    icon: Layers,
  },
  {
    title: 'Integração & Sistemas',
    description:
      'Atuação na integração entre sistemas e serviços, buscando comunicação eficiente, confiabilidade e consistência no fluxo de dados.',
    icon: Network,
  },
]
