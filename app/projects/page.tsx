import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ProjectsHero } from "@/components/projects-hero"
import { FeaturedProject } from "@/components/featured-project"
import { ProjectsGrid } from "@/components/projects-grid"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <ProjectsHero />
      <FeaturedProject />
      <ProjectsGrid />
      <Footer />
    </div>
  )
}
