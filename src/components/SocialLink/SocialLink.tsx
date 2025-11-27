import type { SocialLinkType } from '../../types/social'

export default function SocialLink({ href, ariaLabel, icon, className = '' }: SocialLinkType) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className={`${className} rounded-full text-(--nav-text) transition-colors hover:bg-(--nav-hover-bg) hover:text-(--nav-text-hover)`}
    >
      {icon}
    </a>
  )
}
