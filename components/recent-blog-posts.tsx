"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef } from "react"

const recentPosts = [
  {
    id: 1,
    title: "Building Modern Web Apps with Next.js 14",
    excerpt:
      "Explore the latest features in Next.js 14 including the App Router, Server Components, and improved performance optimizations.",
    image: "/blog-nextjs-14.png",
    category: "Web Development",
    readTime: "5 min read",
    publishDate: "Dec 15, 2024",
    slug: "nextjs-14-modern-web-apps",
  },
  {
    id: 2,
    title: "The Future of CSS: Container Queries and Beyond",
    excerpt:
      "Discover how container queries are revolutionizing responsive design and what other CSS features are coming next.",
    image: "/blog-css-future.png",
    category: "CSS",
    readTime: "7 min read",
    publishDate: "Dec 10, 2024",
    slug: "future-of-css-container-queries",
  },
  {
    id: 3,
    title: "TypeScript Best Practices for Large Applications",
    excerpt: "Learn essential TypeScript patterns and practices for building maintainable, scalable applications.",
    image: "/blog-typescript-practices.png",
    category: "TypeScript",
    readTime: "8 min read",
    publishDate: "Dec 5, 2024",
    slug: "typescript-best-practices",
  },
]

export function RecentBlogPosts() {
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
    <section ref={sectionRef} className="py-24 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700">
            <h2 className="text-4xl lg:text-5xl font-bold text-balance mb-4">
              Latest
              <span className="text-gradient bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}
                Blog Posts
              </span>
            </h2>
            <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development, design, and technology trends.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <article
              key={post.id}
              className="fade-in opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.publishDate}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors text-balance">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">{post.excerpt}</p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="fade-in opacity-0 translate-y-8 transition-all duration-700 delay-600">
            <Button asChild size="lg" variant="outline" className="group bg-transparent">
              <Link href="/blog">
                Read All Posts
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentBlogPosts
