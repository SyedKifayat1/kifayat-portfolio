"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Palette, Zap, Globe } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    features: ["Responsive Design", "Performance Optimization", "SEO Ready"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, user-friendly interfaces that provide exceptional user experiences.",
    features: ["User Research", "Wireframing", "Prototyping"],
  },
  {
    icon: Zap,
    title: "Full-Stack Development",
    description: "End-to-end application development from database design to frontend implementation.",
    features: ["API Development", "Database Design", "Cloud Deployment"],
  },
  {
    icon: Globe,
    title: "Consulting",
    description: "Technical consulting and code reviews to help optimize your existing projects.",
    features: ["Code Review", "Architecture Planning", "Performance Audit"],
  },
]

export function ServicesPreview() {
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
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance mb-4">
              My
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Services
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Comprehensive web development services to bring your digital vision to life.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="fade-in opacity-0 translate-y-8 transition-all duration-700"
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>

                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-xs text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 delay-600">
            <Button asChild size="lg" className="group">
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesPreview
