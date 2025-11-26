import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useLocation } from "react-router-dom";
import { SOCIAL_LINKS } from '../../constants/socialLinks';
import SocialLink from '../SocialLink/SocialLink';

export default function Navbar() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  // Theme toggle logic
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 flex items-center justify-center px-8 py-4 backdrop-blur-md bg-black/20 text-white/70">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="font-extrabold text-2xl">P</div>
          {isHome && (
            <div className="flex gap-8">
              <a href="/about" className="transition-opacity hover:opacity-100 opacity-70">About</a>
              <a href="/projects" className="transition-opacity hover:opacity-100 opacity-70">Projects</a>
              <a href="#contact" className="transition-opacity hover:opacity-100 opacity-70">Contact</a>
              <a href="#stacks" className="transition-opacity hover:opacity-100 opacity-70">Stacks</a>
            </div>
          )}
        </div>
        <div className="flex gap-4 items-center">
          {SOCIAL_LINKS.map(link => (
            <SocialLink
              key={link.ariaLabel}
              {...link}
            />
          ))}
          <button
            onClick={toggleTheme}
            className="opacity-70 hover:opacity-100 transition-opacity"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={22} /> : <FiMoon size={22} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
