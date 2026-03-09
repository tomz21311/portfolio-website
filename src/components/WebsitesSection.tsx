import Link from 'next/link'
import { websites, websitesIntro } from '@/content/websites'
import { ScrollReveal } from './ScrollReveal'

export function WebsitesSection() {
  return (
    <ScrollReveal as="section" id="websites" className="section">
      <div className="section-heading">
        <p className="eyebrow">{websitesIntro.eyebrow}</p>
        <h2>{websitesIntro.title}</h2>
        <p className="websites-intro">{websitesIntro.body}</p>
      </div>
      <div className="website-grid">
        {websites.map((site) => (
          <article key={site.slug} className="project-card">
            <div className="browser-frame" aria-hidden="true">
              <span />
              <span />
              <span />
              {site.screenshot && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={site.screenshot}
                  alt={`Screenshot of ${site.title}`}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top',
                  }}
                />
              )}
            </div>
            <h3>{site.title}</h3>
            <p>{site.description}</p>
            <Link
              href={`/websites/${site.slug}`}
              aria-label={`View case study for ${site.title}`}
            >
              View case study
            </Link>
          </article>
        ))}
      </div>
    </ScrollReveal>
  )
}
