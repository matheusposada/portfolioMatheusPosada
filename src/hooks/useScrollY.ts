import { useEffect, useState } from 'react'

export function useScrollY(): number {
  const [scrollY, setScrollY] = useState<number>(window.scrollY)

  useEffect(() => {
    const handleScroll = (): void => setScrollY(window.scrollY)

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollY
}