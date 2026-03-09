import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { websites } from '@/content/websites'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return websites.map((site) => ({ slug: site.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const site = websites.find((s) => s.slug === slug)
  if (!site) return {}
  return {
    title: `${site.title} | Tom Zeleznock`,
    description: site.description,
  }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const site = websites.find((s) => s.slug === slug)
  if (!site) notFound()

  return (
    <>
      <SiteHeader />
      <main>
        {/* ── Hero ── */}
        <section className="section case-study-hero">
          <Link href="/#websites" className="case-study-back">
            ← Websites &amp; Apps
          </Link>

          <p className="eyebrow">Case Study</p>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4.5vw, 3rem)', maxWidth: '24ch' }}>
            {site.title}
          </h1>
          <p className="subhead" style={{ marginTop: '0.75rem' }}>
            {site.description}
          </p>

          {/* Meta tags */}
          <div className="case-study-meta">
            <span className="meta-tag role">{site.role}</span>
            {site.tools.map((tool) => (
              <span key={tool} className="meta-tag">
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* ── Primary screenshot ── */}
        <div className="case-study-screenshot">
          {site.screenshot ? (
            <Image
              src={site.screenshot}
              alt={`Screenshot of ${site.title}`}
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              priority
            />
          ) : (
            <div className="screenshot-placeholder">
              <div className="screenshot-dots">
                <span />
                <span />
                <span />
              </div>
              <span>Screenshot coming soon</span>
            </div>
          )}
        </div>

        {/* ── Case study body ── */}
        <section className="section">
          <div className="case-study-body">
            <div className="case-study-overview">
              <h3>Overview</h3>
              <p>{site.caseStudy.overview}</p>
            </div>

            <div>
              <h3>The Challenge</h3>
              <p>{site.caseStudy.challenge}</p>
            </div>

            <div>
              <h3>The Solution</h3>
              <p>{site.caseStudy.solution}</p>
            </div>

            <div className="case-study-overview">
              <h3>Outcome</h3>
              <p>{site.caseStudy.outcome}</p>
            </div>
          </div>

          {/* Additional screenshots */}
          {site.additionalScreenshots.length > 0 && (
            <div className="additional-screenshots">
              {site.additionalScreenshots.map((src, i) => (
                <div key={i} className="additional-screenshot">
                  <Image
                    src={src}
                    alt={`${site.title} screenshot ${i + 2}`}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Live site link */}
          {site.liveUrl && (
            <div className="case-study-live">
              <span style={{ opacity: 0.7, fontSize: '0.9rem' }}>View the live site:</span>
              <a
                className="btn btn-outline"
                href={site.liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Visit site ↗
              </a>
            </div>
          )}

          {/* Back nav */}
          <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--stroke)' }}>
            <Link href="/#websites" className="case-study-back">
              ← Back to all websites
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
