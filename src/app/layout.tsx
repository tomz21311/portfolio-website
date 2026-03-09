import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { CustomCursor } from '@/components/CustomCursor'

export const metadata: Metadata = {
  title: 'Tom Zeleznock | Digital Leader & Builder',
  description:
    'Portfolio of Tom Zeleznock — digital leader, web developer, video producer, and AI practitioner based in Greater Hartford, Connecticut.',
  openGraph: {
    title: 'Tom Zeleznock | Digital Leader & Builder',
    description:
      'Portfolio of Tom Zeleznock — digital leader, web developer, video producer, and AI practitioner based in Greater Hartford, Connecticut.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
