"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Zap } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export function AboutPreview() {
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
    <section ref={sectionRef} className="py-16 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="fade-in opacity-0 translate-y-8 transition-all duration-700">
              <h2 className="text-4xl lg:text-5xl font-bold text-balance">
                Crafting Digital
                <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {" "}
                  Experiences
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mt-4 text-pretty">
                Full-stack developer with 5+ years of experience building modern web applications that combine beautiful
                design with powerful functionality.
              </p>
            </div>

            <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 delay-200">
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Code className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-secondary/10 flex items-center justify-center">
                    <Palette className="w-6 h-6 text-secondary" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">5+</div>
                  <div className="text-sm text-muted-foreground">Years Exp</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-2xl font-bold text-foreground">30+</div>
                  <div className="text-sm text-muted-foreground">Happy Clients</div>
                </div>
              </div>
            </div>

            <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 delay-400">
              <Button asChild size="lg" className="group">
                <Link href="/about">
                  Learn More About Me
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 p-8 backdrop-blur-sm border border-border/50">
                <div className="w-full h-full rounded-xl bg-card/80 backdrop-blur-sm border border-border/50 p-6 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1">
                      <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                        <Code className="w-12 h-12 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold">Full-Stack Developer</h3>
                    <p className="text-sm text-muted-foreground">
                      Passionate about creating exceptional digital experiences
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/20 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full bg-secondary/20 animate-pulse delay-1000" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPreview
