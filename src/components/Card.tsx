import type { ReactElement, ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
}

export default function Card({ children, className = '' }: CardProps): ReactElement {
  return (
    <div className={`border-t-[3px] border-gold bg-white p-8 shadow-[0_14px_30px_-18px_rgba(28,32,48,.4)] ${className}`}>
      {children}
    </div>
  )
}