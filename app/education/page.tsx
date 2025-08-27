import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { EducationHero } from "@/components/education-hero"
import { EducationTimeline } from "@/components/education-timeline"
import { CertificatesTeaser } from "@/components/certificates-teaser"

export default function EducationPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <EducationHero />
      <EducationTimeline />
      <CertificatesTeaser />
      <Footer />
    </div>
  )
}
