import type { ReactElement } from 'react'
import type { ForestConfig } from '../utils/forestPath'
import { getParallaxOffset } from '../utils/parallax'
import Forest from './Forest'

interface HeroBackgroundProps {
  scrollY: number
}

interface ForestLayer {
  id: string
  config: ForestConfig
  fillClassName: string
  heightClassName: string
  speedDivisor: number
}

const MOON_SPEED_DIVISOR = 4

const FOREST_LAYERS: ForestLayer[] = [
  {
    id: 'far',
    config: { minTreeHeight: 35, maxTreeHeight: 80, treeSpacing: 26, seed: 7 },
    fillClassName: 'fill-forest-far',
    heightClassName: 'h-[34vh]',
    speedDivisor: 14,
  },
  {
    id: 'near',
    config: { minTreeHeight: 20, maxTreeHeight: 60, treeSpacing: 34, seed: 42 },
    fillClassName: 'fill-night',
    heightClassName: 'h-[24vh]',
    speedDivisor: 7,
  },
]

export default function HeroBackground({ scrollY }: HeroBackgroundProps): ReactElement {
  const moonOffset = getParallaxOffset(scrollY, MOON_SPEED_DIVISOR)

  return (
    <>
      <div className="bg-stars animate-fade absolute inset-0" />
      <div
        className="bg-moon animate-moon absolute top-[12%] right-[8%] aspect-square w-[clamp(90px,14vw,170px)] rounded-full shadow-[0_0_80px_20px_rgba(240,192,96,.25)] md:right-[12%]"
        style={{ transform: `translateY(${moonOffset}px)` }}
      />
      {FOREST_LAYERS.map(({ id, config, fillClassName, heightClassName, speedDivisor }) => (
        <Forest
          key={id}
          config={config}
          fillClassName={fillClassName}
          className={heightClassName}
          translateY={-getParallaxOffset(scrollY, speedDivisor)}
        />
      ))}
    </>
  )
}