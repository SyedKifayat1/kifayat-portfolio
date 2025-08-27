"use client"

import { Briefcase, GraduationCap, Calendar } from "lucide-react"

const timelineItems = [
  {
    type: "work",
    title: "Senior Full-Stack Developer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description:
      "Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and architecting cloud solutions.",
    icon: Briefcase,
  },
  {
    type: "work",
    title: "Full-Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects, focusing on performance optimization and user experience improvements.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "Master of Computer Science",
    company: "Stanford University",
    period: "2018 - 2020",
    description: "Specialized in Software Engineering and Human-Computer Interaction. Graduated with honors.",
    icon: GraduationCap,
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "StartupXYZ",
    period: "2019 - 2020",
    description:
      "Built responsive web applications and collaborated with design teams to create intuitive user interfaces.",
    icon: Briefcase,
  },
  {
    type: "education",
    title: "Bachelor of Computer Science",
    company: "UC Berkeley",
    period: "2014 - 2018",
    description: "Foundation in computer science fundamentals, algorithms, and software development principles.",
    icon: GraduationCap,
  },
]

export function AboutTimeline() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Career <span className="text-primary">Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of my professional experience and educational background.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          <div className="space-y-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex items-start gap-6 group">
                {/* Timeline dot */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-background border-4 border-primary rounded-full group-hover:border-accent transition-colors duration-300">
                  <item.icon className="h-6 w-6 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 transform hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 glow-effect">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
                    </div>

                    <h3 className="font-serif font-semibold text-xl text-foreground mb-1">{item.title}</h3>

                    <p className="text-primary font-medium mb-3">{item.company}</p>

                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
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
