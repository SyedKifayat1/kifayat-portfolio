import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AchievementsHero } from "@/components/achievements-hero"
import { FeaturedAchievement } from "@/components/featured-achievement"
import { AchievementsGrid } from "@/components/achievements-grid"

export default function AchievementsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <AchievementsHero />
      <FeaturedAchievement />
      <AchievementsGrid />
      <Footer />
    </div>
  )
}
