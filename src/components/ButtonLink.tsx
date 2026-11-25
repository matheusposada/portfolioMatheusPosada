import type { ReactElement, ReactNode } from 'react'

type ButtonVariant = 'outline' | 'solid'

interface ButtonLinkProps {
  href: string
  variant: ButtonVariant
  isDownload?: boolean
  children: ReactNode
}

const BASE_CLASSES = 'inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[.12em] uppercase transition'

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  outline: 'border border-white hover:-translate-y-0.5 hover:border-gold hover:text-gold',
  solid: 'border border-gold bg-gold font-bold text-night hover:bg-transparent hover:text-gold',
}

export default function ButtonLink({ href, variant, isDownload = false, children }: ButtonLinkProps): ReactElement {
  return (
    <a href={href} download={isDownload || undefined} className={`${BASE_CLASSES} ${VARIANT_CLASSES[variant]}`}>
      {children}
    </a>
  )
}