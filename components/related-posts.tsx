"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const relatedPosts = [
  {
    title: "TypeScript Best Practices for Large-Scale Applications",
    summary: "Learn essential TypeScript patterns and practices for enterprise applications.",
    image: "/blog-typescript-best-practices.png",
    date: "2024-01-10",
    readTime: "12 min read",
    slug: "typescript-best-practices-large-scale-applications",
  },
  {
    title: "Optimizing React Performance: A Complete Guide",
    summary: "Discover advanced techniques for optimizing React applications.",
    image: "/blog-react-performance.png",
    date: "2023-12-28",
    readTime: "15 min read",
    slug: "optimizing-react-performance-complete-guide",
  },
  {
    title: "The Future of Web Development: Trends for 2024",
    summary: "Explore emerging trends and technologies shaping web development.",
    image: "/blog-web-dev-trends-2024.png",
    date: "2023-12-20",
    readTime: "10 min read",
    slug: "future-of-web-development-trends-2024",
  },
]

export function RelatedPosts() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl text-foreground mb-4">
            Related <span className="text-primary">Articles</span>
          </h2>
          <p className="text-muted-foreground">Continue reading with these related posts</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post, index) => (
            <article
              key={index}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 glow-effect group"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={300}
                  height={160}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="font-serif font-semibold text-lg text-foreground mb-2 line-clamp-2">{post.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{post.summary}</p>

                <Button asChild variant="ghost" className="w-full justify-between group/btn p-0 h-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center justify-between w-full p-3 hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    <span className="font-medium">Read More</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
