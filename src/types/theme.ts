export type Theme = 'light' | 'dark' | 'system'

export type ThemeContextProps = {
  theme: Theme
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
  resolvedTheme: 'light' | 'dark'
}
