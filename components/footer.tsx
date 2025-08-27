import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif font-bold text-xl text-primary mb-4">Syed Kifayat</h3>
            <p className="text-muted-foreground mb-4 max-w-md">
              Showcasing projects, skills, and services with clean UI, responsive layouts, and seamless user experiences.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com/SyedKifayat1" className="text-muted-foreground hover:text-primary transition-colors glow-effect">
                <Github className="h-5 w-5" />
              </Link>
              <Link href="https://www.linkedin.com/in/syed-kifayat/" className="text-muted-foreground hover:text-primary transition-colors glow-effect">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="https://x.com/kifayat80027" className="text-muted-foreground hover:text-primary transition-colors glow-effect">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="mailto:syedkifayatdev@gmail.com" className="text-muted-foreground hover:text-primary transition-colors glow-effect">
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Kifayat’s Portfolio. All rights reserved. Designed & Developed with Next.js and Tailwind CSS.

          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
