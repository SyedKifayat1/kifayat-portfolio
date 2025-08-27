"use client"

import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Calendar, Users } from "lucide-react"
import Image from "next/image"

export function FeaturedProject() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Featured <span className="text-primary">Project</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My latest and most comprehensive project showcasing advanced web development techniques.
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 glow-effect">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Project Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image
                src="/featured-project-screenshot.png"
                alt="Featured Project Screenshot"
                width={600}
                height={400}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Project Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2024</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Solo Project</span>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-2xl lg:text-3xl text-foreground mb-4">E-Commerce Platform</h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  A modern, full-stack e-commerce platform built with Next.js, featuring real-time inventory management,
                  secure payment processing, and an intuitive admin dashboard. Includes advanced features like
                  AI-powered product recommendations and dynamic pricing.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe", "Vercel"].map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="glow-effect group flex-1">
                  <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  Live Demo
                </Button>
                <Button variant="outline" className="glow-effect bg-transparent group flex-1">
                  <Github className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                  Source Code
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
