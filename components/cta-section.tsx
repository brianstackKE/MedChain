import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, BookOpen } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 border border-primary/20 p-12 md:p-16">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4">
              <Heart className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Support Our Mission</h3>
              <p className="text-foreground/70 text-sm">
                Your donation helps us provide free resources and support to those in need.
              </p>
              <Link href="/donate">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Donate Now
                </Button>
              </Link>
            </div>

            <div className="text-center space-y-4">
              <Users className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Join Our Community</h3>
              <p className="text-foreground/70 text-sm">
                Connect with thousands of people seeking support and understanding.
              </p>
              <Link href="/community">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Explore Community
                </Button>
              </Link>
            </div>

            <div className="text-center space-y-4">
              <BookOpen className="w-12 h-12 text-primary mx-auto" />
              <h3 className="text-xl font-semibold">Learn & Grow</h3>
              <p className="text-foreground/70 text-sm">
                Access comprehensive educational resources about mental health.
              </p>
              <Link href="/education">
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Explore Resources
                </Button>
              </Link>
            </div>
          </div>

          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Ready to Make a Difference?</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Whether you donate, volunteer, or simply share our mission with others, every action helps us build a more
              compassionate world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/donate">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Donate Today
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button size="lg" variant="outline">
                  Volunteer With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
