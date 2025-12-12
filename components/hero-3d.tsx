"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Code, Palette, Zap } from "lucide-react"
import Link from "next/link"

function Hero3D() {
  const heroRef = useRef<HTMLDivElement>(null)
  const floatingElementsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !floatingElementsRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const xPercent = (clientX / innerWidth - 0.5) * 2
      const yPercent = (clientY / innerHeight - 0.5) * 2

      // Parallax effect for floating elements
      const elements = floatingElementsRef.current.children
      Array.from(elements).forEach((element, index) => {
        const speed = (index + 1) * 0.5
        const x = xPercent * speed * 10
        const y = yPercent * speed * 10
          ; (element as HTMLElement).style.transform =
            `translate3d(${x}px, ${y}px, 0) rotateX(${yPercent * 5}deg) rotateY(${xPercent * 5}deg)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])


  const [particles, setParticles] = useState<{ left: string, top: string, delay: string, duration: string }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 3}s`,
      duration: `${2 + Math.random() * 2}s`,
    }));
    setParticles(newParticles);
  }, []);


  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced 3D Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse"></div>
        </div>
      </div>

      {/* 3D Floating Elements */}
      <div ref={floatingElementsRef} className="absolute inset-0 pointer-events-none">
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 transform-3d">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl backdrop-blur-sm border border-primary/20 animate-spin-slow transform rotate-12 hover:rotate-45 transition-transform duration-1000"></div>
        </div>

        <div className="absolute top-1/3 right-1/4 w-24 h-24 transform-3d">
          <div className="w-full h-full bg-gradient-to-br from-accent/20 to-primary/20 rounded-full backdrop-blur-sm border border-accent/20 animate-bounce-slow transform -rotate-12"></div>
        </div>

        <div className="absolute bottom-1/3 left-1/3 w-20 h-20 transform-3d">
          <div className="w-full h-full bg-gradient-to-br from-primary/30 to-accent/30 rounded-lg backdrop-blur-sm border border-primary/30 animate-pulse transform rotate-45"></div>
        </div>

        <div className="absolute bottom-1/4 right-1/6 w-28 h-28 transform-3d">
          <div className="w-full h-full bg-gradient-to-br from-accent/25 to-primary/25 rounded-3xl backdrop-blur-sm border border-accent/25 animate-spin-reverse transform -rotate-6"></div>
        </div>

        {/* Floating icons */}
        <div className="absolute top-1/2 left-1/12 transform-3d animate-float">
          <Code className="h-8 w-8 text-primary/40" />
        </div>

        <div className="absolute top-2/3 right-1/12 transform-3d animate-float-delayed">
          <Palette className="h-6 w-6 text-accent/40" />
        </div>

        <div className="absolute bottom-1/2 left-2/3 transform-3d animate-float-slow">
          <Zap className="h-7 w-7 text-primary/40" />
        </div>
      </div>

      {/* Particle effect overlay */}
      
        <div className="absolute inset-0 opacity-20">
          {particles.map((p, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full animate-twinkle"
              style={{
                left: p.left,
                top: p.top,
                animationDelay: p.delay,
                animationDuration: p.duration,
              }}
            />
          ))}
        </div>



      {/* Main content with 3D transforms */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transform-3d">
        <div className="mb-6 transform hover:scale-110 transition-transform duration-500">
          <div className="relative inline-block">
            <Sparkles className="h-12 w-12 text-primary mx-auto mb-4 animate-bounce" />
            <div className="absolute inset-0 h-12 w-12 mx-auto mb-4 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
          </div>
        </div>

        <h1 className="font-serif font-bold text-xl sm:text-3xl lg:text-5xl text-foreground mb-6 leading-tight transform hover:scale-105 transition-transform duration-300">
          <span className="inline-block transform hover:rotate-2 transition-transform duration-300">I Build High-Converting Websites</span>{" "}
          <span className="text-primary inline-block transform hover:-rotate-1 transition-transform duration-300 relative">
            That Help Businesses
            <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-full scale-150 animate-pulse"></div>
          </span>
          <br />
          <span className="inline-block transform hover:rotate-1 transition-transform duration-300">Get More Customers</span>
        </h1>

        <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed transform hover:scale-105 transition-transform duration-300">
          Modern, fast, and fully responsive websites built with React.js — optimized for leads, sales, and business growth.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="glow-effect group transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <Link href="/contact">
              <span className="relative z-10">Get a Free Website Proposal</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 relative z-10" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="glow-effect bg-transparent transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
          >
            <Link href="/projects">
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            </Link>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero3D
