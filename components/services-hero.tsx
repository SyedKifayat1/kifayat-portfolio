"use client"

import { Briefcase, Rocket, Settings } from "lucide-react"

export function ServicesHero() {
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
            <Briefcase className="h-10 w-10 text-primary" />
          </div>
        </div>

        <h1 className="font-serif font-bold text-4xl sm:text-6xl text-foreground mb-6">
          Web <span className="text-primary">Services</span>
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Professional web development services tailored to bring your digital vision to life with cutting-edge
          technology and exceptional user experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 transform hover:scale-105 transition-all duration-300 glow-effect">
            <Rocket className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Fast Delivery</h3>
            <p className="text-muted-foreground text-sm">Quick turnaround without compromising quality</p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 transform hover:scale-105 transition-all duration-300 glow-effect">
            <Settings className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Custom Solutions</h3>
            <p className="text-muted-foreground text-sm">Tailored to your specific business needs</p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 transform hover:scale-105 transition-all duration-300 glow-effect">
            <Briefcase className="h-8 w-8 text-primary mx-auto mb-3" />
            <h3 className="font-serif font-semibold text-lg text-foreground mb-2">Professional</h3>
            <p className="text-muted-foreground text-sm">Enterprise-grade solutions and support</p>
          </div>
        </div>
      </div>
    </section>
  )
}
