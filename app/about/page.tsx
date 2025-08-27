import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AboutHero } from "@/components/about-hero"
import { AboutStats } from "@/components/about-stats"
import { AboutTimeline } from "@/components/about-timeline"

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-hidden">
      <Navigation />
      <AboutHero />
      <AboutStats />
      <AboutTimeline />
      <Footer />
    </div>
  )
}
