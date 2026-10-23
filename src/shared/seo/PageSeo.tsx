import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage } from '../../app/providers/LanguageContext'
import { getPageMetadata } from './metadata'

const PageSeo = () => {
  const { pathname } = useLocation()
  const { language } = useLanguage()

  useEffect(() => {
    const meta = getPageMetadata(pathname, language)
    document.title = meta.title
    const setMeta = (attribute: 'name' | 'property', key: string, value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.append(element)
      }
      element.content = value
    }
    setMeta('name', 'description', meta.description)
    setMeta('name', 'robots', meta.index ? 'index, follow' : 'noindex, follow')
    for (const [key, value] of Object.entries({
      'og:title': meta.title,
      'og:description': meta.description,
      'og:url': meta.canonical,
      'og:locale': language.replace('-', '_'),
      'og:image': meta.image,
      'og:image:alt': meta.imageAlt,
    })) {
      setMeta('property', key, value)
    }
    for (const [key, value] of Object.entries({
      'twitter:title': meta.title,
      'twitter:description': meta.description,
      'twitter:image': meta.image,
      'twitter:image:alt': meta.imageAlt,
    })) {
      setMeta('name', key, value)
    }
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = meta.canonical
  }, [pathname, language])

  return null
}

export default PageSeo
