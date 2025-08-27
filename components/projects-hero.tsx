"use client"

import { Code, Layers, Zap } from "lucide-react"

export function ProjectsHero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 animate-bounce-slow">
            <Code className="h-10 w-10 text-primary" />
          </div>
        </div>

        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-foreground mb-6">
          Featured <span className="text-primary">Projects</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          A showcase of my latest work, featuring modern web applications, innovative solutions, and creative digital
          experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 transform hover:scale-105 transition-all duration-300 glow-effect">
            <Code className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Web Applications</h3>
            <p className="text-muted-foreground text-sm">Full-stack applications with modern frameworks</p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 transform hover:scale-105 transition-all duration-300 glow-effect">
            <Layers className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-serif font-semibold text-lg text-foreground mb-2">UI/UX Design</h3>
            <p className="text-muted-foreground text-sm">Beautiful interfaces and user experiences</p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 transform hover:scale-105 transition-all duration-300 glow-effect">
            <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Performance</h3>
            <p className="text-muted-foreground text-sm">Optimized for speed and scalability</p>
          </div>
        </div>
      </div>
    </section>
  )
}
