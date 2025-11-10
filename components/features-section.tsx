import Image from "next/image"
import Link from "next/link"

const features = [
  {
    image: "/person-reading-a-book-about-mental-health-educatio.jpg",
    title: "Educational Content",
    description: "Learn about mental health conditions, signs, symptoms, and treatment options from experts.",
    href: "/education",
  },
  {
    image: "/inspiring-recovery-journey-success-story-person-sm.jpg",
    title: "Success Stories",
    description: "Be inspired by real stories from people who have overcome mental health challenges.",
    href: "/stories",
  },
  {
    image: "/diverse-community-people-sitting-in-support-circle.jpg",
    title: "Community Support",
    description: "Connect with others, share experiences, and find support in our community forums.",
    href: "/community",
  },
  {
    image: "/person-using-chatbot-on-computer-for-mental-health.jpg",
    title: "AI Mental Health Chat",
    description: "Get guidance and support through our intelligent mental health chatbot available 24/7.",
    href: "/chat",
  },
  {
    image: "/fundraiser-event-with-people-supporting-mental-hea.jpg",
    title: "Events & Fundraisers",
    description: "Join awareness campaigns, webinars, and fundraising events to support our mission.",
    href: "/events",
  },
  {
    image: "/volunteers-helping-people-in-mental-health-communi.jpg",
    title: "Volunteer Opportunities",
    description: "Make a difference by volunteering your time and skills to support mental health advocacy.",
    href: "/volunteer",
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Comprehensive Mental Health Support</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Everything you need to understand, manage, and support mental health
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="group overflow-hidden bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative h-40 overflow-hidden bg-muted">
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.title}
                  width={300}
                  height={240}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-foreground/60">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
