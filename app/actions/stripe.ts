"use server"
import { stripe } from "@/lib/stripe"
import { PRODUCTS } from "@/lib/products"

export async function startCheckoutSession(productId: string, donorEmail?: string) {
  const product = PRODUCTS.find((p) => p.id === productId)

  if (!product) {
    throw new Error(`Product with id "${productId}" not found`)
  }

  const validEmail = donorEmail && donorEmail.trim() && donorEmail.includes("@") ? donorEmail.trim() : undefined

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
  const returnUrl = `${baseUrl}/donate?session_id={CHECKOUT_SESSION_ID}`

  const session = await stripe.checkout.sessions.create({
    ui_mode: "embedded",
    redirect_on_completion: "never",
    return_url: returnUrl,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: product.priceInCents,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    payment_method_types: ["card", "paypal"],
    ...(validEmail && { customer_email: validEmail }),
  })

  return session.client_secret
}
