import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServicesHero } from "@/components/services-hero"
import { ServicesGrid } from "@/components/services-grid"
import { PricingPlans } from "@/components/pricing-plans"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ServicesHero />
      <ServicesGrid />
      <PricingPlans />
      <Footer />
    </div>
  )
}
