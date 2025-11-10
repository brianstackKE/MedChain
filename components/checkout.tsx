"use client"

import { useCallback } from "react"
import { EmbeddedCheckout, EmbeddedCheckoutProvider } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import { startCheckoutSession } from "@/app/actions/stripe"
import { CreditCard, Banknote } from "lucide-react"

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface CheckoutProps {
  productId: string
  donorEmail?: string
}

export default function Checkout({ productId, donorEmail }: CheckoutProps) {
  const startCheckoutSessionForProduct = useCallback(
    () => startCheckoutSession(productId, donorEmail),
    [productId, donorEmail],
  )

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-6 p-4 bg-muted/50 rounded-lg border border-border/50">
        <div className="flex items-center gap-2">
          <CreditCard className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">Credit/Debit Card</span>
        </div>
        <div className="flex items-center gap-2">
          <Banknote className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium">PayPal</span>
        </div>
      </div>

      <div id="checkout">
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ fetchClientSecret: startCheckoutSessionForProduct }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </div>
  )
}
