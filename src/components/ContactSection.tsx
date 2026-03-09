import { contact } from '@/content/contact'
import { ScrollReveal } from './ScrollReveal'

export function ContactSection() {
  return (
    <ScrollReveal as="section" id="contact" className="section contact">
      <h2>{contact.headline}</h2>
      <p>{contact.subtext}</p>
      <div className="hero-actions">
        {/* Email button hidden temporarily */}
        <a
          className="btn btn-solid"
          href={contact.linkedInUrl}
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </ScrollReveal>
  )
}
