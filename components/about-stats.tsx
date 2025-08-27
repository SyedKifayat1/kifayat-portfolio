"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Users, Award, Coffee } from "lucide-react"

const stats = [
  {
    icon: Code,
    value: 50,
    label: "Projects Completed",
    suffix: "+",
  },
  {
    icon: Users,
    value: 98,
    label: "Happy Clients",
    suffix: "%",
  },
  {
    icon: Award,
    value: 12,
    label: "Awards Won",
    suffix: "",
  },
  {
    icon: Coffee,
    value: 100,
    label: "Cups of Coffee",
    suffix: "+",
  },
]

export function AboutStats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
            By the <span className="text-primary">Numbers</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some key metrics that showcase my journey and achievements in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} isVisible={isVisible} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon: Icon,
  value,
  label,
  suffix,
  isVisible,
  delay,
}: {
  icon: any
  value: number
  label: string
  suffix: string
  isVisible: boolean
  delay: number
}) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isVisible) return

    const timer = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const counter = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(counter)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(counter)
    }, delay)

    return () => clearTimeout(timer)
  }, [isVisible, value, delay])

  return (
    <div className="text-center group">
      <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 glow-effect">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <div className="font-serif font-bold text-3xl text-foreground mb-2">
          {count}
          {suffix}
        </div>
        <div className="text-muted-foreground font-medium">{label}</div>
      </div>
    </div>
  )
}
