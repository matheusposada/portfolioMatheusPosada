import type { ReactElement, ReactNode } from 'react'
import { useIsInView } from '../hooks/useIsInView'

interface RevealProps {
  children: ReactNode
  className?: string
}

const BASE_CLASSES = 'transition duration-700 motion-reduce:transition-none'
const HIDDEN_CLASSES = 'translate-y-6 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100'
const VISIBLE_CLASSES = 'translate-y-0 opacity-100'

export default function Reveal({ children, className = '' }: RevealProps): ReactElement {
  const { ref, isInView } = useIsInView<HTMLDivElement>()
  const stateClasses = isInView ? VISIBLE_CLASSES : HIDDEN_CLASSES

  return (
    <div ref={ref} className={`${BASE_CLASSES} ${stateClasses} ${className}`}>
      {children}
    </div>
  )
}