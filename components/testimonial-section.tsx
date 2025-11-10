import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Mental Health Advocate",
    quote:
      "This platform has been transformative. The resources and community support helped me understand my anxiety better.",
    image: "/professional-woman-mental-health-advocate-portrait.jpg",
  },
  {
    name: "Michael Chen",
    role: "Recovered from Depression",
    quote:
      "Finding the right support here changed everything. I am grateful for this community and its compassionate approach.",
    image: "/man-smiling-healthy-recovered-portrait.jpg",
  },
  {
    name: "Emma Wilson",
    role: "Family Member",
    quote:
      "I learned so much about supporting my loved one. The education materials are incredibly helpful and accessible.",
    image: "/placeholder.svg?height=64&width=64",
  },
]

export default function TestimonialSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Stories That Inspire</h2>
          <p className="text-lg text-foreground/70">Hear from people whose lives have been transformed</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-8 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/80 mb-6 italic">"{testimonial.quote}"</p>

              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-foreground/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
