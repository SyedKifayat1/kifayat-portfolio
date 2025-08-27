"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Download, Calendar, Shield, X } from "lucide-react"
import Image from "next/image"

const certifications = [
  {
    id: 1,
    title: "AWS Solutions Architect Professional",
    issuer: "Amazon Web Services",
    date: "2023-11-15",
    expiryDate: "2026-11-15",
    credentialId: "AWS-SAP-2023-001234",
    badge: "/aws-certification-badge.png",
    description:
      "Advanced certification covering complex AWS architectures, security, and cost optimization strategies.",
    skills: ["Cloud Architecture", "Security", "Cost Optimization", "High Availability"],
    verifyUrl: "https://aws.amazon.com/verification",
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "2023-09-20",
    expiryDate: "2025-09-20",
    credentialId: "GCP-PD-2023-005678",
    badge: "/google-cloud-certification-badge.png",
    description: "Professional-level certification for developing scalable applications on Google Cloud Platform.",
    skills: ["GCP Services", "Application Development", "DevOps", "Monitoring"],
    verifyUrl: "https://cloud.google.com/certification/verification",
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "Meta Frontend Developer Professional",
    issuer: "Meta",
    date: "2023-07-10",
    expiryDate: "2025-07-10",
    credentialId: "META-FE-2023-009012",
    badge: "/meta-certification-badge.png",
    description: "Comprehensive certification covering React, JavaScript, and modern frontend development practices.",
    skills: ["React", "JavaScript", "HTML/CSS", "Version Control"],
    verifyUrl: "https://www.credly.com/badges",
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Microsoft Azure Developer Associate",
    issuer: "Microsoft",
    date: "2023-05-15",
    expiryDate: "2025-05-15",
    credentialId: "MS-AZ-204-2023-003456",
    badge: "/azure-certification-badge.png",
    description: "Associate-level certification for developing cloud solutions on Microsoft Azure platform.",
    skills: ["Azure Services", "API Development", "Security", "Monitoring"],
    verifyUrl: "https://docs.microsoft.com/en-us/learn/certifications/",
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2023-03-22",
    expiryDate: "2026-03-22",
    credentialId: "CKA-2023-007890",
    badge: "/kubernetes-certification-badge.png",
    description: "Hands-on certification demonstrating skills in Kubernetes cluster administration and management.",
    skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Troubleshooting"],
    verifyUrl: "https://www.cncf.io/certification/verify/",
    downloadUrl: "#",
  },
  {
    id: 6,
    title: "MongoDB Certified Developer",
    issuer: "MongoDB Inc.",
    date: "2023-01-18",
    expiryDate: "2025-01-18",
    credentialId: "MDB-DEV-2023-001122",
    badge: "/mongodb-certification-badge.png",
    description: "Professional certification for MongoDB database development and application integration.",
    skills: ["MongoDB", "Database Design", "Aggregation", "Performance Tuning"],
    verifyUrl: "https://university.mongodb.com/verify_certificate",
    downloadUrl: "#",
  },
]

export function CertificationsGrid() {
  const [selectedCert, setSelectedCert] = useState<(typeof certifications)[0] | null>(null)

  const isExpiringSoon = (expiryDate: string) => {
    const expiry = new Date(expiryDate)
    const sixMonthsFromNow = new Date()
    sixMonthsFromNow.setMonth(sixMonthsFromNow.getMonth() + 6)
    return expiry <= sixMonthsFromNow
  }

  return (
    <>
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground mb-4">
              My <span className="text-primary">Certifications</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Click on any certification to view detailed information, verification links, and download options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-card/80 backdrop-blur-sm border border-border rounded-2xl p-6 transform hover:scale-105 hover:-translate-y-2 transition-all duration-300 glow-effect group cursor-pointer"
                onClick={() => setSelectedCert(cert)}
              >
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <Image
                      src={cert.badge || "/placeholder.svg"}
                      alt={`${cert.title} badge`}
                      width={80}
                      height={80}
                      className="mx-auto group-hover:scale-110 transition-transform duration-300"
                    />
                    {isExpiringSoon(cert.expiryDate) && (
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">!</span>
                      </div>
                    )}
                  </div>

                  <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{cert.title}</h3>
                  <p className="text-primary font-medium mb-2">{cert.issuer}</p>

                  <div className="text-sm text-muted-foreground mb-4">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Calendar className="h-3 w-3" />
                      <span>Issued: {new Date(cert.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center justify-center gap-1">
                      <Shield className="h-3 w-3" />
                      <span>Expires: {new Date(cert.expiryDate).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{cert.description}</p>
                </div>

                <div className="flex gap-2">
                  <Button size="sm" className="glow-effect flex-1 group/btn">
                    View Details
                    <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-card border border-border rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <Image
                    src={selectedCert.badge || "/placeholder.svg"}
                    alt={`${selectedCert.title} badge`}
                    width={60}
                    height={60}
                  />
                  <div>
                    <h3 className="font-serif font-bold text-xl text-foreground">{selectedCert.title}</h3>
                    <p className="text-primary font-medium">{selectedCert.issuer}</p>
                  </div>
                </div>
                <Button variant="ghost" size="sm" onClick={() => setSelectedCert(null)} className="glow-effect">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-foreground mb-2">Description</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedCert.description}</p>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Issue Date</h4>
                    <p className="text-muted-foreground">{new Date(selectedCert.date).toLocaleDateString()}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Expiry Date</h4>
                    <p className="text-muted-foreground">{new Date(selectedCert.expiryDate).toLocaleDateString()}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-foreground mb-2">Credential ID</h4>
                  <p className="font-mono text-sm text-muted-foreground bg-muted p-2 rounded">
                    {selectedCert.credentialId}
                  </p>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button asChild className="glow-effect flex-1">
                    <a href={selectedCert.verifyUrl} target="_blank" rel="noopener noreferrer">
                      <Shield className="mr-2 h-4 w-4" />
                      Verify Certificate
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="glow-effect bg-transparent flex-1">
                    <a href={selectedCert.downloadUrl} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
