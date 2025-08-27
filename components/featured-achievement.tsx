"use client"

import { Button } from "@/components/ui/button"
import { Trophy, Calendar, Users, ExternalLink } from "lucide-react"
import Image from "next/image"

export function FeaturedAchievement() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Featured <span className="text-primary">Achievement</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My most significant recognition in the field of web development.
          </p>
        </div>

        <div className="bg-card/80 backdrop-blur-sm border border-border rounded-3xl overflow-hidden transform hover:scale-[1.02] transition-all duration-500 glow-effect">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Achievement Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <Image
                src="/featured-achievement.png"
                alt="Featured Achievement"
                width={600}
                height={400}
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

              {/* Floating trophy icon */}
              <div className="absolute top-6 right-6 w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-bounce-slow">
                <Trophy className="h-8 w-8 text-primary" />
              </div>
            </div>

            {/* Achievement Details */}
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>2023</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Web Development Awards</span>
                  </div>
                </div>

                <h3 className="font-serif font-bold text-2xl lg:text-3xl text-foreground mb-4">
                  Developer of the Year 2023
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  Recognized as Developer of the Year by the International Web Development Association for outstanding
                  contributions to the field, innovative project implementations, and community leadership. This award
                  acknowledges excellence in technical skills, creativity, and positive impact on the developer
                  community.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Innovation", "Leadership", "Technical Excellence", "Community Impact"].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="glow-effect group flex-1">
                  <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  View Certificate
                </Button>
                <Button variant="outline" className="glow-effect bg-transparent group flex-1">
                  <Trophy className="mr-2 h-4 w-4 transition-transform group-hover:rotate-12" />
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
