const MAX_PARALLAX_SCROLL_PX = 1200

export function getParallaxOffset(scrollY: number, speedDivisor: number): number {
  return Math.min(scrollY, MAX_PARALLAX_SCROLL_PX) / speedDivisor
}