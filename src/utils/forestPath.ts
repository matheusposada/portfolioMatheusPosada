import { createSeededRandom } from './seededRandom'

export interface ForestConfig {
  minTreeHeight: number
  maxTreeHeight: number
  treeSpacing: number
  seed: number
}

const VIEWBOX_WIDTH = 1200
const VIEWBOX_HEIGHT = 100
const RIGHT_OVERFLOW = 40
const MIN_HALF_WIDTH = 14
const HALF_WIDTH_VARIATION = 14
const MIN_SPACING_FACTOR = 0.7
const SPACING_FACTOR_VARIATION = 0.6

function buildTreeSegment(centerX: number, height: number, halfWidth: number): string {
  const top = VIEWBOX_HEIGHT - height
  return ` L${centerX - halfWidth},${VIEWBOX_HEIGHT} L${centerX},${top} L${centerX + halfWidth},${VIEWBOX_HEIGHT}`
}

export function buildForestPath(config: ForestConfig): string {
  const random = createSeededRandom(config.seed)
  const heightVariation = config.maxTreeHeight - config.minTreeHeight
  const limitX = VIEWBOX_WIDTH + RIGHT_OVERFLOW

  let path = `M0,${VIEWBOX_HEIGHT}`
  let centerX = 0

  while (centerX <= limitX) {
    const height = config.minTreeHeight + random() * heightVariation
    const halfWidth = MIN_HALF_WIDTH + random() * HALF_WIDTH_VARIATION
    path += buildTreeSegment(centerX, height, halfWidth)
    centerX += config.treeSpacing * (MIN_SPACING_FACTOR + random() * SPACING_FACTOR_VARIATION)
  }

  return `${path} L${limitX},${VIEWBOX_HEIGHT} Z`
}