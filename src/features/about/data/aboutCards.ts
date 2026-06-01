import type { LucideIcon } from 'lucide-react'
import { Cloud, Database, Layers, Server, Layout, Shield, BookOpen, Bot } from 'lucide-react'
import type { TranslationKeys } from '../../../shared/constants/translations'

export type AboutCardData = {
  titleKey: TranslationKeys
  descriptionKey: TranslationKeys
  icon: LucideIcon
}

export const aboutCards: AboutCardData[] = [
  {
    titleKey: 'card_backend_title',
    descriptionKey: 'card_backend_desc',
    icon: Server,
  },
  {
    titleKey: 'card_data_title',
    descriptionKey: 'card_data_desc',
    icon: Database,
  },
  {
    titleKey: 'card_arch_title',
    descriptionKey: 'card_arch_desc',
    icon: Layers,
  },
  {
    titleKey: 'card_cloud_title',
    descriptionKey: 'card_cloud_desc',
    icon: Cloud,
  },
  {
    titleKey: 'card_front_title',
    descriptionKey: 'card_front_desc',
    icon: Layout,
  },
  {
    titleKey: 'card_security_title',
    descriptionKey: 'card_security_desc',
    icon: Shield,
  },
  {
    titleKey: 'card_docs_title',
    descriptionKey: 'card_docs_desc',
    icon: BookOpen,
  },
  {
    titleKey: 'card_ai_title',
    descriptionKey: 'card_ai_desc',
    icon: Bot,
  },
]
