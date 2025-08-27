"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = [
  { name: "All", count: 12 },
  { name: "React", count: 5 },
  { name: "Next.js", count: 4 },
  { name: "TypeScript", count: 3 },
  { name: "Design", count: 2 },
  { name: "Performance", count: 3 },
]

export function BlogCategories() {
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant={activeCategory === category.name ? "default" : "outline"}
              onClick={() => setActiveCategory(category.name)}
              className={`glow-effect transition-all duration-300 ${
                activeCategory === category.name ? "" : "bg-transparent"
              }`}
            >
              {category.name}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </Button>
          ))}
        </div>
      </div>
    </section>
  )
}
