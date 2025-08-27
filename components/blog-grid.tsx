"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Building Modern React Applications with Next.js 14",
    summary:
      "Explore the latest features in Next.js 14 and learn how to build performant, scalable React applications with the App Router.",
    image: "/blog-nextjs-14.jpeg",
    category: "Next.js",
    tags: ["React", "Next.js", "Performance"],
    date: "2024-01-15",
    readTime: "8 min read",
    slug: "building-modern-react-applications-nextjs-14",
  },
  {
    id: 2,
    title: "TypeScript Best Practices for Large-Scale Applications",
    summary:
      "Learn essential TypeScript patterns and practices that will help you maintain clean, scalable codebases in enterprise applications.",
    image: "/blog-typescript-best-practices.jpeg",
    category: "TypeScript",
    tags: ["TypeScript", "Best Practices", "Architecture"],
    date: "2024-01-10",
    readTime: "12 min read",
    slug: "typescript-best-practices-large-scale-applications",
  },
  {
    id: 3,
    title: "CSS Grid vs Flexbox: When to Use Each",
    summary:
      "A comprehensive guide to understanding the differences between CSS Grid and Flexbox, with practical examples and use cases.",
    image: "/blog-css-grid-flexbox.png",
    category: "Design",
    tags: ["CSS", "Layout", "Design"],
    date: "2024-01-05",
    readTime: "6 min read",
    slug: "css-grid-vs-flexbox-when-to-use-each",
  },
  {
    id: 4,
    title: "Optimizing React Performance: A Complete Guide",
    summary:
      "Discover advanced techniques for optimizing React applications, from code splitting to memoization and beyond.",
    image: "/blog-react-performance.jpeg",
    category: "Performance",
    tags: ["React", "Performance", "Optimization"],
    date: "2023-12-28",
    readTime: "15 min read",
    slug: "optimizing-react-performance-complete-guide",
  },
  {
    id: 5,
    title: "The Future of Web Development: Trends for 2024",
    summary:
      "Explore the emerging trends and technologies that are shaping the future of web development in 2024 and beyond.",
    image: "/blog-web-dev-trends-2025.jpeg",
    category: "Insights",
    tags: ["Trends", "Web Development", "Future"],
    date: "2023-12-20",
    readTime: "10 min read",
    slug: "future-of-web-development-trends-2024",
  },
  {
    id: 6,
    title: "Building Accessible Web Applications",
    summary:
      "Learn how to create inclusive web experiences that work for everyone, with practical accessibility guidelines and techniques.",
    image: "/blog-accessibility.jpeg",
    category: "Best Practices",
    tags: ["Accessibility", "UX", "Best Practices"],
    date: "2023-12-15",
    readTime: "9 min read",
    slug: "building-accessible-web-applications",
  },
]

export function BlogGrid() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Latest <span className="text-primary">Articles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay updated with the latest insights, tutorials, and trends in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl overflow-hidden transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 glow-effect group"
            >
              {/* Post Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground rounded-full text-sm font-medium">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
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

                <h3 className="font-serif font-semibold text-xl text-foreground mb-3 line-clamp-2">{post.title}</h3>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{post.summary}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                    >
                      <Tag className="h-2 w-2" />
                      {tag}
                    </span>
                  ))}
                  {post.tags.length > 2 && (
                    <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                      +{post.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* <Button asChild variant="ghost" className="w-full justify-between group/btn p-0 h-auto">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center justify-between w-full p-3 hover:bg-muted/50 rounded-lg transition-colors"
                  >
                    <span className="font-medium">Read More</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button> */}

                <Button
                  asChild
                  variant="ghost"
                  className="w-full justify-between p-0  h-auto rounded-lg overflow-hidden group/btn"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center justify-between w-full p-3 rounded-lg transition-colors hover:bg-muted/50"
                  >
                    <span className="font-medium text-foreground">Read More</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>


              </div>
            </article>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="glow-effect bg-transparent">
            Load More Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
