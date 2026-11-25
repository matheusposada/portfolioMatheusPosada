import { useEffect, useRef, useState, type RefObject } from 'react'

const VISIBILITY_THRESHOLD = 0.15

interface InViewResult<T extends Element> {
  ref: RefObject<T | null>
  isInView: boolean
}

export function useIsInView<T extends Element>(): InViewResult<T> {
  const ref = useRef<T>(null)
  const [isInView, setIsInView] = useState<boolean>(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setIsInView(true)
        observer.disconnect()
      },
      { threshold: VISIBILITY_THRESHOLD },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return { ref, isInView }
}