import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { resumeHeader, resumeSummary, resumeExperience, resumeEducation } from '@/content/resume'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Resume | Tom Zeleznock',
  description: 'Professional resume of Tom Zeleznock — Digital Leader & Strategist.',
}

export default function ResumePage() {
  return (
    <>
      <SiteHeader resumePage />
      <main>
        <section className="section">
          <p className="eyebrow">{resumeHeader.eyebrow}</p>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)' }}>{resumeHeader.name}</h1>
          <p className="subhead">{resumeHeader.tagline}</p>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>{resumeSummary.title}</h2>
          </div>
          <p>{resumeSummary.body}</p>
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>{resumeExperience.title}</h2>
          </div>
          {resumeExperience.roles.map((role) => (
            <article key={role.title} className="project-card" style={{ marginBottom: '1rem' }}>
              <h3>
                {role.title} — {role.org}
              </h3>
              <p>
                <strong>{role.dates}</strong>
              </p>
              <p>{role.summary}</p>
              {role.bullets.length > 0 && (
                <ul>
                  {role.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </section>

        <section className="section">
          <div className="section-heading">
            <h2>{resumeEducation.title}</h2>
          </div>
          <p>
            <strong>{resumeEducation.degree}</strong>
          </p>
          <p>
            <strong>Current Toolkit:</strong>{' '}
            {resumeEducation.toolkit.replace('Current Toolkit: ', '')}
          </p>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
