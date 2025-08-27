"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const clients = [
  { name: "Google", logo: "/client-google.png" },
  { name: "Microsoft", logo: "/client-microsoft.png" },
  { name: "Amazon", logo: "/client-amazon.png" },
  { name: "Meta", logo: "/client-meta.png" },
  { name: "Netflix", logo: "/client-netflix.png" },
  { name: "Spotify", logo: "/client-spotify.png" },
]

export function ClientLogos() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by Industry Leaders
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center justify-center group"
            >
              <div className="relative w-24 h-12 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
