import type { ReactElement } from 'react'

interface SectionTitleProps {
  label: string
  title: string
  isOnDark?: boolean
}

export default function SectionTitle({ label, title, isOnDark = false }: SectionTitleProps): ReactElement {
  const labelColor = isOnDark ? 'text-gold' : 'text-gold-ink'

  return (
    <header className="text-center">
      <p className={`text-xs font-semibold tracking-[0.22em] uppercase ${labelColor}`}>{label}</p>
      <h2 className="font-display text-4xl leading-tight italic">{title}</h2>
      <span className="mx-auto mt-3.5 mb-10 block h-0.5 w-36 bg-gold" />
    </header>
  )
}