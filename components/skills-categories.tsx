"use client"

import { useState } from "react"
import Image from "next/image"

const skillCategories = {
  Frontend: [
    { name: "React", level: 95, icon: "/react-icon.png", experience: "5+ years" },
    { name: "Next.js", level: 90, icon: "/nextjs-icon.png", experience: "3+ years" },
    { name: "TypeScript", level: 88, icon: "/typescript-icon.png", experience: "4+ years" },
    { name: "Tailwind CSS", level: 92, icon: "/tailwind-icon.png", experience: "3+ years" },
    { name: "Vue.js", level: 75, icon: "/vue-icon.png", experience: "2+ years" },
    { name: "JavaScript", level: 95, icon: "/javascript-icon.png", experience: "6+ years" },
  ],
  Backend: [
    { name: "Node.js", level: 85, icon: "/nodejs-icon.png", experience: "4+ years" },
    { name: "Python", level: 80, icon: "/python-icon.png", experience: "3+ years" },
    { name: "PostgreSQL", level: 82, icon: "/postgresql-icon.png", experience: "3+ years" },
    { name: "MongoDB", level: 78, icon: "/mongodb-icon.png", experience: "2+ years" },
    { name: "GraphQL", level: 75, icon: "/graphql-icon.png", experience: "2+ years" },
    { name: "Express.js", level: 88, icon: "/express-icon.png", experience: "4+ years" },
  ],
  Tools: [
    { name: "Git", level: 90, icon: "/git-icon.png", experience: "5+ years" },
    { name: "Docker", level: 75, icon: "/docker-icon.png", experience: "2+ years" },
    { name: "AWS", level: 70, icon: "/aws-icon.png", experience: "2+ years" },
    { name: "Vercel", level: 85, icon: "/vercel-icon.png", experience: "3+ years" },
    { name: "Figma", level: 80, icon: "/figma-icon.png", experience: "3+ years" },
    { name: "VS Code", level: 95, icon: "/vscode-icon.png", experience: "5+ years" },
  ],
}

export function SkillsCategories() {
  const [activeCategory, setActiveCategory] = useState("Frontend")
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Skill <span className="text-primary">Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Organized by expertise areas with proficiency levels and years of experience.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-2">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories[activeCategory as keyof typeof skillCategories].map((skill) => (
            <div
              key={skill.name}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 glow-effect group cursor-pointer"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-background rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Image src={skill.icon || "/placeholder.svg"} alt={skill.name} width={32} height={32} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-lg text-foreground">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.experience}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-2">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">Proficiency</span>
                  <span className="text-sm font-medium text-primary">{skill.level}%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
