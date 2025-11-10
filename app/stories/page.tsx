import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Star, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const stories = [
  {
    avatar: "👩‍🦰",
    name: "Sarah Mitchell",
    condition: "Depression",
    story:
      "After years of struggling in silence, I finally sought help. The resources here helped me understand my depression and connect with supportive people. I'm now on a path to recovery and feeling hopeful again.",
    impact: "6 months of recovery",
    year: "2024",
  },
  {
    avatar: "👨",
    name: "James Rodriguez",
    condition: "Anxiety Disorder",
    story:
      "The anxiety management tools and techniques I learned transformed my life. I went from avoiding social situations to confidently engaging with others. Therapy and the community here gave me back my life.",
    impact: "Anxiety reduced 80%",
    year: "2023",
  },
  {
    avatar: "👩‍💼",
    name: "Emma Johnson",
    condition: "PTSD & Trauma",
    story:
      "Recovering from trauma seemed impossible, but with proper support and therapy, I've learned to process my experiences. The peer support group here was invaluable in my healing journey.",
    impact: "Trauma healing in progress",
    year: "2023",
  },
  {
    avatar: "👨‍🎨",
    name: "Marcus Williams",
    condition: "Bipolar Disorder",
    story:
      "Managing bipolar disorder is challenging, but with medication, therapy, and community support, I've found stability. The educational resources here helped me understand my condition and accept my diagnosis.",
    impact: "Stable for 2 years",
    year: "2024",
  },
]

export default function StoriesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
        {/* Header */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Stories of Hope & Recovery</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Real people sharing their mental health journeys and how they found recovery
            </p>
          </div>
        </section>

        {/* Stories */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {stories.map((story, idx) => (
              <div
                key={idx}
                className="p-8 md:p-12 bg-background rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
              >
                <Quote className="w-8 h-8 text-primary/50 mb-6" />

                <p className="text-lg leading-relaxed text-foreground/80 mb-8 italic">"{story.story}"</p>

                <div className="border-t border-border pt-6">
                  <div className="flex items-center gap-4">
                    <div className="text-5xl">{story.avatar}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-foreground">{story.name}</h3>
                      <p className="text-sm text-primary font-semibold">{story.condition}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary">{story.impact}</p>
                      <p className="text-sm text-foreground/60">{story.year}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Share Story CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5 border-t border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">Have Your Own Story?</h2>
            <p className="text-foreground/70">
              Share your journey and inspire others on their path to recovery. Your story could be the lifeline someone
              needs.
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Share Your Story
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
