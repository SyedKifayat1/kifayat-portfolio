"use client"

import { useState } from "react"
import Image from "next/image"


const skillCategories = {
  Languages: [
    { name: "JavaScript", level: 90, icon: "/javascript-icon.png", experience: "4+ years" },
    { name: "C", level: 90, icon: "/c-icon.png", experience: "4+ years" },
    { name: "Python", level: 70, icon: "/python-icon.jpeg", experience: "3+ year" },
    { name: "C++", level: 85, icon: "/cpp-logo.png", experience: "4+ years" },
  ],
  Frontend: [
    { name: "React.js", level: 90, icon: "/react-icon.png", experience: "3+ years" },
    { name: "Next.js", level: 85, icon: "/nextjs-icon.png", experience: "3+ year" },
    { name: "MERN Stack", level: 80, icon: "/mern-logo.jpeg", experience: "3+ year" },
    { name: "ShadCN UI", level: 75, icon: "/shadcn-icon.png", experience: "3+ year" },
    { name: "Material UI", level: 78, icon: "/mui-icon.png", experience: "3+ year" },
    { name: "Tailwind CSS", level: 88, icon: "/tailwind-icon.png", experience: "3+ years" },
  ],
  Backend: [
    { name: "Node.js", level: 80, icon: "/nodejs-icon.png", experience: "3+ year" },
    { name: "Express.js", level: 78, icon: "/express-icon.png", experience: "3+ year" },
    { name: "PostgreSQL", level: 75, icon: "/postgresql-icon.png", experience: "3+ year" },
    { name: "MySQL", level: 70, icon: "/mysql-icon.png", experience: "3+ year" },
    { name: "MongoDB", level: 72, icon: "/mongodb-icon.png", experience: "3+ year" },
  ],
  Tools: [
    { name: "Git", level: 85, icon: "/git-icon.png", experience: "3+ years" },
    { name: "Jira", level: 75, icon: "/jira-icon.jpeg", experience: "2+ year" },
    { name: "ClickUp", level: 70, icon: "/clickup-icon.png", experience: "1+ year" },
    { name: "Vercel", level: 80, icon: "/vercel-icon.png", experience: "3+ year" },
    { name: "VS Code", level: 95, icon: "/vscode-icon.png", experience: "3+ years" },
  ],
  SoftSkills: [
    { name: "Problem Solving", level: 90, icon: "/problem-solving-icon.png" },
    { name: "Critical Thinking", level: 88, icon: "/critical-thinking-icon.png" },
    { name: "Teamwork", level: 85, icon: "/teamwork-icon.png" },
    { name: "Effective Communication", level: 83, icon: "/communication-icon.png" },
    { name: "Adaptability", level: 80, icon: "/adaptability-icon.jpeg" },
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
