import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scrolls to top on route change to avoid landing mid-page
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
