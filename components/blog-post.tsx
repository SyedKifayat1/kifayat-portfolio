"use client"

import { Calendar, Clock, Tag, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface BlogPostProps {
  slug: string
}

// Mock blog post data - in a real app, this would come from a CMS or API
const getBlogPost = (slug: string) => {
  const posts = {
    "building-modern-react-applications-nextjs-14": {
      title: "Building Modern React Applications with Next.js 14",
      summary:
        "Explore the latest features in Next.js 14 and learn how to build performant, scalable React applications with the App Router.",
      image: "/blog-nextjs-14.png",
      category: "Next.js",
      tags: ["React", "Next.js", "Performance"],
      date: "2024-01-15",
      readTime: "8 min read",
      content: `
        <p>Next.js 14 brings exciting new features and improvements that make building React applications more efficient and enjoyable. In this comprehensive guide, we'll explore the key features and learn how to leverage them in your projects.</p>

        <h2>What's New in Next.js 14</h2>
        <p>The latest version of Next.js introduces several groundbreaking features:</p>
        <ul>
          <li><strong>Turbopack (Beta):</strong> A new bundler that's up to 700x faster than Webpack</li>
          <li><strong>Server Actions (Stable):</strong> Simplified server-side form handling</li>
          <li><strong>Partial Prerendering:</strong> Combine static and dynamic content seamlessly</li>
        </ul>

        <h2>Getting Started with the App Router</h2>
        <p>The App Router is now the recommended way to build Next.js applications. Here's how to set up a new project:</p>
        
        <pre><code>npx create-next-app@latest my-app --typescript --tailwind --eslint --app</code></pre>

        <p>This command creates a new Next.js project with TypeScript, Tailwind CSS, ESLint, and the App Router enabled by default.</p>

        <h2>Building Your First Component</h2>
        <p>Let's create a simple component that demonstrates the power of Next.js 14:</p>

        <pre><code>// app/components/UserProfile.tsx
import { Suspense } from 'react'

async function UserData({ userId }: { userId: string }) {
  const user = await fetch(\`/api/users/\${userId}\`)
  return <div>{user.name}</div>
}

export default function UserProfile({ userId }: { userId: string }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <UserData userId={userId} />
    </Suspense>
  )
}</code></pre>

        <h2>Performance Optimizations</h2>
        <p>Next.js 14 includes several performance improvements out of the box:</p>
        <ul>
          <li>Automatic code splitting</li>
          <li>Image optimization with the Image component</li>
          <li>Built-in CSS and JavaScript minification</li>
          <li>Automatic static optimization</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Next.js 14 represents a significant step forward in React development. With its improved performance, developer experience, and new features, it's an excellent choice for building modern web applications.</p>
      `,
    },
  }

  return posts[slug as keyof typeof posts] || null
}

export function BlogPost({ slug }: BlogPostProps) {
  const post = getBlogPost(slug)

  if (!post) {
    return (
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif font-bold text-4xl text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </div>
      </section>
    )
  }

  return (
    <article className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-8">
          <Button asChild variant="ghost" className="glow-effect group">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Post Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">{post.category}</span>
            <div className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <h1 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-4 leading-tight">{post.title}</h1>

          <p className="text-xl text-muted-foreground leading-relaxed mb-6">{post.summary}</p>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm"
              >
                <Tag className="h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8 rounded-2xl overflow-hidden">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>

        {/* Post Content */}
        <div
          className="prose prose-lg max-w-none text-foreground prose-headings:font-serif prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted prose-pre:border prose-pre:border-border prose-pre:rounded-lg"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  )
}
