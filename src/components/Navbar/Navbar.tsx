import { FiMoon, FiSun } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'
import { SOCIAL_LINKS } from '../../constants/socialLinks'
import { useTheme } from '../../context/ThemeContext'
import SocialLink from '../SocialLink/SocialLink'

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { resolvedTheme, toggleTheme } = useTheme()

  return (
    <nav className="site-nav fixed top-0 left-0 z-50 flex w-full items-center bg-(--nav-bg) px-8 py-4 text-(--nav-text) backdrop-blur-md dark:bg-(--nav-bg) dark:text-white/70">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center gap-2">
          {isHome && (
            <div className="flex gap-2">
              <a
                href="/about"
                className={`nav-text rounded-full px-4 py-2 text-(--nav-text) opacity-90 transition-all hover:bg-(--nav-hover-bg) hover:text-(--nav-text-hover) hover:opacity-100 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white ${location.pathname === '/about' ? 'active' : ''}`}
              >
                About
              </a>
              <a
                href="/projects"
                className={`nav-text rounded-full px-4 py-2 text-(--nav-text) opacity-90 transition-all hover:bg-(--nav-hover-bg) hover:text-(--nav-text-hover) hover:opacity-100 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white ${location.pathname === '/projects' ? 'active' : ''}`}
              >
                Projects
              </a>
              <a
                href="#contact"
                className={`nav-text rounded-full px-4 py-2 text-(--nav-text) opacity-90 transition-all hover:bg-(--nav-hover-bg) hover:text-(--nav-text-hover) hover:opacity-100 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white ${location.hash === '#contact' ? 'active' : ''}`}
              >
                Contact
              </a>
              <a
                href="#stacks"
                className={`nav-text rounded-full px-4 py-2 text-(--nav-text) opacity-90 transition-all hover:bg-(--nav-hover-bg) hover:text-(--nav-text-hover) hover:opacity-100 dark:text-white/70 dark:hover:bg-white/10 dark:hover:text-white ${location.hash === '#stacks' ? 'active' : ''}`}
              >
                Stacks
              </a>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink key={link.ariaLabel} {...link} className="nav-text" />
          ))}
          <button
            onClick={toggleTheme}
            className="nav-text rounded-full p-2 text-(--nav-text) transition-colors hover:bg-(--nav-hover-bg) hover:text-(--nav-text-hover)"
            aria-label="Toggle theme"
          >
            {resolvedTheme === 'dark' ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>
        </div>
      </div>
    </nav>
  )
}
