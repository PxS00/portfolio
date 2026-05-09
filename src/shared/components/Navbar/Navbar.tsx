import { useEffect, useState } from 'react'
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi'
import { useLocation } from 'react-router-dom'
import { useTheme } from '../../../app/providers/ThemeContext'
import { SOCIAL_LINKS } from '../../constants/socialLinks'
import SocialLink from '../SocialLink/SocialLink'

export default function Navbar() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const { resolvedTheme, toggleTheme } = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => setMobileOpen(false), [location.pathname, location.hash])

  return (
    <nav className="site-nav fixed top-0 left-0 z-50 flex w-full items-center bg-(--nav-bg) px-8 py-4 text-(--nav-text) backdrop-blur-md dark:bg-(--nav-bg) dark:text-white/70">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        {/* DESKTOP */}
        <div className="flex items-center gap-2">
          {isHome && (
            <div className="hidden gap-2 md:flex">
              <a
                href="#about"
                className={`nav-text px-4 py-2 transition-all duration-300 hover:scale-[1.08] hover:bg-(--nav-hover-bg) hover:text-(--nav-text-hover) active:scale-95 ${location.hash === '#about' ? 'active' : ''}`}
              >
                Sobre
              </a>
              <a
                href="/projects"
                className={`nav-text px-4 py-2 transition-all duration-300 hover:scale-[1.08] hover:bg-(--nav-hover-bg) hover:text-(--nav-text-hover) active:scale-95 ${location.pathname === '/projects' ? 'active' : ''}`}
              >
                Projetos
              </a>
              <a
                href="#contact"
                className={`nav-text px-4 py-2 transition-all duration-300 hover:scale-[1.08] hover:bg-(--nav-hover-bg) hover:text-(--nav-text-hover) active:scale-95 ${location.hash === '#contact' ? 'active' : ''}`}
              >
                Contato
              </a>

            </div>
          )}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          {SOCIAL_LINKS.map((link) => (
            <SocialLink
              key={link.ariaLabel}
              {...link}
              className="nav-text duration-300 hover:scale-[1.08] active:scale-95"
            />
          ))}
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleTheme()
            }}
            aria-label="Toggle theme"
            className="nav-text pointer-events-auto relative z-50 rounded-full p-2 transition-all duration-300 hover:scale-[1.12] hover:bg-(--nav-hover-bg) active:scale-95"
          >
            <span className={`icon-spin ${resolvedTheme === 'dark' ? 'active' : ''}`}>
              {resolvedTheme === 'dark' ? <FiSun size={22} /> : <FiMoon size={22} />}
            </span>
          </button>
        </div>

        {/* MOBILE */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileOpen((s) => !s)}
            className="nav-text rounded-full p-2 duration-300 hover:scale-[1.12] hover:bg-(--nav-hover-bg) active:scale-95"
          >
            <span className={`icon-spin ${mobileOpen ? 'active' : ''}`}>
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </span>
          </button>

          <button
            onClick={toggleTheme}
            className="nav-text rounded-full p-2 duration-300 hover:scale-[1.12] hover:bg-(--nav-hover-bg) active:scale-95"
          >
            <span className={`icon-spin ${resolvedTheme === 'dark' ? 'active' : ''}`}>
              {resolvedTheme === 'dark' ? <FiSun size={22} /> : <FiMoon size={22} />}
            </span>
          </button>
        </div>
      </div>

      {/* DROPDOWN ANIMADO */}
      {isHome && mobileOpen && (
        <div
          id="mobile-menu"
          className="animate-fadeAndSlide absolute top-full right-8 z-40 w-35 rounded-xl border border-white/5 bg-(--nav-bg) px-3 py-2 shadow-lg md:hidden"
        >
          <div className="flex flex-col gap-1">
            <a
              href="#about"
              className={`nav-text px-3 py-2 duration-300 hover:bg-(--nav-hover-bg) hover:text-(--nav-text-hover) active:scale-95 ${location.hash === '#about' ? 'active' : ''}`}
            >
              Sobre
            </a>
            <a
              href="/projects"
              className={`nav-text px-3 py-2 duration-300 hover:bg-(--nav-hover-bg) hover:text-(--nav-text-hover) active:scale-95 ${location.pathname === '/projects' ? 'active' : ''}`}
            >
              Projetos
            </a>
            <a
              href="#contact"
              className={`nav-text px-3 py-2 duration-300 hover:bg-(--nav-hover-bg) hover:text-(--nav-text-hover) active:scale-95 ${location.hash === '#contact' ? 'active' : ''}`}
            >
              Contato
            </a>

          </div>
        </div>
      )}
    </nav>
  )
}
