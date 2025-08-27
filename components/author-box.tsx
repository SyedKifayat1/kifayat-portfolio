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
                  src="/SyedKifayat.png"
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
                I’m a Computer Engineering undergraduate at Information Technology University, specializing in MERN stack web development with a focus on building responsive, scalable, and user-friendly applications using clean code and modern UI. Skilled in React.js, Next.js, Node.js, Redux, and JavaScript, I combine technical expertise with design principles to craft engaging digital experiences, while also leveraging Shadcn UI, Bootstrap, and CSS for sleek and modern interfaces. My approach emphasizes performance, responsiveness, and seamless user experience, ensuring every project I deliver is both functional and impactful. Beyond coding, I’m passionate about continuous learning, exploring new technologies, and contributing to projects that create long-term value.
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
