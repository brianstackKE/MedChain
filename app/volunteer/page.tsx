"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Heart, Users, Briefcase, Award, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const opportunities = [
  {
    title: "Community Outreach",
    description: "Help spread awareness and reach people in underserved communities.",
    time: "10-15 hours/week",
    skills: "Communication",
    color: "from-blue-500/10 to-blue-500/5",
  },
  {
    title: "Content Creator",
    description: "Write, design, or create videos about mental health topics.",
    time: "5-10 hours/week",
    skills: "Creative Skills",
    color: "from-purple-500/10 to-purple-500/5",
  },
  {
    title: "Peer Support Specialist",
    description: "Provide emotional support and guidance in our community forums.",
    time: "8-12 hours/week",
    skills: "Empathy & Listening",
    color: "from-pink-500/10 to-pink-500/5",
  },
  {
    title: "Event Coordinator",
    description: "Help organize and manage mental health awareness events.",
    time: "15-20 hours/week",
    skills: "Organization",
    color: "from-green-500/10 to-green-500/5",
  },
  {
    title: "Data & Research",
    description: "Support our research initiatives and data analysis projects.",
    time: "10-15 hours/week",
    skills: "Analytical Skills",
    color: "from-orange-500/10 to-orange-500/5",
  },
  {
    title: "Mentorship Program",
    description: "Mentor individuals through their mental health journey.",
    time: "Flexible",
    skills: "Leadership",
    color: "from-indigo-500/10 to-indigo-500/5",
  },
]

export default function VolunteerPage() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
        {/* Header */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Join Our Volunteer Community</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Make a real impact by dedicating your time and skills to mental health advocacy
            </p>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Volunteer With Us?</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: Heart,
                  title: "Make a Difference",
                  description: "Help transform lives through mental health support",
                },
                {
                  icon: Users,
                  title: "Build Community",
                  description: "Connect with like-minded, passionate individuals",
                },
                { icon: Award, title: "Grow Skills", description: "Develop new skills and gain valuable experience" },
                { icon: Briefcase, title: "Career Growth", description: "Build your professional network and resume" },
              ].map((benefit) => {
                const Icon = benefit.icon
                return (
                  <div key={benefit.title} className="text-center p-6 bg-background rounded-lg border border-border">
                    <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-foreground/60">{benefit.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Opportunities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Volunteer Opportunities</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {opportunities.map((opp) => (
                <div
                  key={opp.title}
                  className={`p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 bg-gradient-to-br ${opp.color} cursor-pointer group`}
                >
                  <h3 className="text-lg font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                    {opp.title}
                  </h3>
                  <p className="text-foreground/70 text-sm mb-6 leading-relaxed">{opp.description}</p>
                  <div className="space-y-2 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span className="text-foreground/70">Time: {opp.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span className="text-foreground/70">Skills: {opp.skills}</span>
                    </div>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group-hover:border-primary group-hover:text-primary bg-transparent"
                  >
                    Learn More
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Signup Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5 border-t border-border">
          <div className="max-w-2xl mx-auto">
            {!showForm ? (
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
                <p className="text-lg text-foreground/70">
                  Tell us about your interests and we'll match you with the perfect opportunity
                </p>
                <Button
                  size="lg"
                  onClick={() => setShowForm(true)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Start Your Application
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            ) : (
              <div className="bg-background rounded-xl border border-border p-8 space-y-6">
                <h2 className="text-2xl font-bold">Volunteer Application</h2>

                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
                  />
                  <select className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary">
                    <option>Select Your Interest</option>
                    <option>Community Outreach</option>
                    <option>Content Creator</option>
                    <option>Peer Support</option>
                    <option>Event Coordinator</option>
                    <option>Data & Research</option>
                    <option>Mentorship</option>
                  </select>
                  <textarea
                    placeholder="Tell us why you want to volunteer"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary resize-none"
                  />

                  <div className="space-y-2">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-border" />
                      <span className="text-sm text-foreground/70">I agree to the volunteer code of conduct</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 rounded border-border" />
                      <span className="text-sm text-foreground/70">Send me updates about volunteer opportunities</span>
                    </label>
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={() => setShowForm(false)} variant="outline" className="flex-1">
                      Back
                    </Button>
                    <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Submit Application
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
