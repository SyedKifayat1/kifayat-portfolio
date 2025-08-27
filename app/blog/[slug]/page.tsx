import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogPost } from "@/components/blog-post"
import { AuthorBox } from "@/components/author-box"
import { RelatedPosts } from "@/components/related-posts"
import { SocialShare } from "@/components/social-share"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="min-h-screen">
      <Navigation />
      <BlogPost slug={params.slug} />
      <SocialShare />
      <AuthorBox />
      <RelatedPosts />
      <Footer />
    </div>
  )
}
