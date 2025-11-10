import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, MapPin, Users, Zap, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const events = [
  {
    id: 1,
    title: "Mental Health Awareness Week 2024",
    date: "November 15-21, 2024",
    location: "Online + Multiple Cities",
    description: "Join us for a week-long celebration with webinars, workshops, and community events.",
    image: "/mental-health-awareness-week-celebration-conference.jpg", // replaced emoji with real image
    attendees: 2340,
    type: "Awareness Campaign",
  },
  {
    id: 2,
    title: "Breaking Stigma: Panel Discussion",
    date: "November 18, 2024 - 6:00 PM",
    location: "Virtual Event",
    description: "Hear from mental health professionals and individuals sharing their stories.",
    image: "/panel-discussion-speakers-mental-health-professionals.jpg", // replaced emoji with real image
    attendees: 856,
    type: "Webinar",
  },
  {
    id: 3,
    title: "5K Wellness Run for Mental Health",
    date: "November 25, 2024 - 9:00 AM",
    location: "Central Park, New York",
    description: "Run, walk, or jog to support mental health initiatives. All fitness levels welcome!",
    image: "/people-running-5k-marathon-charity-fundraiser.jpg", // replaced emoji with real image
    attendees: 1234,
    type: "Fundraiser",
  },
  {
    id: 4,
    title: "Mindfulness Workshop: Stress Relief",
    date: "December 2, 2024 - 7:00 PM",
    location: "Community Center",
    description: "Learn practical mindfulness techniques to manage stress and anxiety.",
    image: "/mindfulness-meditation-workshop-yoga-class.jpg", // replaced emoji with real image
    attendees: 567,
    type: "Workshop",
  },
]

export default function EventsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
        <div
          className="fixed inset-0 -z-10 opacity-10"
          style={{
            backgroundImage: "url('/events-fundraiser-background-celebration-people.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Header */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">Upcoming Events</h1>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Join our community events, fundraisers, and awareness campaigns
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-background rounded-lg border border-border">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-primary">12</p>
                <p className="text-sm text-foreground/70">Upcoming Events</p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border border-border">
                <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-primary">5K+</p>
                <p className="text-sm text-foreground/70">Registered Participants</p>
              </div>
              <div className="text-center p-6 bg-background rounded-lg border border-border">
                <Zap className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-2xl font-bold text-primary">$250K+</p>
                <p className="text-sm text-foreground/70">Funds Raised</p>
              </div>
            </div>
          </div>
        </section>

        {/* Events List */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="group p-8 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="grid md:grid-cols-5 gap-6 items-start">
                  <div className="relative w-full h-32 md:h-40 rounded-lg overflow-hidden bg-muted">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="md:col-span-3 space-y-4">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">{event.description}</p>

                    <div className="space-y-2 text-sm text-foreground/60">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-4 h-4 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="w-4 h-4 text-primary" />
                        {event.attendees} people registered
                      </div>
                    </div>
                  </div>

                  <div className="text-right">
                    <Button className="bg-primary text-primary-foreground hover:bg-primary/90 group-hover:gap-3 transition-all">
                      Register
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Create Event CTA */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5 border-t border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">Want to Organize an Event?</h2>
            <p className="text-foreground/70">
              Help us spread awareness and raise funds by organizing your own mental health event
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Create Your Event
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
