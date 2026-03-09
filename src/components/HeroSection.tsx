import Link from 'next/link'
import { hero } from '@/content/hero'
import { ScrollReveal } from './ScrollReveal'

export function HeroSection() {
  return (
    <ScrollReveal as="section" className="hero section" id="hero">
      <div className="mesh" aria-hidden="true" />
      <div className="hero-content">
        <p className="eyebrow">{hero.eyebrow}</p>
        <h1>{hero.name}</h1>
        <p className="hero-lead">{hero.lead}</p>
        <p className="subhead">{hero.subhead}</p>
        <p style={{ fontWeight: 700, marginBottom: '1rem', marginTop: '2rem', fontSize: '1.25rem' }}>Website Build in Progress</p>
        <div className="hero-actions">
          <a className="btn btn-solid" href={hero.ctaPrimary.href}>
            {hero.ctaPrimary.label}
          </a>
          <Link className="btn btn-outline" href={hero.ctaSecondary.href}>
            {hero.ctaSecondary.label}
          </Link>
        </div>
      </div>
      <a href="#pillars" className="scroll-indicator" aria-label="Scroll to next section">
        Scroll
      </a>
    </ScrollReveal>
  )
}
