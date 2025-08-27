"use client"

import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Basic",
    icon: Star,
    price: "$1,500",
    period: "one-time",
    description: "Perfect for personal portfolios and small businesses",
    features: [
      "Responsive Design",
      "Up to 5 Pages",
      "Basic SEO Setup",
      "Contact Form",
      "1 Month Support",
      "Mobile Optimized",
    ],
    popular: false,
  },
  {
    name: "Standard",
    icon: Zap,
    price: "$3,500",
    period: "one-time",
    description: "Ideal for growing businesses and professional websites",
    features: [
      "Everything in Basic",
      "Up to 15 Pages",
      "Advanced SEO",
      "CMS Integration",
      "3 Months Support",
      "Performance Optimization",
      "Analytics Setup",
      "Social Media Integration",
    ],
    popular: true,
  },
  {
    name: "Premium",
    icon: Crown,
    price: "$6,500",
    period: "one-time",
    description: "Complete solution for enterprises and complex applications",
    features: [
      "Everything in Standard",
      "Unlimited Pages",
      "Custom Functionality",
      "Database Integration",
      "6 Months Support",
      "Advanced Security",
      "API Development",
      "Priority Support",
      "Training Included",
    ],
    popular: false,
  },
]

export function PricingPlans() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Pricing <span className="text-primary">Plans</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your project. All plans include modern design and professional development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-card/80 backdrop-blur-sm border rounded-3xl p-8 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 glow-effect ${
                plan.popular
                  ? "border-primary shadow-lg shadow-primary/20 scale-105"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${
                    plan.popular ? "bg-primary/20" : "bg-primary/10"
                  }`}
                >
                  <plan.icon className={`h-8 w-8 ${plan.popular ? "text-primary" : "text-primary"}`} />
                </div>

                <h3 className="font-serif font-bold text-2xl text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>

                <div className="mb-4">
                  <span className="font-serif font-bold text-4xl text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">/{plan.period}</span>
                </div>
              </div>

              <div className="mb-8">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div
                        className={`flex items-center justify-center w-5 h-5 rounded-full ${
                          plan.popular ? "bg-primary" : "bg-primary/20"
                        }`}
                      >
                        <Check className={`h-3 w-3 ${plan.popular ? "text-white" : "text-primary"}`} />
                      </div>
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                asChild
                className={`w-full glow-effect group ${plan.popular ? "" : "variant-outline bg-transparent"}`}
                variant={plan.popular ? "default" : "outline"}
              >
                <Link href="/contact">
                  Get Started
                  <Zap className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <Button asChild variant="outline" size="lg" className="glow-effect bg-transparent">
            <Link href="/contact">Contact for Custom Quote</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
