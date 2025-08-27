"use client"

import { Trophy, Award, Star, Medal, Target, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"

const achievements = [
  {
    icon: Trophy,
    title: "Best Portfolio Website 2023",
    organization: "Design Awards International",
    date: "December 2023",
    description: "Awarded for exceptional design and user experience in portfolio development.",
    category: "Design",
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
  },
  {
    icon: Award,
    title: "Top 10 React Developers",
    organization: "React Community",
    date: "October 2023",
    description: "Featured in the top 10 React developers list for innovative component libraries.",
    category: "Development",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Star,
    title: "Open Source Contributor",
    organization: "GitHub",
    date: "September 2023",
    description: "Recognized for significant contributions to open source projects with 1000+ stars.",
    category: "Community",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Medal,
    title: "Hackathon Winner",
    organization: "TechCrunch Disrupt",
    date: "August 2023",
    description: "First place winner for developing an innovative AI-powered web application.",
    category: "Competition",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Target,
    title: "Performance Excellence",
    organization: "Web Performance Group",
    date: "July 2023",
    description: "Achieved 100% Lighthouse scores across multiple production applications.",
    category: "Performance",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Zap,
    title: "Innovation Award",
    organization: "Startup Accelerator",
    date: "June 2023",
    description: "Recognized for innovative use of modern web technologies in startup projects.",
    category: "Innovation",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
]

export function AchievementsGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
            All <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive list of awards, recognitions, and milestones throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 glow-effect group"
            >
              <div className="mb-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 ${achievement.bgColor} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon className={`h-8 w-8 ${achievement.color}`} />
                </div>

                <div className="mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {achievement.category}
                  </span>
                </div>

                <h3 className="font-serif font-semibold text-xl text-foreground mb-2">{achievement.title}</h3>

                <p className="text-primary font-medium mb-2">{achievement.organization}</p>

                <p className="text-sm text-muted-foreground mb-4">{achievement.date}</p>

                <p className="text-muted-foreground text-sm leading-relaxed">{achievement.description}</p>
              </div>

              <Button variant="ghost" className="w-full justify-center group/btn">
                <span className="font-medium">View Details</span>
                <Trophy className="ml-2 h-4 w-4 transition-transform group-hover/btn:rotate-12" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
