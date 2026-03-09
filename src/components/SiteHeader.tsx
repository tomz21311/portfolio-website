'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function SiteHeader({ resumePage = false }: { resumePage?: boolean }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label="Tom Zeleznock home">
        Tom Z
      </Link>

      {!resumePage && (
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#websites">Websites</a>
          <a href="#video">Video</a>
          <a href="#ai">AI</a>
          <a href="#leadership">Leadership</a>
          <a href="#about">About</a>
        </nav>
      )}

      <div className="header-actions">
        {resumePage ? (
          <Link className="btn btn-outline" href="/">
            Back to portfolio
          </Link>
        ) : (
          <Link className="btn btn-outline" href="/resume">
            Resume
          </Link>
        )}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle dark and light mode"
        >
          {mounted ? (theme === 'dark' ? 'Light' : 'Dark') : 'Light'}
        </button>
      </div>
    </header>
  )
}
