"use client"

import { useState } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Heart, Eye, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import CommunityDiscussionModal from "@/components/community-discussion-modal"

interface ForumPost {
  id: number
  title: string
  author: string
  category: string
  excerpt: string
  replies: number
  views: number
  likes: number
  timestamp: string
}

const forumPosts: ForumPost[] = [
  {
    id: 1,
    title: "New to Depression Treatment - Looking for Support",
    author: "Alex M.",
    category: "Depression Support",
    excerpt: "Just started therapy and medication. Would love to hear others' experiences with antidepressants...",
    replies: 24,
    views: 156,
    likes: 12,
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    title: "Anxiety in Social Situations - Tips and Tricks",
    author: "Jordan K.",
    category: "Anxiety & Panic",
    excerpt: "Sharing what has helped me overcome social anxiety. Would love to hear your strategies too!",
    replies: 43,
    views: 289,
    likes: 34,
    timestamp: "1 day ago",
  },
  {
    id: 3,
    title: "Celebrating 6 Months Mental Health Journey",
    author: "Taylor S.",
    category: "Success Stories",
    excerpt: "I want to celebrate this milestone with the community that supported me throughout...",
    replies: 67,
    views: 412,
    likes: 89,
    timestamp: "3 days ago",
  },
  {
    id: 4,
    title: "Managing PTSD - Daily Coping Strategies",
    author: "Morgan B.",
    category: "PTSD Support",
    excerpt: "Creating a safe space to discuss trauma recovery and what helps us heal...",
    replies: 31,
    views: 198,
    likes: 28,
    timestamp: "4 days ago",
  },
]

const categories = ["Depression Support", "Anxiety & Panic", "PTSD Support", "Success Stories", "Wellness Tips"]

export default function CommunityPage() {
  const [selectedPost, setSelectedPost] = useState<ForumPost | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const filteredPosts = selectedCategory ? forumPosts.filter((p) => p.category === selectedCategory) : forumPosts

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
        <div
          className="fixed inset-0 -z-10 opacity-10"
          style={{
            backgroundImage: "url('/community-support-background-diverse-people-together.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        {/* Header */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/10 to-transparent">
          <div className="max-w-7xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Community Support Groups</h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Connect with others, share experiences, and find support in our inclusive community
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Forum Posts */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex justify-between items-center mb-8">
                  <h2 className="text-2xl font-bold">Active Discussions</h2>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Start New Topic</Button>
                </div>

                <div className="space-y-4">
                  {filteredPosts.map((post) => (
                    <div
                      key={post.id}
                      onClick={() => setSelectedPost(post)}
                      className="group p-6 bg-background rounded-lg border border-border hover:border-primary/50 hover:shadow-md cursor-pointer transition-all duration-300"
                    >
                      <div className="flex justify-between items-start gap-4">
                        <div className="flex-1 space-y-3">
                          <div className="flex gap-2">
                            <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                              {post.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-foreground/70 text-sm">{post.excerpt}</p>
                          <div className="flex gap-4 text-xs text-foreground/60">
                            <span>{post.author}</span>
                            <span>{post.timestamp}</span>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4 flex gap-6 text-sm text-foreground/60">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4" />
                          {post.replies} replies
                        </div>
                        <div className="flex items-center gap-2">
                          <Eye className="w-4 h-4" />
                          {post.views} views
                        </div>
                        <div className="flex items-center gap-2">
                          <Heart className="w-4 h-4" />
                          {post.likes} likes
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Categories */}
                <div className="p-6 bg-background rounded-lg border border-border">
                  <h3 className="font-semibold mb-4 text-foreground">Categories</h3>
                  <div className="space-y-2">
                    <button
                      onClick={() => setSelectedCategory(null)}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors text-sm font-medium ${
                        selectedCategory === null
                          ? "bg-primary/10 text-primary"
                          : "text-foreground/70 hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      All Discussions
                    </button>
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`block w-full text-left px-3 py-2 rounded-lg transition-colors text-sm ${
                          selectedCategory === cat
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-foreground/70 hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Community Stats */}
                <div className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <h3 className="font-semibold mb-4 text-foreground">Community Stats</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Active Members</span>
                      <span className="font-semibold text-primary">10,234</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Total Posts</span>
                      <span className="font-semibold text-primary">45,678</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/70">Online Now</span>
                      <span className="font-semibold text-primary">1,234</span>
                    </div>
                  </div>
                </div>

                {/* Community Guidelines */}
                <div className="p-6 bg-background rounded-lg border border-border">
                  <h3 className="font-semibold mb-4 text-foreground">Community Guidelines</h3>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      Be respectful and kind
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      Share your genuine experiences
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      Support one another
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">✓</span>
                      Respect privacy and confidentiality
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50 border-t border-border">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-2xl font-bold">Want More Support?</h2>
            <p className="text-foreground/70">Access professional resources or join a guided support group</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Find Professional Help</Button>
              <Button variant="outline">Schedule Support Group</Button>
            </div>
          </div>
        </section>

        {/* Discussion Modal */}
        {selectedPost && <CommunityDiscussionModal post={selectedPost} onClose={() => setSelectedPost(null)} />}
      </main>
      <Footer />
    </>
  )
}
