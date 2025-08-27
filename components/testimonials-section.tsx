// "use client"

// import { motion } from "framer-motion"
// import { Star, Quote } from "lucide-react"
// import Image from "next/image"

// const testimonials = [
//   {
//     name: "Muhammad Zunnurain Hussain",
//     role: ` Cybersecurity Strategist | Multi-Cloud Architect | AI & GenAI Leader | IEEE Senior Member | Global Tech Advisor | Educator & Keynote Speaker`,
//     image: "/sirpic.jpeg",
//     rating: 5,
//     content:
//       ` I would like to extend my heartfelt thanks to Syed Kifayat Ur Rahman, for designing a professional portfolio website for me.
//  Kifayat’s dedication, creativity, and web development skills truly reflect his passion for technology.
// I highly recommend connecting with him — his work demonstrates strong potential for creating impactful digital presences.
// Thank you once again, Syed, for your efforts and professionalism.`, 

//   },
//   {
//     name: "Michael Chen",
//     role: "Product Manager, InnovateCorp",
//     image: "/testimonial-michael.png",
//     rating: 5,
//     content:
//       "Outstanding technical expertise and attention to detail. The full-stack application was delivered on time and works flawlessly. Highly recommended!",
//   },
//   {
//     name: "Emily Rodriguez",
//     role: "Marketing Director, GrowthLab",
//     image: "/testimonial-emily.png",
//     rating: 5,
//     content:
//       "Incredible design skills and user experience focus. Our new platform has received amazing feedback from users. A true professional to work with.",
//   },
// ]

// export function TestimonialsSection() {
//   return (
//     <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
//       <div className="container mx-auto px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
//             Client Testimonials
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">What my clients say about working with me</p>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <motion.div
//               key={testimonial.name}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1, duration: 0.6 }}
//               viewport={{ once: true }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
//               <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all duration-300 h-full">
//                 <Quote className="w-8 h-8 text-primary/40 mb-4" />

//                 <p className="text-muted-foreground leading-relaxed mb-6">"{testimonial.content}"</p>

//                 <div className="flex items-center gap-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
//                   ))}
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <div className="relative w-12 h-12 rounded-full overflow-hidden">
//                     <Image
//                       src={testimonial.image || "/placeholder.svg"}
//                       alt={testimonial.name}
//                       fill
//                       className="object-cover"
//                     />
//                   </div>
//                   <div>
//                     <h4 className="font-semibold">{testimonial.name}</h4>
//                     <p className="text-sm text-muted-foreground">{testimonial.role}</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }

// export default TestimonialsSection


"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Autoplay, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { useEffect } from "react"

const testimonials = [
  {
    name: "Muhammad Zunnurain Hussain",
    role: `Cybersecurity Strategist | Multi-Cloud Architect | AI & GenAI Leader | IEEE Senior Member | Global Tech Advisor | Educator & Keynote Speaker`,
    image: "/sirpic.jpeg",
    rating: 5,
    content: `Kifayat’s dedication, creativity, and web development skills truly reflect his passion for technology. 
I highly recommend connecting with him — his work demonstrates strong potential for creating impactful digital presences.`,
  },
  {
    name: "Qalab-e- Abbas",
    role: `Incharge of Academics & Faculty Development▪️ Educationist ▪️ Certified Teacher & Trainer ▪️ Certified Entreprenuerial Coach`,
    image: "/qalab-e-abbas.jpeg",
    rating: 5,
    content:
      `Syed Kifayat Ur Rahman creativity, professionalism, and attention to detail made me proud as a teacher. I highly recommend him to anyone seeking a reliable web developer.`,
  },
  {
    name: "Muhammad Saad Akhtar",
    role: "Computer Engineer | Computer Vision | Machine Learning | Artificial Intelligence | Data Science | Python Development",
    image: "/saadimg.jpeg",
    rating: 5,
    content:
      `Syed Kifayat is a highly motivated person who is also true to his word. He delivered everything I asked for even before the deadline. I am very satisfied. Totally Recommended...`,
  },
  
]

export function TestimonialsSection() {


  useEffect(() => {
    const updateHeights = () => {
      const slides = document.querySelectorAll(".testimonial-slide")
      let maxHeight = 0
      slides.forEach((slide) => {
        (slide as HTMLElement).style.height = "auto"
        maxHeight = Math.max(maxHeight, (slide as HTMLElement).offsetHeight)
      })
      slides.forEach((slide) => {
        (slide as HTMLElement).style.height = `${maxHeight}px`
      })
    }

    updateHeights()
    window.addEventListener("resize", updateHeights)
    return () => window.removeEventListener("resize", updateHeights)
  }, [])



  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Navigation, Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={testimonial.name} className=" testimonial-slide">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                className="h-full flex flex-col bg-card/80 backdrop-blur-md border border-primary/20 rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 w-full"
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary/40 mx-auto mb-4" />

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-6 italic text-base flex-1">
                  {testimonial.content}
                </p>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Author (sticks to bottom) */}
                <div className="flex flex-col items-center mt-auto">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/30 mb-3">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default TestimonialsSection
