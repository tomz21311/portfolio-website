import { leadershipIntro, leadershipItems } from '@/content/leadership'
import { ScrollReveal } from './ScrollReveal'

export function LeadershipSection() {
  return (
    <ScrollReveal as="section" id="leadership" className="section">
      <div className="section-heading leadership-heading">
        <p className="eyebrow">{leadershipIntro.eyebrow}</p>
        <h2>{leadershipIntro.title}</h2>
        <p className="leadership-subtitle">{leadershipIntro.subtitle}</p>
      </div>
      <div className="leadership-list">
        {leadershipItems.map((item) => (
          <ScrollReveal
            key={item.title}
            as="article"
            className="leadership-item"
            band
            delay={item.delay}
          >
            <div className="leadership-title">
              <h3>{item.title}</h3>
            </div>
            <p>{item.description}</p>
          </ScrollReveal>
        ))}
      </div>
    </ScrollReveal>
  )
}
