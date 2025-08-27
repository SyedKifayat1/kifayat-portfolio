"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Mail, MessageCircle } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef } from "react"

export function ContactCTA() {
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
        <div className="fade-in opacity-0 translate-y-8 transition-all duration-700">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 border border-border/50 p-12 lg:p-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            </div>

            <div className="relative text-center space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-balance">
                  Ready to Start Your
                  <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                    {" "}
                    Next Project?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
                  Let's collaborate to bring your ideas to life. I'm here to help you build something amazing.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Get In Touch
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>

                <Button asChild size="lg" variant="outline" className="group bg-transparent">
                  <a
                    href="https://wa.me/1234567890?text=Hi! I'm interested in discussing a project with you."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>

              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  Available for freelance projects • Response within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
