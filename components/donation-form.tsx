"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Heart } from "lucide-react"
import { useState } from "react"

interface DonationFormProps {
  presetAmounts: { amount: number; label: string; productId: string }[]
  selectedAmount: string | null
  customAmount: string
  setSelectedAmount: (amount: string) => void
  setCustomAmount: (amount: string) => void
  donationType: "one-time" | "monthly"
  setDonationType: (type: "one-time" | "monthly") => void
  onProceed: () => void
}

export default function DonationForm({
  presetAmounts,
  selectedAmount,
  customAmount,
  setSelectedAmount,
  setCustomAmount,
  donationType,
  setDonationType,
  onProceed,
}: DonationFormProps) {
  const [donorEmail, setDonorEmail] = useState("")
  const [donorName, setDonorName] = useState("")
  const [newsletter, setNewsletter] = useState(false)
  const [emailError, setEmailError] = useState("")

  const isAmountValid = selectedAmount || (customAmount && Number.parseInt(customAmount) > 0)
  const isEmailValid = !donorEmail.trim() || donorEmail.includes("@")
  const isValid = isAmountValid && isEmailValid

  const handleProceed = () => {
    if (!isEmailValid) {
      setEmailError("Please enter a valid email address")
      return
    }
    setEmailError("")
    onProceed()
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">Choose Your Donation</h2>
        <p className="text-foreground/70">Your generosity makes a real difference</p>
      </div>

      {/* Donation Type */}
      <div className="space-y-4">
        <label className="text-sm font-semibold text-foreground">Donation Type</label>
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => setDonationType("one-time")}
            className={`p-4 rounded-lg border-2 transition-all ${
              donationType === "one-time" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
            }`}
          >
            <p className="font-semibold">One-Time Donation</p>
            <p className="text-sm text-foreground/60">Support our cause now</p>
          </button>

          <button
            onClick={() => setDonationType("monthly")}
            className={`p-4 rounded-lg border-2 transition-all ${
              donationType === "monthly" ? "border-primary bg-primary/10" : "border-border hover:border-primary/50"
            }`}
          >
            <p className="font-semibold">Monthly Donation</p>
            <p className="text-sm text-foreground/60">Ongoing support</p>
          </button>
        </div>
      </div>

      {/* Preset Amounts */}
      <div className="space-y-4">
        <label className="text-sm font-semibold text-foreground">Select Amount</label>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {presetAmounts.map((preset) => (
            <button
              key={preset.label}
              onClick={() => {
                setSelectedAmount(preset.label)
                setCustomAmount("")
              }}
              className={`p-3 rounded-lg border-2 font-semibold transition-all ${
                selectedAmount === preset.label
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border hover:border-primary/50"
              }`}
            >
              {preset.label}
            </button>
          ))}
        </div>
      </div>

      {/* Custom Amount */}
      <div className="space-y-4">
        <label htmlFor="custom-amount" className="text-sm font-semibold text-foreground">
          Custom Amount
        </label>
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold">$</span>
          <input
            id="custom-amount"
            type="number"
            placeholder="Enter custom amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value)
              setSelectedAmount(null)
            }}
            className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      {/* Donor Info */}
      <div className="p-6 bg-muted/50 rounded-lg border border-border space-y-4">
        <h3 className="font-semibold">Donor Information</h3>
        <div className="space-y-3">
          <input
            type="text"
            placeholder="Full Name (Optional)"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
          />
          <div>
            <input
              type="email"
              placeholder="Email Address (Optional)"
              value={donorEmail}
              onChange={(e) => {
                setDonorEmail(e.target.value)
                setEmailError("")
              }}
              className={`w-full px-4 py-2 rounded-lg border ${emailError ? "border-red-500" : "border-border"} bg-background focus:outline-none focus:border-primary`}
            />
            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
          </div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={newsletter}
              onChange={(e) => setNewsletter(e.target.checked)}
              className="w-4 h-4"
            />
            <span className="text-sm text-foreground/70">Send me updates about how my donation helps</span>
          </label>
        </div>
      </div>

      {/* Proceed Button */}
      <Button
        onClick={handleProceed}
        disabled={!isValid}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base"
      >
        <Heart className="w-5 h-5 mr-2" />
        Proceed to Secure Payment
        <ArrowRight className="w-5 h-5 ml-2" />
      </Button>

      <p className="text-center text-xs text-foreground/60">
        Your donation is secure and encrypted. We accept PayPal, credit cards, and debit cards.
      </p>
    </div>
  )
}
