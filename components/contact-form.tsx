// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Label } from "@/components/ui/label"
// import { Send, CheckCircle } from "lucide-react"
// import emailjs from '@emailjs/browser';


// export function ContactForm() {
//   const [isSubmitted, setIsSubmitted] = useState(false)
//   const [isLoading, setIsLoading] = useState(false)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsLoading(true)

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     setIsLoading(false)
//     setIsSubmitted(true)
//   }

//   if (isSubmitted) {
//     return (
//       <section className="py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[600px]">
//         <div className="text-center">
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
//             <CheckCircle className="h-10 w-10 text-green-600" />
//           </div>
//           <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Message Sent!</h2>
//           <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you within 24 hours.</p>
//         </div>
//       </section>
//     )
//   }

//   return (
//     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
//       <div className="max-w-lg mx-auto">
//         <div className="mb-8">
//           <h2 className="font-serif font-bold text-3xl text-foreground mb-4">Send a Message</h2>
//           <p className="text-muted-foreground">Fill out the form below and I'll get back to you as soon as possible.</p>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="firstName">First Name</Label>
//               <Input
//                 id="firstName"
//                 placeholder="John"
//                 required
//                 className="glow-effect focus:border-primary transition-colors"
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="lastName">Last Name</Label>
//               <Input
//                 id="lastName"
//                 placeholder="Doe"
//                 required
//                 className="glow-effect focus:border-primary transition-colors"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="john@example.com"
//               required
//               className="glow-effect focus:border-primary transition-colors"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="subject">Subject</Label>
//             <Input
//               id="subject"
//               placeholder="Project Inquiry"
//               required
//               className="glow-effect focus:border-primary transition-colors"
//             />
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="message">Message</Label>
//             <Textarea
//               id="message"
//               placeholder="Tell me about your project..."
//               rows={6}
//               required
//               className="glow-effect focus:border-primary transition-colors resize-none"
//             />
//           </div>

//           <Button
//             type="submit"
//             disabled={isLoading}
//             className="w-full glow-effect group transform hover:scale-105 transition-all duration-300"
//           >
//             {isLoading ? (
//               <>
//                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
//                 Sending...
//               </>
//             ) : (
//               <>
//                 Send Message
//                 <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
//               </>
//             )}
//           </Button>
//         </form>
//       </div>
//     </section>
//   )
// }


"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle } from "lucide-react"
import emailjs from "@emailjs/browser"

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    if (!formRef.current) return

    try {
      await emailjs.sendForm(
        "service_mck49dv",   // replace with your EmailJS service ID
        "template_h96vrkv",  // replace with your EmailJS template ID
        formRef.current,
        "g1jqgcwa3ecleK9_m"    // replace with your EmailJS public key
      )
      setIsSubmitted(true)
    } catch (error) {
      console.error("EmailJS Error:", error)
      alert("Oops! Something went wrong. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  if (isSubmitted) {
    return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-[600px]">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>
          <h2 className="font-serif font-bold text-2xl text-foreground mb-4">Message Sent!</h2>
          <p className="text-muted-foreground">
            Thank you for reaching out. I'll get back to you within 24 hours.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-lg mx-auto">
        <div className="mb-8">
          <h2 className="font-serif font-bold text-3xl text-foreground mb-4">Send a Message</h2>
          <p className="text-muted-foreground">
            Fill out the form below and I'll get back to you as soon as possible.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input id="firstName" name="firstName" placeholder="John" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input id="lastName" name="lastName" placeholder="Doe" required />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="john@example.com" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject" name="subject" placeholder="Project Inquiry" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" name="message" rows={6} placeholder="Tell me about your project..." required />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full glow-effect group transform hover:scale-105 transition-all duration-300"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
