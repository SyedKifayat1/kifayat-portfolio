"use client"

import { Button } from "@/components/ui/button"
import { Share2, Twitter, Linkedin, Facebook, LinkIcon } from "lucide-react"
import { useState } from "react"

export function SocialShare() {
  const [copied, setCopied] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy link:", err)
    }
  }

  const shareUrl = typeof window !== "undefined" ? window.location.href : ""
  const shareText = "Check out this article!"

  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Share2 className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground">Share this article</span>
            </div>

            <div className="flex items-center gap-3">
              <Button
                size="sm"
                variant="outline"
                className="glow-effect bg-transparent"
                onClick={() =>
                  window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`, "_blank")
                }
              >
                <Twitter className="h-4 w-4" />
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="glow-effect bg-transparent"
                onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, "_blank")}
              >
                <Linkedin className="h-4 w-4" />
              </Button>

              <Button
                size="sm"
                variant="outline"
                className="glow-effect bg-transparent"
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, "_blank")}
              >
                <Facebook className="h-4 w-4" />
              </Button>

              <Button size="sm" variant="outline" className="glow-effect bg-transparent" onClick={handleCopyLink}>
                <LinkIcon className="h-4 w-4" />
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
