import type { ReactElement, ReactNode } from 'react'

interface SectionContainerProps {
  children: ReactNode
  className?: string
}

export default function SectionContainer({ children, className = '' }: SectionContainerProps): ReactElement {
  return <div className={`mx-auto max-w-[1050px] px-5 md:px-8 ${className}`}>{children}</div>
}