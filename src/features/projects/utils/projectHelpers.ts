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
}

const DEFAULT_COLOR = '#8b949e'

export const getLanguageColor = (language: string | null): string => {
  if (!language) return DEFAULT_COLOR
  return LANGUAGE_COLORS[language] || DEFAULT_COLOR
}

export const formatRepoDate = (dateString: string): string => {
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(date)
}
