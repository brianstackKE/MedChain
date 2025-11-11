"use client"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import FeaturesSection from "@/components/features-section"
import StatsSection from "@/components/stats-section"
import TestimonialSection from "@/components/testimonial-section"
import CTASection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url('/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="min-h-screen bg-black/30">
        <Navigation />
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <TestimonialSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  )
}
