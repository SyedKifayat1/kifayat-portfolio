"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar } from "lucide-react"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Real-Time One-to-One Chat App",
    description: "A real-time one-to-one chat application built with the MERN stack and Socket.IO, featuring instant message delivery, online/offline presence, typing indicators, and secure message storage with MongoDB. Designed with a clean and responsive interface for seamless communication across devices.",
    image: "/whatsAppClone.png",
    category: "MERN-Stack",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO", "Tailwind CSS", "Zustand"],
    year: "2025",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI Chat Website – Gemini API",
    description: "A fully functional AI-powered chat website integrated with Google Gemini API. Real-time interactive conversations with AI, clean UI/UX, and responsive design for desktop, tablet, and mobile.",
    image: "/project-ai-chat.png",
    category: "Web Apps",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Google Gemini API"],
    year: "2025",
    demoUrl: "https://ai-chat-boot.vercel.app/",
    githubUrl: "https://github.com/SyedKifayat1/Ai-Chat-Boot",
  },
  {
    id: 3,
    title: "CodeXura – Service Providing Agency Website",
    description: "A professional agency website showcasing services in web development, AI integration, and custom software solutions. Designed as both a portfolio and service-providing platform with a modern, user-friendly layout.",
    image: "/project-codexura.png",
    category: "Websites",
    technologies: ["React.js", "Tailwind CSS", "Material UI", "Framer Motion"],
    year: "2025",
    demoUrl: "https://codexura.netlify.app",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Evibes Development – Digital Agency Website",
    description: "A professional digital agency website providing web development, SEO, and marketing services. Fully responsive design, modern UI/UX, contact form integration, and SEO-friendly structure for better visibility.",
    image: "/project-evibes.png",
    category: "Websites",
    technologies: ["Vite.js", "React.js", "CSS3", "Framer Motion", "Material UI"],
    year: "2025",
    demoUrl: "https://evibesdevelopment.com",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Social Media App Frontend",
    description: "Frontend development for a social media application inspired by Facebook. Features user profiles, posts, likes, comments, and real-time updates with a responsive and modern design.",
    image: "/project-social-media-frontend.png",
    category: "Frontend",
    technologies: ["React.js", "Next.js", "Tailwind CSS"],
    year: "2025",
    demoUrl: "https://facebook-clone-ten-snowy.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Google Classroom Frontend – Online Learning Platform",
    description: "Frontend development for a Google Classroom-style application. Features class dashboard, assignments, announcements, and user roles with a clean, responsive, and user-friendly interface.",
    image: "/project-google-classroom.png",
    category: "Frontend",
    technologies: ["React.js", "Next.js", "Tailwind CSS", "Shadcn UI"],
    year: "2025",
    demoUrl: "https://google-class-room-by-kifayat.vercel.app/",
    githubUrl: "https://github.com/SyedKifayat1/GoogleClassRoom",
  },
  {
    id: 7,
    title: "Modern Personal Portfolio Website",
    description: "A modern personal portfolio website for showcasing skills, projects, and services. Fully responsive design, interactive UX, and SEO-optimized structure for developers, designers, and freelancers.",
    image: "/project-portfolio-modern.png",
    category: "Websites",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion", "Three.js"],
    year: "2025",
    demoUrl: "https://modern-portfolio-by-kifayat.vercel.app",
    githubUrl: "https://github.com/SyedKifayat1/ModernPortfolio",
  },
  {
    id: 8,
    title: "Portfolio Website with Light & Dark Mode",
    description: "A personal portfolio website enhanced with light and dark mode toggle. Highlights skills, projects, and services with a modern, interactive, and fully responsive design.",
    image: "/project-portfolio-dark-light.png",
    category: "Websites",
    technologies: ["Next.js", "React.js", "Tailwind CSS", "Framer Motion"],
    year: "2025",
    demoUrl: "https://kifayat-dev.vercel.app/",
    githubUrl: "#",
  },
  {
    id: 9,
    title: "Vertex Studio – Digital Agency Website",
    description: "A professional digital agency website showcasing web development, SEO, and marketing services. Modern, clean UI/UX, fully responsive, and optimized for lead generation and branding.",
    image: "/project-vertex-studio.png",
    category: "Websites",
    technologies: ["React.js", "Tailwind CSS", "Material UI", "Framer Motion"],
    year: "2025",
    demoUrl: "https://vertexs.vercel.app/",
    githubUrl: "#",
  },
];

const categories = ["All", "Web Apps", "Websites", "MERN-Stack"]

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
                className={`glow-effect transition-all duration-300 ${activeCategory === category ? "" : "bg-transparent"
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
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button size="sm" className="glow-effect w-full">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </a>

                    <a href={project.githubUrl} target="_blank" rel="" className="flex-1">
                      <Button size="sm" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/20 w-full">
                        <Github className="h-4 w-4" />
                      </Button>
                    </a>
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
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" className="glow-effect flex-1 group/btn w-full">
                      <ExternalLink className="mr-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                      Demo
                    </Button>
                  </a>

                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button size="sm" variant="outline" className="glow-effect bg-transparent flex-1 group/btn w-full">
                      <Github className="mr-2 h-3 w-3 transition-transform group-hover/btn:rotate-12" />
                      Code
                    </Button>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
