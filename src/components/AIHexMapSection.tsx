'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { aiCapabilities, aiIntro, discover } from '@/content/ai'
import { ScrollReveal } from './ScrollReveal'

// ─── Hex geometry helpers ─────────────────────────────────────────
const CX = 250
const CY = 220
const RADIUS = 155
const HEX_SIZE = 58

function hexPoints(x: number, y: number, size: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (60 * i - 30) * (Math.PI / 180)
    return `${x + size * Math.cos(angle)},${y + size * Math.sin(angle)}`
  }).join(' ')
}

function hexToRgba(hex: string, alpha: number): string {
  const clean = hex.replace('#', '').trim()
  if (clean.length !== 6) return `rgba(15, 118, 110, ${alpha})`
  const value = parseInt(clean, 16)
  const r = (value >> 16) & 255
  const g = (value >> 8) & 255
  const b = value & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const positions = aiCapabilities.map((_, i) => {
  const angle = (i * 60 - 90) * (Math.PI / 180)
  return {
    x: CX + RADIUS * Math.cos(angle),
    y: CY + RADIUS * Math.sin(angle),
  }
})

// ─── Hex Map SVG ──────────────────────────────────────────────────
function HexMap() {
  const { resolvedTheme } = useTheme()
  const [activeHex, setActiveHex] = useState<number | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const primary = '#0f766e'
  const accent = '#ea580c'
  const textColor = resolvedTheme === 'light' ? '#111827' : '#e5e7eb'

  const handleMouseOver = (e: React.MouseEvent<SVGSVGElement>) => {
    const target = e.target as SVGElement
    const polygon = target.closest<SVGPolygonElement>('polygon[data-hex]')
    if (!polygon) return
    const idx = polygon.dataset.hex
    if (idx === 'center') setActiveHex(null)
    else if (idx !== undefined) setActiveHex(parseInt(idx, 10))
  }

  const handleClick = (e: React.MouseEvent<SVGSVGElement>) => {
    const target = e.target as SVGElement
    const polygon = target.closest<SVGPolygonElement>('polygon[data-hex]')
    if (!polygon) return
    const idx = polygon.dataset.hex
    if (idx === 'center') {
      setActiveHex(null)
    } else if (idx !== undefined) {
      const next = parseInt(idx, 10)
      setActiveHex((prev) => (prev === next ? null : next))
    }
  }

  if (!mounted) return <div style={{ width: 500, height: 440 }} />

  return (
    <div className="ai-container">
      <svg
        id="hex-svg"
        width="500"
        height="440"
        viewBox="0 0 500 440"
        aria-label="Interactive AI capability map"
        onMouseOver={handleMouseOver}
        onClick={handleClick}
      >
        {/* Connector lines */}
        {positions.map((pos, i) => {
          const active = activeHex === i
          return (
            <line
              key={i}
              x1={CX}
              y1={CY}
              x2={pos.x}
              y2={pos.y}
              stroke={active ? accent : hexToRgba(primary, 0.45)}
              strokeWidth={active ? 2.2 : 1.1}
              strokeDasharray={active ? undefined : '4,4'}
              style={{ transition: 'all 0.25s' }}
            />
          )
        })}

        {/* Center hex */}
        <polygon
          points={hexPoints(CX, CY, 45)}
          fill={primary}
          stroke={primary}
          strokeWidth={2}
          style={{ cursor: 'pointer' }}
          data-hex="center"
        />
        <text
          x={CX}
          y={CY + 6}
          textAnchor="middle"
          style={{
            fontFamily: "Schibsted,'Avenir Next','Segoe UI',sans-serif",
            fontWeight: 800,
            fontSize: 18,
            fill: '#f8fffd',
            pointerEvents: 'none',
          }}
        >
          AI
        </text>

        {/* Outer hexes */}
        {aiCapabilities.map((cap, i) => {
          const active = activeHex === i
          const fill = active ? primary : hexToRgba(primary, 0.18)
          const stroke = active ? accent : hexToRgba(primary, 0.75)
          const strokeWidth = active ? 2.4 : 1.5
          const labelColor = active ? '#f8fffd' : textColor
          const lines = cap.title.split('\n')

          return (
            <g key={i}>
              <polygon
                points={hexPoints(positions[i].x, positions[i].y, HEX_SIZE)}
                fill={fill}
                stroke={stroke}
                strokeWidth={strokeWidth}
                style={{ cursor: 'pointer', transition: 'all 0.25s' }}
                data-hex={String(i)}
              />
              <text
                x={positions[i].x}
                y={positions[i].y}
                textAnchor="middle"
                style={{
                  fontFamily: "Schibsted,'Avenir Next','Segoe UI',sans-serif",
                  fontWeight: 620,
                  fontSize: 10,
                  fill: labelColor,
                  pointerEvents: 'none',
                }}
              >
                {lines.length > 1 ? (
                  <>
                    <tspan x={positions[i].x} dy="-5">
                      {lines[0]}
                    </tspan>
                    <tspan x={positions[i].x} dy="14">
                      {lines[1]}
                    </tspan>
                  </>
                ) : (
                  <tspan x={positions[i].x} dy="4">
                    {lines[0]}
                  </tspan>
                )}
              </text>
            </g>
          )
        })}
      </svg>

      {/* Description panel */}
      <div className={`ai-desc-panel${activeHex !== null ? ' active' : ''}`} id="ai-desc">
        {activeHex !== null ? (
          <>
            <h3>{aiCapabilities[activeHex].title.replace('\n', ' ')}</h3>
            <p>{aiCapabilities[activeHex].description}</p>
          </>
        ) : (
          <p>Hover or click on a node to learn how I use AI in that area.</p>
        )}
      </div>
    </div>
  )
}

// ─── Discover Search ──────────────────────────────────────────────
function DiscoverSearch() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<string[] | null>(null)

  const runSearch = useCallback(() => {
    const q = query.toLowerCase().trim()
    if (!q) {
      setResults(null)
      return
    }

    const scored = discover.items
      .map((item) => ({
        label: item.label,
        score: item.tags.reduce((s, tag) => (q.includes(tag) ? s + 1 : s), 0),
      }))
      .filter((e) => e.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4)

    if (!scored.length) {
      setResults(['No close matches yet. Try terms like web, documentary, strategy, or AI workflow.'])
    } else {
      setResults(scored.map((e) => e.label))
    }
  }, [query])

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      runSearch()
    }
  }

  return (
    <div className="discover-section">
      <h3>{discover.title}</h3>
      <p>{discover.description}</p>
      <div className="discover-input">
        <label htmlFor="discoverInput" className="sr-only">
          Describe your needs
        </label>
        <input
          id="discoverInput"
          type="text"
          placeholder={discover.placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
        />
        <button className="btn btn-solid" type="button" onClick={runSearch}>
          Discover
        </button>
      </div>
      <p className="discover-note">{discover.disclaimer}</p>
      {results !== null && (
        <ul className="discover-results">
          {results.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

// ─── Section ──────────────────────────────────────────────────────
export function AIHexMapSection() {
  return (
    <ScrollReveal as="section" id="ai" className="section">
      <div className="section-heading">
        <p className="eyebrow">{aiIntro.eyebrow}</p>
        <h2>{aiIntro.title}</h2>
        <p className="ai-section-subtitle">{aiIntro.body}</p>
      </div>
      <HexMap />
      {/* <DiscoverSearch /> */}
    </ScrollReveal>
  )
}
