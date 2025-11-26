import { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

export default function ShadowEffect() {
  const themeCtx = useContext(ThemeContext)
  const resolvedTheme = themeCtx?.resolvedTheme || 'dark'
  // Use a darker shadow in light mode
  const background =
    resolvedTheme === 'light'
      ? 'linear-gradient(90deg, rgba(var(--accent-rgb), 0.38), rgba(var(--accent-rgb), 0.22))'
      : 'linear-gradient(90deg, rgba(var(--accent-rgb), 0.20), rgba(var(--accent-rgb), 0.12))'
  return (
    <div
      aria-hidden="true"
      className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
    >
      <div
        className="aspect-1108/632 w-[69.25rem]"
        style={{
          background,
          clipPath:
            'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          opacity: 0.9,
        }}
      />
    </div>
  )
}
