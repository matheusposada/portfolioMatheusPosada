import { useCallback, useState, type ReactElement } from 'react'
import Menu from './components/Menu'
import Navbar from './components/Navbar'
import { navItems } from './data/portfolio'
import { useScrollY } from './hooks/useScrollY'

const NAVBAR_SOLID_OFFSET_PX = 120

export default function App(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
  const scrollY = useScrollY()

  const closeMenu = useCallback((): void => setIsMenuOpen(false), [])
  const toggleMenu = useCallback((): void => setIsMenuOpen((isOpen) => !isOpen), [])

  const isNavbarSolid = scrollY > window.innerHeight - NAVBAR_SOLID_OFFSET_PX

  return (
    <>
      <Menu isOpen={isMenuOpen} onClose={closeMenu} />
      <Navbar isMenuOpen={isMenuOpen} isSolid={isNavbarSolid} onMenuToggle={toggleMenu} />
      <main>
        {navItems.map(({ id, label }) => (
          <section key={id} id={id} className="grid h-screen place-items-center text-white odd:bg-dusk">
            {label}
          </section>
        ))}
      </main>
    </>
  )
}