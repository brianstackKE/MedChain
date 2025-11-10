export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  images?: string[]
}

export const PRODUCTS: Product[] = [
  {
    id: "donation-25",
    name: "Support Program",
    description: "Help provide mental health support to those in need",
    priceInCents: 2500,
  },
  {
    id: "donation-50",
    name: "Education Initiative",
    description: "Support mental health education and awareness programs",
    priceInCents: 5000,
  },
  {
    id: "donation-100",
    name: "Community Impact",
    description: "Support community mental health programs and events",
    priceInCents: 10000,
  },
  {
    id: "donation-250",
    name: "Transformative Support",
    description: "Support crisis intervention and emergency services",
    priceInCents: 25000,
  },
  {
    id: "donation-500",
    name: "Champion Partner",
    description: "Become a champion for mental health research and innovation",
    priceInCents: 50000,
  },
]
