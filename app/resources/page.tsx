"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Phone, Globe, BookOpen, Users, AlertCircle, ExternalLink, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const resources = [
  {
    icon: Phone,
    title: "Crisis Hotlines",
    description: "Immediate support when you need it most",
    items: [
      { name: "National Suicide Prevention Lifeline", number: "988", available: "24/7" },
      { name: "Crisis Text Line", number: "Text HOME to 741741", available: "24/7" },
      { name: "NAMI Helpline", number: "1-800-950-6264", available: "M-F, 10am-10pm EST" },
    ],
  },
  {
    icon: Globe,
    title: "Online Resources",
    description: "Self-help tools and information",
    items: [
      { name: "NAMI (National Alliance)", url: "https://www.nami.org", description: "Education and support" },
      { name: "MIND (UK)", url: "https://www.mind.org.uk", description: "Mental health information" },
      { name: "BeyondBlue (Australia)", url: "https://www.beyondblue.org.au", description: "Support services" },
    ],
  },
  {
    icon: BookOpen,
    title: "Self-Help Materials",
    description: "Learn at your own pace",
    items: [
      { name: "Guided Meditations", type: "Audio", url: "https://www.calm.com" },
      { name: "Workbooks & Journals", type: "PDF", url: "https://www.psychologytoday.com" },
      {
        name: "Video Courses",
        type: "Video",
        url: "https://www.youtube.com/results?search_query=mental+health+education",
      },
    ],
  },
  {
    icon: Users,
    title: "Support Groups",
    description: "Connect with others",
    items: [
      { name: "Alcoholics Anonymous", frequency: "Daily meetings", url: "https://www.aa.org" },
      { name: "Narcotics Anonymous", frequency: "Daily meetings", url: "https://www.na.org" },
      { name: "Anxiety and Depression Association", frequency: "Weekly online", url: "https://adaa.org" },
    ],
  },
]

const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text)
}

export default function ResourcesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
        <div
          className="fixed inset-0 -z-10 opacity-10"
          style={{
            backgroundImage: "url('/blog-resources-background-with-writing-and-knowledge.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Header */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Mental Health Resources</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive guide to support, tools, and professional help
            </p>
          </div>
        </section>

        {/* Resources */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto space-y-12">
            {resources.map((category) => {
              const Icon = category.icon
              return (
                <div key={category.title} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Icon className="w-8 h-8 text-primary" />
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                      <p className="text-foreground/70">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-colors flex flex-col h-full"
                      >
                        <div className="flex-grow">
                          <h3 className="font-semibold text-foreground mb-3">{item.name}</h3>
                          {"number" in item && (
                            <>
                              <p className="text-lg font-mono text-primary mb-2">{item.number}</p>
                              <p className="text-sm text-foreground/60 mb-4">{item.available}</p>
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-full gap-2 bg-transparent"
                                onClick={() => copyToClipboard(item.number)}
                              >
                                <Copy className="w-4 h-4" />
                                Copy Number
                              </Button>
                            </>
                          )}
                          {"url" in item && (
                            <>
                              <p className="text-sm text-foreground/60 mb-2">{item.description}</p>
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-auto block">
                                <Button
                                  size="sm"
                                  className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  Visit Website
                                </Button>
                              </a>
                            </>
                          )}
                          {"type" in item && (
                            <>
                              <p className="text-sm text-primary mb-4">{item.type}</p>
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-auto block">
                                <Button
                                  size="sm"
                                  className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  Access Now
                                </Button>
                              </a>
                            </>
                          )}
                          {"frequency" in item && (
                            <>
                              <p className="text-sm text-primary mb-4">{item.frequency}</p>
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-auto block">
                                <Button
                                  size="sm"
                                  className="w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
                                >
                                  <ExternalLink className="w-4 h-4" />
                                  Learn More
                                </Button>
                              </a>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Emergency Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-destructive/10 to-destructive/5 border-t border-destructive/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-foreground">In Crisis?</h2>
                <p className="text-foreground/70 leading-relaxed">
                  If you're having thoughts of suicide or self-harm, please reach out immediately. You're not alone, and
                  help is available.
                </p>
                <div className="grid md:grid-cols-3 gap-4 pt-4">
                  <Link href="tel:988">
                    <Button
                      size="lg"
                      className="w-full bg-destructive text-destructive-foreground hover:bg-destructive/90"
                    >
                      Call 988
                    </Button>
                  </Link>
                  <a href="https://www.sos.noaa.gov/emergency" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="w-full bg-transparent">
                      Emergency Services
                    </Button>
                  </a>
                  <Link href="/chat">
                    <Button size="lg" variant="outline" className="w-full bg-transparent">
                      Chat With Us
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
