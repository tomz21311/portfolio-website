import { pillars, pillarsIntro } from '@/content/pillars'
import { ScrollReveal } from './ScrollReveal'

export function PillarsSection() {
  return (
    <ScrollReveal as="section" id="pillars" className="section">
      <div className="section-heading">
        <p className="eyebrow">{pillarsIntro.eyebrow}</p>
        <h2>{pillarsIntro.title}</h2>
        <p className="pillars-intro">{pillarsIntro.body}</p>
      </div>
      <div className="pillars-grid">
        {pillars.map((pillar) => (
          <a key={pillar.number} className="pillar-card" href={pillar.href}>
            <span className="pillar-icon">{pillar.number}</span>
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </a>
        ))}
      </div>
    </ScrollReveal>
  )
}
