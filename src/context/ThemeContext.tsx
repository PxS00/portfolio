import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { Theme, ThemeContextProps } from '../types/theme'

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

function getSystemTheme(): 'light' | 'dark' {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function getInitialTheme(): Theme {
  const savedTheme = localStorage.getItem('theme') as Theme | null
  if (!savedTheme) {
    return 'system'
  }
  return savedTheme
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme)
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>(() => {
    const initial = getInitialTheme()
    return initial === 'system' ? getSystemTheme() : initial
  })

  useEffect(() => {
    try {
      const saved = localStorage.getItem('theme') as Theme | null
      if (saved === 'dark') {
        localStorage.removeItem('theme')
        setThemeState('system')
      }
    } catch {
      // ignore storage errors
    }
  }, [])

  useEffect(() => {
    const newResolvedTheme = theme === 'system' ? getSystemTheme() : theme
    setResolvedTheme(newResolvedTheme)

    if (newResolvedTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const handleChange = () => {
        const systemTheme = getSystemTheme()
        setResolvedTheme(systemTheme)
        document.documentElement.classList.toggle('dark', systemTheme === 'dark')
      }
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [theme])

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    if (newTheme === 'system') {
      localStorage.removeItem('theme')
    } else {
      localStorage.setItem('theme', newTheme)
    }
  }

  const toggleTheme = () => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
