"use client"

import { Button } from "@/components/ui/button"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Image from "next/image"
import { useRouter } from "next/navigation"

const conditions = [
  {
    image: "/person-with-depression-feeling-sad-and-alone-seeki.jpg",
    title: "Depression",
    description: "Understanding persistent sadness and loss of interest in activities.",
    symptoms: ["Persistent sadness", "Loss of interest", "Sleep disturbance", "Fatigue"],
    treatments: ["Therapy", "Medication", "Lifestyle changes", "Support groups"],
  },
  {
    image: "/person-with-anxiety-nervous-worried-expression-str.jpg",
    title: "Anxiety Disorders",
    description: "Exploring excessive worry and its impact on daily life.",
    symptoms: ["Excessive worry", "Panic attacks", "Physical tension", "Avoidance"],
    treatments: ["Therapy", "Meditation", "Exercise", "Professional support"],
  },
  {
    image: "/person-healing-from-trauma-with-support-and-resili.jpg",
    title: "PTSD & Trauma",
    description: "Healing from traumatic experiences and building resilience.",
    symptoms: ["Flashbacks", "Avoidance", "Hypervigilance", "Sleep issues"],
    treatments: ["EMDR therapy", "CBT", "Support groups", "Counseling"],
  },
  {
    image: "/person-with-mood-swings-bipolar-disorder-managing-.jpg",
    title: "Bipolar Disorder",
    description: "Understanding mood episodes and management strategies.",
    symptoms: ["Mood swings", "High energy", "Impulsivity", "Sleep changes"],
    treatments: ["Medication", "Therapy", "Lifestyle management", "Support"],
  },
  {
    image: "/person-overcoming-social-anxiety-building-confiden.jpg",
    title: "Social Anxiety",
    description: "Overcoming fear and building confidence in social situations.",
    symptoms: ["Social fear", "Embarrassment concern", "Avoidance", "Physical symptoms"],
    treatments: ["Exposure therapy", "CBT", "Medication", "Support groups"],
  },
  {
    image: "/person-practicing-stress-management-meditation-rel.jpg",
    title: "Stress Management",
    description: "Practical strategies for managing daily stress effectively.",
    symptoms: ["Overwhelm", "Irritability", "Poor focus", "Physical tension"],
    treatments: ["Mindfulness", "Exercise", "Time management", "Relaxation techniques"],
  },
]

export default function EducationPage() {
  const router = useRouter()

  const handleExploreGuides = () => {
    router.push("/resources#self-help")
  }

  const handleFindHelp = () => {
    router.push("/resources#professionals")
  }

  const handleCrisisHelp = () => {
    router.push("/resources#crisis")
  }

  const handleAccessTools = () => {
    router.push("/resources#tools")
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
        <div
          className="fixed inset-0 -z-10 opacity-10"
          style={{
            backgroundImage: "url('/education-hub-background-with-books-and-students.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Header */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Mental Health Education Hub</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive information about mental health conditions, signs, symptoms, and evidence-based treatments
            </p>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {conditions.map((condition) => (
                <div
                  key={condition.title}
                  className="group overflow-hidden bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <Image
                      src={condition.image || "/placeholder.svg"}
                      alt={condition.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{condition.title}</h3>
                      <p className="text-foreground/70 text-sm">{condition.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Common Symptoms:</h4>
                      <ul className="space-y-1">
                        {condition.symptoms.map((symptom) => (
                          <li key={symptom} className="text-xs text-foreground/60 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                            {symptom}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-sm text-foreground mb-2">Treatment Options:</h4>
                      <ul className="space-y-1">
                        {condition.treatments.map((treatment) => (
                          <li key={treatment} className="text-xs text-foreground/60 flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60"></span>
                            {treatment}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:border-primary group-hover:text-primary transition-colors bg-transparent"
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Additional Resources</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-background rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">Self-Help Guides</h3>
                <p className="text-foreground/70 mb-4">
                  Evidence-based guides for managing symptoms and improving mental wellness.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  onClick={handleExploreGuides}
                >
                  Explore Guides
                </Button>
              </div>

              <div className="p-8 bg-background rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">Professional Referrals</h3>
                <p className="text-foreground/70 mb-4">Find qualified mental health professionals in your area.</p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  onClick={handleFindHelp}
                >
                  Find Help
                </Button>
              </div>

              <div className="p-8 bg-background rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">Crisis Resources</h3>
                <p className="text-foreground/70 mb-4">Immediate support and crisis hotlines available 24/7.</p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  onClick={handleCrisisHelp}
                >
                  Crisis Help
                </Button>
              </div>

              <div className="p-8 bg-background rounded-xl border border-border">
                <h3 className="text-xl font-semibold mb-4">Wellness Tools</h3>
                <p className="text-foreground/70 mb-4">
                  Interactive tools for tracking mood, meditation, and stress relief.
                </p>
                <Button
                  variant="outline"
                  className="w-full bg-transparent hover:border-primary hover:text-primary transition-colors cursor-pointer"
                  onClick={handleAccessTools}
                >
                  Access Tools
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
