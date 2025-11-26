import { FaGithub } from 'react-icons/fa'
import { SiLinkedin } from 'react-icons/si'
import type { SocialLinkType } from '../types/social'

export const SOCIAL_LINKS: SocialLinkType[] = [
  {
    href: 'https://github.com/PxS00',
    ariaLabel: 'GitHub',
    icon: <FaGithub size={24} />,
  },
  {
    href: 'https://www.linkedin.com/in/lucas-rossoni-dieder/',
    ariaLabel: 'LinkedIn',
    icon: <SiLinkedin size={24} />,
  },
]
