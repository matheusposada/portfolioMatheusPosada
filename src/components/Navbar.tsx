import type { ReactElement } from 'react'
import { MENU_ELEMENT_ID } from '../constants/elementIds'
import HamburgerButton from './HamburgerButton'

interface NavbarProps {
  isMenuOpen: boolean
  isSolid: boolean
  onMenuToggle: () => void
}

export default function Navbar({ isMenuOpen, isSolid, onMenuToggle }: NavbarProps): ReactElement {
  const backgroundClasses = isSolid && !isMenuOpen ? 'bg-night/90 backdrop-blur' : ''

  return (
    <div className={`fixed inset-x-0 top-0 z-[1100] flex items-center justify-between px-7 py-3.5 transition-colors ${backgroundClasses}`}>
      <span className="text-[17px] text-white">
        matheus<strong className="text-gold">posada</strong>
      </span>
      <HamburgerButton isOpen={isMenuOpen} controlsId={MENU_ELEMENT_ID} onClick={onMenuToggle} />
    </div>
  )
}