import { useMemo, type CSSProperties, type ReactElement } from 'react'
import { buildForestPath, type ForestConfig } from '../utils/forestPath'

interface ForestProps {
  config: ForestConfig
  fillClassName: string
  className?: string
  translateY?: number
}

export default function Forest({ config, fillClassName, className = '', translateY = 0 }: ForestProps): ReactElement {
  const path = useMemo(() => buildForestPath(config), [config])
  const style: CSSProperties = { transform: `translateY(${translateY}px)` }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 bottom-[-4vh] will-change-transform ${className}`}
      style={style}
    >
      <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block h-full w-full">
        <path d={path} className={fillClassName} />
      </svg>
    </div>
  )
}