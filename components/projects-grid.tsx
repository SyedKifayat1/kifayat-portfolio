"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "/project-task-management.png",
    category: "Web Apps",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    year: "2024",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with 3D animations and interactive elements.",
    image: "/project-portfolio.png",
    category: "Websites",
    technologies: ["Next.js", "Three.js", "Tailwind CSS", "Framer Motion"],
    year: "2024",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A comprehensive weather dashboard with forecasts, maps, and historical data visualization.",
    image: "/project-weather-dashboard.png",
    category: "Web Apps",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    year: "2023",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Restaurant Landing Page",
    description: "An elegant landing page for a fine dining restaurant with online reservation system.",
    image: "/project-restaurant.png",
    category: "Websites",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    year: "2023",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Social Media Platform",
    description: "A full-featured social media platform with posts, messaging, and user profiles.",
    image: "/project-social-media.png",
    category: "Full-Stack",
    technologies: ["React", "GraphQL", "Node.js", "Redis"],
    year: "2023",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Mobile App UI Kit",
    description: "A comprehensive UI kit for mobile applications with modern design components.",
    image: "/project-ui-kit.png",
    category: "UI",
    technologies: ["Figma", "React Native", "Styled Components"],
    year: "2022",
    demoUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["All", "Web Apps", "Websites", "Full-Stack", "UI"]

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = projects.filter((project) => activeCategory === "All" || project.category === activeCategory)

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
            All <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore my complete portfolio of web applications, websites, and digital experiences.
          </p>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`glow-effect transition-all duration-300 ${
                  activeCategory === category ? "" : "bg-transparent"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 glow-effect group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-3">
                    <Button size="sm" className="glow-effect">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20">
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{project.year}</span>
                  </div>
                </div>

                <h3 className="font-serif font-semibold text-xl text-foreground mb-2">{project.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="glow-effect flex-1 group/btn">
                    <ExternalLink className="mr-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                    Demo
                  </Button>
                  <Button size="sm" variant="outline" className="glow-effect bg-transparent flex-1 group/btn">
                    <Github className="mr-2 h-3 w-3 transition-transform group-hover/btn:rotate-12" />
                    Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
