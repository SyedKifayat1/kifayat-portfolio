import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CertificationsHero } from "@/components/certifications-hero"
import { CertificationsGrid } from "@/components/certifications-grid"

export default function CertificationsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <CertificationsHero />
      <CertificationsGrid />
      <Footer />
    </div>
  )
}
