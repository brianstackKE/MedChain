"use client"

import { useState } from "react"

const stats = [
  { label: "People Reached", value: "50,000+" },
  { label: "Educational Resources", value: "1,000+" },
  { label: "Success Stories", value: "500+" },
  { label: "Active Community Members", value: "10,000+" },
]

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <section className="py-16 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 md:p-6 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
            >
              <div className="text-2xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-xs md:text-base text-foreground/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
