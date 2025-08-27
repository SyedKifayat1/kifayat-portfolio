import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SkillsHero } from "@/components/skills-hero"
import { SkillsCategories } from "@/components/skills-categories"
import { SkillsProgress } from "@/components/skills-progress"

export default function SkillsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <SkillsHero />
      <SkillsCategories />
      <SkillsProgress />
      <Footer />
    </div>
  )
}
