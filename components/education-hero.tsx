"use client"

import { GraduationCap, BookOpen, Award } from "lucide-react"

export function EducationHero() {
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
            <GraduationCap className="h-10 w-10 text-primary" />
          </div>
        </div>

        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-foreground mb-6">
          Educational <span className="text-primary">Journey</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          A comprehensive overview of my academic achievements, certifications, and continuous learning journey in
          technology.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 transform hover:scale-105 transition-all duration-300 glow-effect">
            <BookOpen className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Formal Education</h3>
            <p className="text-muted-foreground text-sm">University degrees and academic achievements</p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 transform hover:scale-105 transition-all duration-300 glow-effect">
            <Award className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Certifications</h3>
            <p className="text-muted-foreground text-sm">Professional certifications and credentials</p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 transform hover:scale-105 transition-all duration-300 glow-effect">
            <GraduationCap className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Continuous Learning</h3>
            <p className="text-muted-foreground text-sm">Ongoing courses and skill development</p>
          </div>
        </div>
      </div>
    </section>
  )
}
