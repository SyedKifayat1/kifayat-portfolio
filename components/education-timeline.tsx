"use client"

import { GraduationCap, Award, Calendar, MapPin } from "lucide-react"
import Image from "next/image"

const educationItems = [
  {
    type: "degree",
    title: "Master of Computer Science",
    institution: "Stanford University",
    location: "Stanford, CA",
    period: "2018 - 2020",
    gpa: "3.9/4.0",
    description:
      "Specialized in Software Engineering and Human-Computer Interaction. Thesis on 'Modern Web Application Architecture Patterns'.",
    achievements: ["Graduated Summa Cum Laude", "Dean's List (4 semesters)", "Research Assistant"],
    icon: GraduationCap,
    logo: "/stanford-university-logo.png",
  },
  {
    type: "degree",
    title: "Bachelor of Computer Science",
    institution: "UC Berkeley",
    location: "Berkeley, CA",
    period: "2014 - 2018",
    gpa: "3.7/4.0",
    description:
      "Foundation in computer science fundamentals, algorithms, data structures, and software development principles.",
    achievements: ["Magna Cum Laude", "ACM Programming Contest Winner", "Teaching Assistant"],
    icon: GraduationCap,
    logo: "/uc-berkeley-logo.png",
  },
  {
    type: "course",
    title: "Advanced React & Next.js Certification",
    institution: "Vercel Academy",
    location: "Online",
    period: "2023",
    description:
      "Comprehensive course covering advanced React patterns, Next.js features, and modern web development practices.",
    achievements: ["Perfect Score", "Community Contributor"],
    icon: Award,
    logo: "/vercel-logo.png",
  },
  {
    type: "course",
    title: "AWS Solutions Architect",
    institution: "Amazon Web Services",
    location: "Online",
    period: "2022",
    description: "Professional certification in cloud architecture, covering scalable systems design and AWS services.",
    achievements: ["Professional Level Certification"],
    icon: Award,
    logo: "/aws-logo.png",
  },
]

export function EducationTimeline() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Academic <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My educational journey from undergraduate studies to professional certifications.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          <div className="space-y-12">
            {educationItems.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6 group">
                {/* Timeline dot with institution logo */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-background border-4 border-primary rounded-full group-hover:border-accent transition-all duration-300 overflow-hidden">
                  <Image
                    src={item.logo || "/placeholder.svg"}
                    alt={`${item.institution} logo`}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 glow-effect">
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-muted-foreground">{item.location}</span>
                      </div>
                      {item.gpa && (
                        <div className="bg-primary/10 px-3 py-1 rounded-full">
                          <span className="text-sm font-medium text-primary">GPA: {item.gpa}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="font-serif font-semibold text-xl text-foreground mb-1">{item.title}</h3>

                    <p className="text-primary font-medium mb-3">{item.institution}</p>

                    <p className="text-muted-foreground leading-relaxed mb-4">{item.description}</p>

                    {item.achievements && item.achievements.length > 0 && (
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {item.achievements.map((achievement, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
