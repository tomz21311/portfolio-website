import { SiteHeader } from '@/components/SiteHeader'
import { HeroSection } from '@/components/HeroSection'
import { PillarsSection } from '@/components/PillarsSection'
import { WebsitesSection } from '@/components/WebsitesSection'
import { VideoSection } from '@/components/VideoSection'
import { AIHexMapSection } from '@/components/AIHexMapSection'
import { LeadershipSection } from '@/components/LeadershipSection'
import { AboutSection } from '@/components/AboutSection'
import { NowSection } from '@/components/NowSection'
import { ContactSection } from '@/components/ContactSection'
import { SiteFooter } from '@/components/SiteFooter'

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <PillarsSection />
        <WebsitesSection />
        <VideoSection />
        <AIHexMapSection />
        <LeadershipSection />
        <AboutSection />
        <NowSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
