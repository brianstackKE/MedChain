"use client"

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: 1,
    title: "Understanding Anxiety: Practical Strategies for Daily Management",
    excerpt: "Learn evidence-based techniques to manage anxiety and reclaim your peace of mind.",
    author: "Dr. Sarah Johnson",
    date: "Nov 8, 2024",
    readTime: "5 min read",
    category: "Mental Health Tips",
    image: "/person-practicing-breathing-exercise-for-anxiety-relief.jpg",
  },
  {
    id: 2,
    title: "The Power of Mindfulness: A Beginner's Guide",
    excerpt: "Discover how simple mindfulness practices can transform your mental health and daily life.",
    author: "James Chen",
    date: "Nov 5, 2024",
    readTime: "7 min read",
    category: "Wellness",
    image: "/mindfulness-meditation-person-finding-inner-peace.jpg",
  },
  {
    id: 3,
    title: "Breaking the Stigma: Mental Health Conversations at Work",
    excerpt: "Create a supportive workplace environment by fostering open mental health discussions.",
    author: "Emma Wilson",
    date: "Nov 1, 2024",
    readTime: "6 min read",
    category: "Workplace Wellness",
    image: "/workplace-team-meeting-mental-health-discussion.jpg",
  },
  {
    id: 4,
    title: "Sleep and Mental Health: Why Rest Matters",
    excerpt: "Explore the critical connection between quality sleep and mental health outcomes.",
    author: "Dr. Michael Brown",
    date: "Oct 28, 2024",
    readTime: "5 min read",
    category: "Wellness",
    image: "/person-sleeping-peacefully-good-sleep-hygiene.jpg",
  },
]

export default function BlogPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Mental Health Blog</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Expert insights, practical tips, and inspiring stories about mental wellness
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <article className="group p-8 bg-background rounded-xl border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="grid md:grid-cols-4 gap-6 items-start">
                    <div className="md:col-span-3 space-y-4">
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                      </div>
                      <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-foreground/70 leading-relaxed">{post.excerpt}</p>
                      <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        Read Article
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                    <div className="relative w-full h-48 rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-6 text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div>{post.readTime}</div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="text-foreground/70 mb-8">
              Get weekly mental health tips, articles, and resources delivered to your inbox
            </p>
            <div className="flex gap-3 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary"
              />
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
