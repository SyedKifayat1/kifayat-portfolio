"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, MessageCircle, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* 3D Globe visualization placeholder */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary rounded-full animate-spin-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-accent rounded-full animate-spin-reverse"></div>
      </div>

      <div className="max-w-lg mx-auto relative z-10">
        <div className="mb-8">
          <h2 className="font-serif font-bold text-3xl text-foreground mb-4">Contact Information</h2>
          <p className="text-muted-foreground">Multiple ways to reach me. Choose what works best for you.</p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl glow-effect hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Email</h3>
              <p className="text-muted-foreground">hello@portfolio.dev</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl glow-effect hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
              <Phone className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Phone</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl glow-effect hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 className="font-medium text-foreground">Location</h3>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mb-8">
          <Button asChild className="w-full glow-effect group bg-green-600 hover:bg-green-700">
            <Link href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" />
              Chat on WhatsApp
            </Link>
          </Button>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="font-serif font-semibold text-lg text-foreground mb-4">Follow Me</h3>
          <div className="flex gap-4">
            <Link
              href="#"
              className="flex items-center justify-center w-12 h-12 bg-card/50 backdrop-blur-sm border border-border rounded-xl glow-effect hover:scale-110 hover:border-primary transition-all duration-300"
            >
              <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-12 h-12 bg-card/50 backdrop-blur-sm border border-border rounded-xl glow-effect hover:scale-110 hover:border-primary transition-all duration-300"
            >
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link
              href="#"
              className="flex items-center justify-center w-12 h-12 bg-card/50 backdrop-blur-sm border border-border rounded-xl glow-effect hover:scale-110 hover:border-primary transition-all duration-300"
            >
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>

        {/* Response Time */}
        <div className="mt-8 p-4 bg-primary/5 border border-primary/20 rounded-xl">
          <h4 className="font-medium text-foreground mb-2">Response Time</h4>
          <p className="text-sm text-muted-foreground">
            I typically respond to emails within 24 hours during business days. For urgent matters, please use WhatsApp
            or phone.
          </p>
        </div>
      </div>
    </section>
  )
}
