import { useEffect } from 'react'

export function useEscapeKey(onEscape: () => void, isActive: boolean): void {
  useEffect(() => {
    if (!isActive) return

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') onEscape()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onEscape, isActive])
}