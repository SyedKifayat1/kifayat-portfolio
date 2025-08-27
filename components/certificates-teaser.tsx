"use client"

import { Button } from "@/components/ui/button"
import { Award, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const featuredCertificates = [
  {
    title: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-SAP-2023-001",
    logo: "/aws-certification-badge.png",
  },
  {
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023",
    credentialId: "GCP-PD-2023-002",
    logo: "/google-cloud-certification-badge.png",
  },
  {
    title: "Meta Frontend Developer Professional",
    issuer: "Meta",
    date: "2022",
    credentialId: "META-FE-2022-003",
    logo: "/meta-certification-badge.png",
  },
]

export function CertificatesTeaser() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Award className="h-8 w-8 text-primary" />
          </div>

          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
            Professional <span className="text-primary">Certifications</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Industry-recognized certifications that validate my expertise in modern web technologies and cloud
            platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {featuredCertificates.map((cert, index) => (
            <div
              key={index}
              className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 text-center transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 glow-effect group"
            >
              <div className="mb-4">
                <Image
                  src={cert.logo || "/placeholder.svg"}
                  alt={`${cert.title} badge`}
                  width={80}
                  height={80}
                  className="mx-auto group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{cert.title}</h3>

              <p className="text-primary font-medium mb-2">{cert.issuer}</p>

              <div className="text-sm text-muted-foreground mb-3">
                <p>Issued: {cert.date}</p>
                <p className="font-mono text-xs">ID: {cert.credentialId}</p>
              </div>

              <Button variant="outline" size="sm" className="group/btn bg-transparent">
                Verify
                <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="glow-effect group">
            <Link href="/certifications">
              View All Certifications
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
