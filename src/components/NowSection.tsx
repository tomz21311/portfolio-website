import { now } from '@/content/now'
import { ScrollReveal } from './ScrollReveal'

export function NowSection() {
  return (
    <ScrollReveal as="section" id="now" className="section">
      <div className="section-heading">
        <p className="eyebrow">{now.eyebrow}</p>
        <h2>{now.title}</h2>
      </div>
      <p className="now-copy">{now.body}</p>
      <p className="updated-stamp">{now.updatedStamp}</p>
    </ScrollReveal>
  )
}
