import type { ReactElement } from 'react'
import type { SkillGroup } from '../data/portfolio'
import Pill from './Pill'

interface SkillGroupListProps {
  groups: SkillGroup[]
}

export default function SkillGroupList({ groups }: SkillGroupListProps): ReactElement {
  return (
    <div className="space-y-3.5">
      {groups.map(({ title, items, isHighlighted }) => (
        <div key={title}>
          <h3 className="mb-2 text-xs font-semibold tracking-[.16em] uppercase">{title}</h3>
          <ul className="flex flex-wrap gap-2">
            {items.map((item) => (
              <li key={item}>
                <Pill isHighlighted={isHighlighted}>{item}</Pill>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}