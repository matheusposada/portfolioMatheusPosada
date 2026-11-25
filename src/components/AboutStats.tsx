import type { ReactElement } from 'react'
import type { Stat } from '../data/portfolio'

interface AboutStatsProps {
  stats: Stat[]
}

export default function AboutStats({ stats }: AboutStatsProps): ReactElement {
  return (
    <ul className="flex flex-wrap justify-center gap-12 text-center">
      {stats.map(({ label, value, suffix }) => (
        <li key={label}>
          <span className="block text-[40px] leading-none font-bold tracking-tight">
            {value}
            {suffix && <span className="text-gold-ink">{suffix}</span>}
          </span>
          <span className="text-[11px] tracking-[.12em] text-muted uppercase">{label}</span>
        </li>
      ))}
    </ul>
  )
}