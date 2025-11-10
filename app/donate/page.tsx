"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Heart, Users, TrendingUp, Check, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import Checkout from "@/components/checkout"
import DonationForm from "@/components/donation-form"

export default function DonatePage() {
  const [selectedAmount, setSelectedAmount] = useState<string | null>(null)
  const [customAmount, setCustomAmount] = useState("")
  const [showCheckout, setShowCheckout] = useState(false)
  const [donationType, setDonationType] = useState<"one-time" | "monthly">("one-time")
  const [donorEmail, setDonorEmail] = useState("")

  const presetAmounts = [
    { amount: 25, label: "$25", productId: "donation-25" },
    { amount: 50, label: "$50", productId: "donation-50" },
    { amount: 100, label: "$100", productId: "donation-100" },
    { amount: 250, label: "$250", productId: "donation-250" },
    { amount: 500, label: "$500", productId: "donation-500" },
  ]

  const impactPoints = [
    {
      icon: BookOpen,
      title: "Educational Resources",
      description: "Funds mental health education materials and training programs",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Supports group therapy, peer support programs, and community events",
    },
    {
      icon: Heart,
      title: "Crisis Assistance",
      description: "Provides emergency mental health support and hotline services",
    },
    {
      icon: TrendingUp,
      title: "Research & Development",
      description: "Funds innovative mental health treatments and research",
    },
  ]

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-medium">
              Make a Difference
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Your Donation Saves Lives</h1>
            <p className="text-lg text-foreground/70 text-balance">
              100% of donations go directly to mental health support, education, and community programs. Tax-deductible.
              Secure payments via PayPal or credit/debit card.
            </p>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Your Impact</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {impactPoints.map((point) => {
                const Icon = point.icon
                return (
                  <div key={point.title} className="p-6 bg-background rounded-xl border border-border text-center">
                    <Icon className="w-10 h-10 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">{point.title}</h3>
                    <p className="text-sm text-foreground/60">{point.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-background rounded-2xl border border-border p-8 md:p-12">
              {!showCheckout ? (
                <DonationForm
                  presetAmounts={presetAmounts}
                  selectedAmount={selectedAmount}
                  customAmount={customAmount}
                  setSelectedAmount={setSelectedAmount}
                  setCustomAmount={setCustomAmount}
                  donationType={donationType}
                  setDonationType={setDonationType}
                  onProceed={() => setShowCheckout(true)}
                />
              ) : (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Complete Your Donation</h3>
                    <p className="text-foreground/70">Secure payment powered by Stripe</p>
                  </div>

                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground/70">
                      <span className="font-semibold text-foreground">Donation Amount:</span> $
                      {selectedAmount || customAmount}
                    </p>
                  </div>

                  {selectedAmount && (
                    <Checkout
                      productId={
                        presetAmounts.find((a) => a.label === `$${selectedAmount}`)?.productId || "donation-25"
                      }
                      donorEmail={donorEmail}
                    />
                  )}

                  <Button variant="outline" className="w-full bg-transparent" onClick={() => setShowCheckout(false)}>
                    Back to Options
                  </Button>
                </div>
              )}
            </div>

            {/* Additional Info */}
            <div className="mt-12 grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-background rounded-xl border border-border">
                <Check className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Secure & Safe</h3>
                <p className="text-sm text-foreground/60">
                  All transactions are encrypted and secure with industry-standard protection.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border">
                <Check className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Tax Deductible</h3>
                <p className="text-sm text-foreground/60">
                  Donations are tax-deductible. You'll receive a receipt for your records.
                </p>
              </div>

              <div className="p-6 bg-background rounded-xl border border-border">
                <Check className="w-6 h-6 text-primary mb-3" />
                <h3 className="font-semibold mb-2">Transparent</h3>
                <p className="text-sm text-foreground/60">
                  See exactly how your donation impacts our programs and communities.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
