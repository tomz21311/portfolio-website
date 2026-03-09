import { contact } from '@/content/contact'
import { ScrollReveal } from './ScrollReveal'

export function ContactSection() {
  return (
    <ScrollReveal as="section" id="contact" className="section contact">
      <h2>{contact.headline}</h2>
      <p>{contact.subtext}</p>
      <div className="hero-actions">
        <a className="btn btn-solid" href={`mailto:${contact.email}`}>
          Email Tom
        </a>
        <a
          className="btn btn-outline"
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
