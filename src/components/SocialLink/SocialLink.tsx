import type { SocialLinkType } from '../../types/social'

export default function SocialLink({ href, ariaLabel, icon, className = '' }: SocialLinkType) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`opacity-70 transition-opacity hover:opacity-100 ${className}`}
      aria-label={ariaLabel}
    >
      {icon}
    </a>
  )
}
