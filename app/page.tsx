import Navigation from "../components/navigation"
import Hero3D from "../components/hero-3d"
import ProfessionalMetrics from "../components/professional-metrics"
// import AboutPreview from "../components/about-preview"
// import FeaturedProjects from "../components/featured-projects"
// import ClientLogos from "../components/client-logos"
// import SkillsOverview from "../components/skills-overview"
import ProcessSection from "../components/process-section"
// import ServicesPreview from "../components/services-preview"
import TestimonialsSection from "../components/testimonials-section"
// import RecentBlogPosts from "../components/recent-blog-posts"
// import ContactCTA from "../components/contact-cta"
import Footer from "../components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero3D />
      <div className="-mt-8">
        <ProfessionalMetrics />
      </div>
      {/* <div className="-mt-4">
        <AboutPreview />
      </div>
      <div className="-mt-4">
        <FeaturedProjects />
      </div>
      <div className="-mt-4">
        <ClientLogos />
      </div> */}
      {/* <div className="-mt-4">
        <SkillsOverview />
      </div> */}
      <div className="-mt-4">
        <ProcessSection />
      </div>
      {/* <div className="-mt-4">
        <ServicesPreview />
      </div> */}
      <div className="-mt-4">
        <TestimonialsSection />
      </div>
      {/* <div className="-mt-4">
        <RecentBlogPosts />
      </div>
      <div className="-mt-4">
        <ContactCTA />
      </div> */}
      <Footer />
    </div>
  )
}
