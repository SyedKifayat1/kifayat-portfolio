"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function AuthorBox() {
  return (
    <section className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-8 glow-effect">
          <div className="flex flex-col sm:flex-row gap-6 items-start">
            <div className="relative">
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-primary/20">
                <Image
                  src="/professional-headshot.png"
                  alt="Author"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-serif font-bold text-xl text-foreground mb-2">About the Author</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a passionate full-stack developer with over 5 years of experience building modern web applications.
                I love sharing knowledge about React, Next.js, and the latest web technologies through articles and
                tutorials.
              </p>

              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-muted hover:bg-primary/10 rounded-full transition-colors glow-effect"
                >
                  <Github className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-muted hover:bg-primary/10 rounded-full transition-colors glow-effect"
                >
                  <Twitter className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
                <Link
                  href="#"
                  className="flex items-center justify-center w-10 h-10 bg-muted hover:bg-primary/10 rounded-full transition-colors glow-effect"
                >
                  <Linkedin className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </div>
            </div>

            <div>
              <Button asChild variant="outline" className="glow-effect bg-transparent">
                <Link href="/about">View Profile</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
