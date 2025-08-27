"use client"

import { motion } from "framer-motion"
import { Lightbulb, Palette, Code, Rocket } from "lucide-react"

const processSteps = [
  {
    icon: Lightbulb,
    title: "Discovery & Strategy",
    description: "Understanding your vision, goals, and target audience to create a strategic roadmap.",
    color: "from-yellow-500/20 to-orange-500/20",
  },
  {
    icon: Palette,
    title: "Design & Prototyping",
    description: "Creating stunning visual designs and interactive prototypes that bring your ideas to life.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Code,
    title: "Development & Testing",
    description: "Building robust, scalable solutions with clean code and comprehensive testing.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: Rocket,
    title: "Launch & Optimization",
    description: "Deploying your project and continuously optimizing for performance and user experience.",
    color: "from-green-500/20 to-emerald-500/20",
  },
]

export function ProcessSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Development Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that ensures exceptional results for every project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500`}
              />
              <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 h-full">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-center mb-2 text-sm font-semibold text-primary">Step {index + 1}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
