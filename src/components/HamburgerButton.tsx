import type { ReactElement } from 'react'

interface HamburgerButtonProps {
  isOpen: boolean
  controlsId: string
  onClick: () => void
}

const BAR_CLASSES =
  'absolute left-0 h-[3px] w-[30px] bg-white transition duration-[450ms] ease-[cubic-bezier(.77,0,.18,1)] group-hover:bg-gold'

export default function HamburgerButton({ isOpen, controlsId, onClick }: HamburgerButtonProps): ReactElement {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={isOpen}
      aria-controls={controlsId}
      className="group relative h-[22px] w-[30px] cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-gold"
    >
      <span className={`${BAR_CLASSES} top-1/2 -translate-y-1/2 ${isOpen ? 'bg-transparent!' : ''}`} />
      <span className={`${BAR_CLASSES} ${isOpen ? 'top-[10px] -rotate-[225deg]' : 'top-0'}`} />
      <span className={`${BAR_CLASSES} ${isOpen ? 'top-[10px] rotate-[225deg]' : 'top-[19px]'}`} />
    </button>
  )
}