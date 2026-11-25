import type { ReactElement, ReactNode } from 'react'

interface PillProps {
  children: ReactNode
  isHighlighted?: boolean
}

const BASE_CLASSES = 'inline-block rounded-full border px-3.5 py-1 text-[13px]'

export default function Pill({ children, isHighlighted = false }: PillProps): ReactElement {
  const toneClasses = isHighlighted ? 'border-gold bg-gold/20' : 'border-ink/20'

  return <span className={`${BASE_CLASSES} ${toneClasses}`}>{children}</span>
}