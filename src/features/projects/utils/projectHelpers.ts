// Language color mapping based on GitHub's linguist colors
export const LANGUAGE_COLORS: Record<string, string> = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Java: '#b07219',
  Python: '#3572A5',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Vue: '#41b883',
  Ruby: '#701516',
  PHP: '#4F5D95',
  C: '#555555',
  'C++': '#f34b7d',
  'C#': '#178600',
  Markdown: '#083fa1',
  'Jupyter Notebook': '#DA5B0B',
}

const DEFAULT_COLOR = '#8b949e'

export const getLanguageColor = (language: string | null): string => {
  if (!language) return DEFAULT_COLOR
  return LANGUAGE_COLORS[language] || DEFAULT_COLOR
}

// Icon mapping based on devicon URLs
export const LANGUAGE_ICONS: Record<string, string> = {
  JavaScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
  TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
  Java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
  Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
  HTML: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
  CSS: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
  Vue: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg',
  Ruby: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ruby/ruby-original.svg',
  PHP: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
  C: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg',
  'C++': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
  'C#': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
  Go: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg',
  Rust: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg',
  Swift: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swift/swift-original.svg',
  Kotlin: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg',
  Markdown: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/markdown/markdown-original.svg',
  'Jupyter Notebook': 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg',
}

export const getLanguageIcon = (language: string | null): string | null => {
  if (!language) return null
  return LANGUAGE_ICONS[language] || null
}

const GITHUB_USERNAME = 'PxS00'

// Returns a user-friendly language name
// Only the profile README repo (same name as username) defaults to Markdown
export const getDisplayLanguage = (language: string | null, repoName?: string): string => {
  if (language) return language
  if (repoName === GITHUB_USERNAME) return 'Markdown'
  return 'N/A'
}

// Resolves relative image paths in README to absolute GitHub raw URLs
export const resolveReadmeImageUrl = (
  src: string,
  repoName: string,
  branch: string,
): string => {
  if (!src || src.startsWith('http') || src.startsWith('data:')) return src
  return `https://raw.githubusercontent.com/PxS00/${repoName}/${branch}/${src.replace(/^\/+/, '')}`
}

export const formatRepoDate = (dateString: string): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)
}
