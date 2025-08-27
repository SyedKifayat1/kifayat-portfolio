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
      image: "/blog-nextjs-14.jpeg",
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

    "typescript-best-practices-large-scale-applications": {
      title: "TypeScript Best Practices for Large-Scale Applications",
      summary:
        "Learn essential TypeScript patterns and practices that will help you maintain clean, scalable codebases in enterprise applications.",
      image: "/blog-typescript-best-practices.jpeg",
      category: "TypeScript",
      tags: ["TypeScript", "Best Practices", "Architecture"],
      date: "2024-01-10",
      readTime: "12 min read",
      content: `
        <p>TypeScript is one of the most powerful tools for building large-scale, maintainable applications. In this article, we’ll explore patterns and practices that ensure long-term scalability.</p>

        <h2>1. Use Strict Mode</h2>
        <p>Always enable <code>strict</code> mode in your <code>tsconfig.json</code> for better type safety.</p>

        <h2>2. Organize Your Code</h2>
        <p>Use clear module boundaries and shared interfaces to reduce duplication.</p>

        <h2>3. Avoid Any</h2>
        <p>Minimize the use of <code>any</code> type to keep your code strongly typed.</p>

        <p>By following these practices, your applications will remain scalable, maintainable, and easy to debug.</p>
      `,
    },

    "css-grid-vs-flexbox-when-to-use-each": {
      title: "CSS Grid vs Flexbox: When to Use Each",
      summary:
        "A comprehensive guide to understanding the differences between CSS Grid and Flexbox, with practical examples and use cases.",
      image: "/blog-css-grid-flexbox.png",
      category: "Design",
      tags: ["CSS", "Layout", "Design"],
      date: "2024-01-05",
      readTime: "6 min read",
      content: `
        <p>CSS Grid and Flexbox are two powerful layout systems in CSS. Knowing when to use each can greatly improve your designs and developer experience.</p>

        <h2>Flexbox</h2>
        <p>Best for one-dimensional layouts (row <em>or</em> column). Examples: navbars, buttons alignment, horizontal lists.</p>

        <h2>CSS Grid</h2>
        <p>Best for two-dimensional layouts (rows <em>and</em> columns). Examples: dashboards, galleries, complex page structures.</p>

        <h2>When to Use Which?</h2>
        <ul>
          <li>Use Flexbox for simple alignment & distributing space in a single direction.</li>
          <li>Use Grid when you need full control over both rows and columns.</li>
        </ul>
      `,
    },

    "optimizing-react-performance-complete-guide": {
      title: "Optimizing React Performance: A Complete Guide",
      summary:
        "Discover advanced techniques for optimizing React applications, from code splitting to memoization and beyond.",
      image: "/blog-react-performance.jpeg",
      category: "Performance",
      tags: ["React", "Performance", "Optimization"],
      date: "2023-12-28",
      readTime: "15 min read",
      content: `
        <p>React applications can grow quickly in complexity, leading to performance bottlenecks. In this guide, we’ll cover strategies to keep your apps fast and responsive.</p>

        <h2>1. Code Splitting</h2>
        <p>Break large bundles into smaller ones to improve load time using <code>React.lazy</code> and dynamic imports.</p>

        <h2>2. Memoization</h2>
        <p>Use <code>React.memo</code> and <code>useMemo</code> to prevent unnecessary re-renders.</p>

        <h2>3. Virtualization</h2>
        <p>For large lists, use libraries like <code>react-window</code> or <code>react-virtualized</code>.</p>

        <p>By applying these techniques, you’ll ensure smoother experiences for users even on slower devices.</p>
      `,
    },

    "future-of-web-development-trends-2024": {
      title: "The Future of Web Development: Trends for 2024",
      summary:
        "Explore the emerging trends and technologies that are shaping the future of web development in 2024 and beyond.",
      image: "/blog-web-dev-trends-2025.jpeg",
      category: "Insights",
      tags: ["Trends", "Web Development", "Future"],
      date: "2023-12-20",
      readTime: "10 min read",
      content: `
        <p>Web development is constantly evolving. Here are some of the trends to watch in 2024:</p>

        <ul>
          <li><strong>AI-powered development tools</strong> for code generation and automation</li>
          <li><strong>Serverless architecture</strong> adoption growth</li>
          <li><strong>Edge computing</strong> for faster load times</li>
          <li><strong>WebAssembly</strong> expanding use cases</li>
        </ul>

        <p>These trends will shape how developers and companies build the next generation of applications.</p>
      `,
    },

    "building-accessible-web-applications": {
      title: "Building Accessible Web Applications",
      summary:
        "Learn how to create inclusive web experiences that work for everyone, with practical accessibility guidelines and techniques.",
      image: "/blog-accessibility.jpeg",
      category: "Best Practices",
      tags: ["Accessibility", "UX", "Best Practices"],
      date: "2023-12-15",
      readTime: "9 min read",
      content: `
        <p>Accessibility ensures that your applications are usable by everyone, including people with disabilities. Let’s explore best practices.</p>

        <h2>1. Semantic HTML</h2>
        <p>Always use the correct HTML tags for content structure.</p>

        <h2>2. ARIA Attributes</h2>
        <p>Use ARIA roles and attributes to enhance usability for screen readers.</p>

        <h2>3. Color Contrast</h2>
        <p>Maintain sufficient contrast between text and background.</p>

        <p>By prioritizing accessibility, you make your apps more inclusive and compliant with web standards.</p>
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
