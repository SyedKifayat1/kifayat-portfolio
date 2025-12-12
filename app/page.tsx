import Navigation from "../components/navigation"
import Hero3D from "../components/hero-3d"
import ProfessionalMetrics from "../components/professional-metrics"
import ProcessSection from "../components/process-section"
import TestimonialsSection from "../components/testimonials-section"
import Footer from "../components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero3D />
      <div className="-mt-8">
        <ProfessionalMetrics />
      </div>
     
      <div className="-mt-4">
        <ProcessSection />
      </div>
      
      <div className="-mt-4">
        <TestimonialsSection />
      </div>

      <Footer />
    </div>
  )
}
