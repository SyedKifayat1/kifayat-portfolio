"use client"

import { Button } from "@/components/ui/button"
import { Download, MapPin, Calendar, Mail } from "lucide-react"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Section */}
          <div className="relative">
            <div className="relative w-80 h-80 mx-auto lg:mx-0">
              {/* 3D Avatar placeholder with animated border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-background to-muted overflow-hidden">
                <Image
                  src="/SyedKifayat.png"
                  alt="Profile"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating elements around avatar */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full animate-bounce-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-accent/20 rounded-full animate-float"></div>
              <div className="absolute top-1/2 -left-8 w-6 h-6 bg-primary/30 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif font-bold text-4xl sm:text-5xl text-foreground mb-4">
                Syed <span className="text-primary">Kifayat Ur Rahman</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                MERN Stack Developer & Computer Engineering Student at ITU. I build responsive, user-friendly, and
                high-performance web applications with a focus on client satisfaction and clean code.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>Lahore, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Calendar className="h-5 w-5 text-primary" />
                <span>BS Computer Engineering (2022 - 2026)</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>kifayatkhanofficial@gmail.com</span>
              </div>

            </div>

            <div className="pt-4">
              <a
                href="/SyedKifayatCV.pdf"
                download="SyedKifayatCV.pdf"
              >
                <Button className="glow-effect group transform hover:scale-105 transition-all duration-300">
                  <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  Download Resume
                </Button>
              </a>
            </div>

          </div>
        </div>

        {/* Extended Bio */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 transform hover:scale-[1.02] transition-all duration-300">
            <h2 className="font-serif font-semibold text-2xl text-foreground mb-6">My Journey</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed">
              <p className="mb-4">
                I’m a Computer Engineering undergraduate at Information Technology University, specializing in MERN
                stack web development. My focus is on building responsive, scalable, and user-friendly applications
                with clean code and modern UI.
              </p>
              <p className="mb-4">
                Skilled in React.js, Next.js, Node.js, Redux, and JavaScript, I combine technical expertise with
                design principles to craft engaging digital experiences. I’m also familiar with Shadcn UI, Bootstrap,
                and CSS for sleek and modern interfaces.
              </p>
              <p className="mb-4">
                My approach emphasizes performance, responsiveness, and seamless user experience — ensuring every project
                I deliver is both functional and impactful.
              </p>
              <p>
                Beyond coding, I’m passionate about continuous learning, exploring new technologies, and contributing
                to impactful projects. My ultimate goal is to create solutions that not only meet client needs but also
                deliver long-term value.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
