import type { ReactElement } from 'react'
import { socialLinks } from '../data/socialLinks'

interface SocialLinksProps {
  className?: string
  linkClassName?: string
}

export default function SocialLinks({ className = '', linkClassName = '' }: SocialLinksProps): ReactElement {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      {socialLinks.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`transition hover:-translate-y-1 hover:text-gold ${linkClassName}`}
        >
          <Icon />
        </a>
      ))}
    </div>
  )
}