import { featuredVideos, reelVideos, videoIntro } from '@/content/videos'
import { ScrollReveal } from './ScrollReveal'

export function VideoSection() {
  return (
    <ScrollReveal as="section" id="video" className="section">
      <div className="section-heading">
        <p className="eyebrow">{videoIntro.eyebrow}</p>
        <h2>{videoIntro.title}</h2>
        <p className="video-intro">{videoIntro.body}</p>
      </div>

      <div className="video-feature-grid">
        {featuredVideos.map((video) => (
          <a
            key={video.title}
            className="video-feature-card"
            href={video.href}
            aria-label={`Featured video: ${video.title}`}
            style={{ '--shot': `url('${video.image}')` } as React.CSSProperties}
          >
            <div className="video-overlay">
              <span className="video-label">{video.label}</span>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </a>
        ))}
      </div>

      <div className="video-reel-grid">
        {reelVideos.map((video) => (
          <a
            key={video.title}
            className="video-frame"
            href={video.href}
            aria-label={`Video: ${video.title}`}
            style={{ '--shot': `url('${video.image}')` } as React.CSSProperties}
          >
            <div className="video-overlay">
              <span className="video-label">{video.label}</span>
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </a>
        ))}
      </div>
    </ScrollReveal>
  )
}
