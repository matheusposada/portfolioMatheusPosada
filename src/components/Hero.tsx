import type { ReactElement } from 'react'
import HeroBackground from './HeroBackground'
import HeroContent from './HeroContent'
import { SECTION_IDS } from '../constants/sectionIds'

interface HeroProps {
  scrollY: number
}

export default function Hero({ scrollY }: HeroProps): ReactElement {
  return (
    <header
      id={SECTION_IDS.home}
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-night to-dusk to-[88%] text-center"
    >
      <HeroBackground scrollY={scrollY} />
      <HeroContent />
    </header>
  )
}