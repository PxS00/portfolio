import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { TRANSLATIONS, type TranslationKeys } from '../../shared/constants/translations'

export type Language = 'pt-BR' | 'en-GB'

export type LanguageContextProps = {
  language: Language
  toggleLanguage: () => void
  t: (key: TranslationKeys, interpolations?: Record<string, string | number>) => string
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

const getInitialLanguage = (): Language => {
  const saved = localStorage.getItem('portfolio-language') as Language | null
  if (saved && (saved === 'pt-BR' || saved === 'en-GB')) {
    return saved
  }
  return navigator.language.startsWith('pt') ? 'pt-BR' : 'en-GB'
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt-BR' ? 'en-GB' : 'pt-BR'))
  }

  const t = (key: TranslationKeys, interpolations?: Record<string, string | number>): string => {
    let text = TRANSLATIONS[language][key] || key
    if (interpolations) {
      Object.entries(interpolations).forEach(([k, v]) => {
        text = text.replace(`{${k}}`, String(v))
      })
    }
    return text
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
