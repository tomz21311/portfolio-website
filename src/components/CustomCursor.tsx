'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let pointerX = window.innerWidth / 2
    let pointerY = window.innerHeight / 2
    let ringX = pointerX
    let ringY = pointerY
    let rafId: number

    const onPointerMove = (e: PointerEvent) => {
      pointerX = e.clientX
      pointerY = e.clientY
      dot.style.transform = `translate(${pointerX}px, ${pointerY}px)`
    }

    const animateRing = () => {
      ringX += (pointerX - ringX) * 0.2
      ringY += (pointerY - ringY) * 0.2
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      rafId = requestAnimationFrame(animateRing)
    }

    window.addEventListener('pointermove', onPointerMove)
    rafId = requestAnimationFrame(animateRing)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  )
}
