'use client'

import { useEffect, useRef } from 'react'

type ScrollRevealProps = React.HTMLAttributes<HTMLElement> & {
  children: React.ReactNode
  delay?: number
  band?: boolean
  as?: keyof React.JSX.IntrinsicElements
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  band = false,
  as: Tag = 'div',
  ...rest
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('is-visible')
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const baseClass = band ? 'band-reveal' : 'reveal'

  return (
    // @ts-expect-error dynamic tag with forwarded ref
    <Tag ref={ref} className={`${baseClass} ${className}`.trim()} {...rest}>
      {children}
    </Tag>
  )
}
