"use client"

import { useEffect, useRef, useState } from "react"

const overallSkills = [
  { category: "Frontend Development", level: 92 },
  { category: "Backend Development", level: 85 },
  { category: "UI/UX Design", level: 78 },
  { category: "Database Management", level: 80 },
  { category: "DevOps & Deployment", level: 72 },
  { category: "Mobile Development", level: 65 },
]

export function SkillsProgress() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Overall <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive view of my proficiency across different areas of web development.
          </p>
        </div>

        <div className="space-y-8">
          {overallSkills.map((skill, index) => (
            <div key={skill.category} className="group">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                  {skill.category}
                </h3>
                <span className="font-medium text-primary">{skill.level}%</span>
              </div>

              <div className="relative">
                <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-primary via-accent to-primary rounded-full transition-all duration-2000 ease-out relative"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 200}ms`,
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                  </div>
                </div>

                {/* Animated glow effect */}
                <div
                  className="absolute top-0 h-3 bg-gradient-to-r from-primary/50 to-accent/50 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    width: isVisible ? `${skill.level}%` : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
