import { useEffect, useState } from 'react'
import { FiMoon, FiSun } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'
import { SOCIAL_LINKS } from '../../constants/socialLinks'
import SocialLink from '../SocialLink/SocialLink'

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  // Theme toggle logic
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark'
    }
    return 'dark'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-center bg-black/20 px-8 py-4 text-white/70 backdrop-blur-md">
      <div className="flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-extrabold">P</div>
          {isHome && (
            <div className="flex gap-2">
              <a
                href="/about"
                className="rounded-full px-4 py-2 opacity-70 transition-all hover:bg-white/10 hover:text-white hover:opacity-100"
              >
                About
              </a>
              <a
                href="/projects"
                className="rounded-full px-4 py-2 opacity-70 transition-all hover:bg-white/10 hover:text-white hover:opacity-100"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="rounded-full px-4 py-2 opacity-70 transition-all hover:bg-white/10 hover:text-white hover:opacity-100"
              >
                Contact
              </a>
              <a
                href="#stacks"
                className="rounded-full px-4 py-2 opacity-70 transition-all hover:bg-white/10 hover:text-white hover:opacity-100"
              >
                Stacks
              </a>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink key={link.ariaLabel} {...link} />
          ))}
          <button
            onClick={toggleTheme}
            className="opacity-70 transition-opacity hover:opacity-100"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
