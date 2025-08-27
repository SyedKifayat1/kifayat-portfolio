"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95, icon: "/react-icon.png" },
      { name: "Next.js", level: 90, icon: "/nextjs-icon.png" },
      { name: "TypeScript", level: 88, icon: "/typescript-icon.png" },
      { name: "Tailwind CSS", level: 92, icon: "/tailwind-icon.png" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 85, icon: "/nodejs-icon.png" },
      { name: "Python", level: 80, icon: "/python-icon.png" },
      { name: "PostgreSQL", level: 82, icon: "/postgresql-icon.png" },
      { name: "MongoDB", level: 78, icon: "/mongodb-icon.png" },
    ],
  },
  {
    title: "Tools & Cloud",
    skills: [
      { name: "Docker", level: 75, icon: "/docker-icon.png" },
      { name: "AWS", level: 70, icon: "/aws-icon.png" },
      { name: "Git", level: 90, icon: "/git-icon.png" },
      { name: "Vercel", level: 88, icon: "/vercel-icon.png" },
    ],
  },
]

export function SkillsOverview() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance mb-4">
              Technical
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Skills
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Proficient in modern technologies and frameworks for building scalable web applications.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="fade-in opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-colors">
                <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-background/80 p-1.5 flex items-center justify-center">
                            <Image
                              src={skill.icon || "/placeholder.svg"}
                              alt={skill.name}
                              width={20}
                              height={20}
                              className="object-contain"
                            />
                          </div>
                          <span className="font-medium text-sm">{skill.name}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>

                      <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 delay-600">
            <Button asChild size="lg" variant="outline" className="group bg-transparent">
              <Link href="/skills">
                View All Skills
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsOverview
