import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Your Mental Health Matters
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pretty">
                Support Mental Health, <span className="text-primary">Change Lives</span>
              </h1>
              <p className="text-lg text-foreground/70 text-balance">
                Join our mission to raise awareness, provide education, and support mental health. Together, we can
                break stigma and build a healthier community.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
                  Support Our Mission
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/resources">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Learn More
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
              <div>
                <p className="text-2xl font-bold text-primary">50K+</p>
                <p className="text-sm text-foreground/60">Lives Helped</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">1000+</p>
                <p className="text-sm text-foreground/60">Resources</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">24/7</p>
                <p className="text-sm text-foreground/60">Support</p>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="w-full h-96 rounded-2xl overflow-hidden border border-primary/20 shadow-lg">
              <Image
                src="/peaceful-person-meditating-in-nature-with-calming-.jpg"
                alt="Mental wellness and meditation"
                width={500}
                height={384}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
