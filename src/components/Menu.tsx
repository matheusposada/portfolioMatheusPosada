import type { MouseEvent, ReactElement } from 'react'
import { MENU_ELEMENT_ID } from '../constants/elementIds'
import { navItems } from '../data/portfolio'
import { useBodyScrollLock } from '../hooks/useBodyScrollLock'
import { useEscapeKey } from '../hooks/useEscapeKey'
import { scrollToSection } from '../utils/scrollToSection'
import SocialLinks from './SocialLinks'

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

const OPEN_CLIP_PATH = '[clip-path:circle(150%_at_calc(100%_-_40px)_30px)]'
const CLOSED_CLIP_PATH = '[clip-path:circle(0_at_calc(100%_-_40px)_30px)]'

export default function Menu({ isOpen, onClose }: MenuProps): ReactElement {
  useBodyScrollLock(isOpen)
  useEscapeKey(onClose, isOpen)

  const handleNavigate = (event: MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
    event.preventDefault()
    onClose()
    // Espera o menu soltar o travamento do scroll antes de rolar até a seção
    requestAnimationFrame(() => scrollToSection(sectionId))
  }

  return (
    <nav
      id={MENU_ELEMENT_ID}
      aria-label="Seções do site"
      inert={!isOpen}
      className={`fixed inset-0 z-[1000] flex flex-col justify-center bg-[radial-gradient(circle_at_80%_10%,#2d2160,#0b0f1f_70%)] px-[12vw] transition-[clip-path] duration-700 ease-[cubic-bezier(.77,0,.18,1)] ${isOpen ? OPEN_CLIP_PATH : CLOSED_CLIP_PATH}`}
    >
      <ul>
        {navItems.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(event) => handleNavigate(event, id)}
              className="font-display text-[clamp(38px,8vw,72px)] leading-tight text-white italic hover:text-gold"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <SocialLinks className="mt-7 text-2xl text-white" />
    </nav>
  )
}