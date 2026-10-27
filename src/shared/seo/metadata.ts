import type { Language } from '../types/language'
import { FEATURED_REPO_SNAPSHOTS } from '../../features/projects/data/featuredRepos'
import { getProjectStory } from '../../features/projects/data/projectStories'

export const SITE_URL = 'https://lucas-rossoni.vercel.app'
export const SHARE_IMAGE = `${SITE_URL}/images/social-cover.png`
export const INDEXED_PATHS = [
  '/',
  '/projects',
  '/contact',
  ...FEATURED_REPO_SNAPSHOTS.map((repo) => `/projects/${repo.name}`),
]

export type PageMetadata = {
  title: string
  description: string
  canonical: string
  image: string
  imageAlt: string
  language: Language
  index: boolean
}

export function getPageMetadata(pathname: string, language: Language = 'en-GB'): PageMetadata {
  const path = pathname.replace(/\/+$/, '') || '/'
  const pt = language === 'pt-BR'
  let title = pt ? 'Página não encontrada | Lucas Rossoni' : 'Page not found | Lucas Rossoni'
  let description = pt
    ? 'Explore os projetos e entre em contato com Lucas Rossoni.'
    : 'Explore projects and get in touch with Lucas Rossoni.'
  let canonicalPath = path
  let index = false

  if (path === '/') {
    title = 'Lucas Rossoni | Backend Developer · Java, Spring Boot e OCI'
    if (!pt) {
      title = 'Lucas Rossoni | Backend Developer · Java, Spring Boot & OCI'
    }
    description = pt
      ? 'Desenvolvedor backend com Java e Spring Boot. Conheça minha experiência freelance, APIs, sistemas de negócio e projetos na Oracle Cloud.'
      : 'Backend developer working with Java and Spring Boot. Explore my freelance experience, APIs, business systems and Oracle Cloud projects.'
    index = true
  } else if (path === '/projects') {
    title = pt ? 'Projetos de software | Lucas Rossoni' : 'Software projects | Lucas Rossoni'
    description = pt
      ? 'Conheça Lavanda Flow, EnergiAI e o assistente com RAG: projetos, contribuições e decisões de engenharia de Lucas Rossoni.'
      : 'Explore Lavanda Flow, EnergiAI and the RAG assistant: projects, contributions and engineering decisions by Lucas Rossoni.'
    index = true
  } else if (path === '/contact') {
    title = pt ? 'Contato | Lucas Rossoni' : 'Contact | Lucas Rossoni'
    description = pt
      ? 'Entre em contato com Lucas Rossoni para conversar sobre desenvolvimento backend, oportunidades e projetos de software.'
      : 'Contact Lucas Rossoni to discuss backend development, opportunities and software projects.'
    index = true
  } else if (path.startsWith('/projects/')) {
    const name = path.slice('/projects/'.length)
    const repo = FEATURED_REPO_SNAPSHOTS.find(
      (entry) => entry.name.toLowerCase() === name.toLowerCase(),
    )
    const story = getProjectStory(name)
    const displayName = story?.name ?? repo?.name ?? name
    title = `${displayName} | Lucas Rossoni`
    description = story?.copy[language].summary ?? repo?.description ?? description
    if (repo) {
      canonicalPath = `/projects/${repo.name}`
      index = true
    }
  }

  return {
    title,
    description,
    canonical: `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`,
    image: SHARE_IMAGE,
    imageAlt: 'Lucas Rossoni · Backend Software Engineer · Java, Spring Boot, Oracle Cloud',
    language,
    index,
  }
}

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (char) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char] ?? char,
  )

export function renderMetadata(meta: PageMetadata) {
  const tags = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<meta name="robots" content="${meta.index ? 'index, follow' : 'noindex, follow'}" />`,
    `<link rel="canonical" href="${escapeHtml(meta.canonical)}" />`,
    ...Object.entries({
      'og:type': 'website',
      'og:site_name': 'Lucas Rossoni',
      'og:title': meta.title,
      'og:description': meta.description,
      'og:url': meta.canonical,
      'og:locale': meta.language.replace('-', '_'),
      'og:image': meta.image,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:alt': meta.imageAlt,
    }).map(
      ([property, content]) => `<meta property="${property}" content="${escapeHtml(content)}" />`,
    ),
    ...Object.entries({
      'twitter:card': 'summary_large_image',
      'twitter:title': meta.title,
      'twitter:description': meta.description,
      'twitter:image': meta.image,
      'twitter:image:alt': meta.imageAlt,
    }).map(([name, content]) => `<meta name="${name}" content="${escapeHtml(content)}" />`),
  ]
  return tags.join('\n    ')
}

export const sitemapXml = () =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${INDEXED_PATHS.map((path) => `  <url><loc>${SITE_URL}${path}</loc></url>`).join('\n')}\n</urlset>\n`
