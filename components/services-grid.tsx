"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Globe, Code, Search, Wrench, Smartphone, Database } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Globe,
    title: "Portfolio Development",
    description:
      "Custom portfolio websites that showcase your work beautifully. Modern designs with responsive layouts and interactive elements.",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Custom Animations"],
    price: "Starting at $1,500",
  },
  {
    icon: Code,
    title: "Full-Stack Web Apps",
    description:
      "Complete web applications from frontend to backend. Scalable architecture with modern frameworks and databases.",
    features: ["React/Next.js", "Database Integration", "API Development", "User Authentication"],
    price: "Starting at $3,000",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description:
      "Improve your website's search engine rankings with technical SEO, content optimization, and performance enhancements.",
    features: ["Technical SEO", "Performance Optimization", "Content Strategy", "Analytics Setup"],
    price: "Starting at $800",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Keep your website running smoothly with regular updates, security patches, and performance monitoring.",
    features: ["Regular Updates", "Security Monitoring", "Performance Optimization", "24/7 Support"],
    price: "Starting at $200/month",
  },
  {
    icon: Smartphone,
    title: "Mobile Optimization",
    description:
      "Ensure your website looks and works perfectly on all devices with responsive design and mobile-first approach.",
    features: ["Responsive Design", "Touch Optimization", "Fast Mobile Loading", "App-like Experience"],
    price: "Starting at $1,000",
  },
  {
    icon: Database,
    title: "Database Solutions",
    description:
      "Design and implement robust database solutions for your applications with optimal performance and security.",
    features: ["Database Design", "Migration Services", "Performance Tuning", "Backup Solutions"],
    price: "Starting at $1,200",
  },
]

export function ServicesGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
            What I <span className="text-primary">Offer</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to help your business succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 glow-effect group"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{service.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-serif font-semibold text-lg text-primary">{service.price}</span>
                </div>
                <Button asChild className="w-full glow-effect group/btn">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
