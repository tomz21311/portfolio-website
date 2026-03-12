'use client'

import { useState } from 'react'
import { featuredVideos, reelVideos, videoIntro } from '@/content/videos'
import { ScrollReveal } from './ScrollReveal'

interface Video {
  label: string
  title: string
  description: string
  longDescription?: string
  href: string
  image: string
}

function getYouTubeId(url: string): string | null {
  const match = url.match(/[?&]v=([^&]+)/)
  return match ? match[1] : null
}

function VideoModal({ video, onClose }: { video: Video; onClose: () => void }) {
  const videoId = getYouTubeId(video.href)
  const embedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`
    : null

  return (
    <div className="video-modal-backdrop" onClick={onClose}>
      <div className="video-modal" onClick={(e) => e.stopPropagation()}>
        <button className="video-modal-close" onClick={onClose} aria-label="Close video">
          ✕
        </button>
        {embedUrl && (
          <div className="video-modal-player">
            <iframe
              src={embedUrl}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        )}
        <div className="video-modal-meta">
          <div className="video-modal-meta-top">
            <div>
              <span className="video-label">{video.label}</span>
              <h3>{video.title}</h3>
              <p>{video.longDescription ?? video.description}</p>
            </div>
            {video.href !== '#' && (
              <a
                href={video.href}
                target="_blank"
                rel="noreferrer"
                className="video-yt-link"
              >
                Watch on YouTube ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<Video | null>(null)

  return (
    <>
      <ScrollReveal as="section" id="video" className="section">
        <div className="section-heading">
          <p className="eyebrow">{videoIntro.eyebrow}</p>
          <h2>{videoIntro.title}</h2>
          <p className="video-intro">{videoIntro.body}</p>
        </div>

        <div className="video-feature-grid">
          {featuredVideos.map((video) => (
            <button
              key={video.title}
              className="video-feature-card"
              onClick={() => setActiveVideo(video)}
              aria-label={`Play featured video: ${video.title}`}
              style={{ '--shot': `url('${video.image}')` } as React.CSSProperties}
            >
              <div className="video-overlay">
                <span className="video-label">{video.label}</span>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="video-reel-grid">
          {reelVideos.map((video) => (
            <button
              key={video.title}
              className="video-frame"
              onClick={() => setActiveVideo(video)}
              aria-label={`Play video: ${video.title}`}
              style={{ '--shot': `url('${video.image}')` } as React.CSSProperties}
            >
              <div className="video-overlay">
                <span className="video-label">{video.label}</span>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </button>
          ))}
        </div>
      </ScrollReveal>

      {activeVideo && (
        <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </>
  )
}
