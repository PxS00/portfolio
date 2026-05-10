import { useContext } from 'react'
import { ThemeContext } from '../../../app/providers/ThemeContext'

export default function GridPattern() {
  const themeCtx = useContext(ThemeContext)
  const resolvedTheme = themeCtx?.resolvedTheme || 'dark'
  const strokeColor = resolvedTheme === 'light' ? 'var(--nav-text)' : '#fff'
  const opacity = resolvedTheme === 'light' ? 0.12 : 0.05
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 -z-10 h-full w-full mask-[radial-gradient(100%_100%_at_center,white,transparent)]"
      style={{
        pointerEvents: 'none',
        background: resolvedTheme === 'light' ? '#F3F4F6' : 'transparent',
      }}
    >
      <defs>
        <pattern id="grid" width="100" height="100" patternUnits="userSpaceOnUse">
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
            opacity={opacity}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  )
}
