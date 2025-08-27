"use client"

import { Button } from "@/components/ui/button"
import { Download, MapPin, Calendar, Mail } from "lucide-react"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* 3D Avatar placeholder with animated border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-background to-muted overflow-hidden">
                <Image
                  src="/professional-headshot.png"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements around avatar */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent/20 rounded-full animate-float"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-primary/30 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-4">
                About <span className="text-primary">Me</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Passionate full-stack developer with a love for creating beautiful, functional, and user-centered
                digital experiences.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span>5+ Years Experience</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>hello@portfolio.dev</span>
              </div>
            </div>

            <div className="pt-4">
              <Button className="glow-effect group transform hover:scale-105 transition-all duration-300">
                <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>

        {/* Extended Bio */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="font-serif font-semibold text-2xl text-foreground mb-6">My Journey</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="mb-4">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that
                make a difference. My journey began with a curiosity about how things work on the web, which quickly
                evolved into a deep love for crafting beautiful, functional applications.
              </p>
              <p className="mb-4">
                I specialize in modern web technologies including React, Next.js, TypeScript, and Node.js. My approach
                combines technical expertise with a keen eye for design, ensuring that every project not only functions
                flawlessly but also provides an exceptional user experience.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or
                sharing knowledge through blog posts and community talks. I believe in continuous learning and staying
                at the forefront of web development trends.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
