import Image from 'next/image'
import { about } from '@/content/about'
import { ScrollReveal } from './ScrollReveal'

export function AboutSection() {
  return (
    <ScrollReveal as="section" id="about" className="section">
      <div className="section-heading">
        <p className="eyebrow">{about.eyebrow}</p>
        <h2>{about.title}</h2>
      </div>
      <div className="about-grid">
        <div>
          {about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <aside className="headshot-placeholder" aria-label="Headshot">
          {about.headshotSrc ? (
            <Image
              src={about.headshotSrc}
              alt={about.headshotAlt}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center 10%' }}
            />
          ) : (
            <span>Headshot Placeholder</span>
          )}
        </aside>
      </div>
    </ScrollReveal>
  )
}
