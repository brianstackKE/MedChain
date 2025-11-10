"use client"

import { useParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Calendar, User, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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
    content: `
      Anxiety is one of the most common mental health challenges affecting millions of people worldwide. In this comprehensive guide, we'll explore practical, evidence-based strategies to help you manage anxiety and reclaim your peace of mind.
      
      ## Understanding Anxiety
      Anxiety is a natural response to stress, but when it becomes persistent and overwhelming, it can significantly impact your daily life. The good news is that there are many effective techniques you can use to manage it.
      
      ## Practical Strategies
      
      ### 1. Breathing Exercises
      One of the most immediate ways to calm anxiety is through controlled breathing. Try the 4-7-8 technique: breathe in for 4 counts, hold for 7, and exhale for 8.
      
      ### 2. Progressive Muscle Relaxation
      Tension often accompanies anxiety. By systematically tensing and releasing muscle groups, you can reduce physical tension and promote relaxation.
      
      ### 3. Mindfulness Meditation
      Regular meditation can help you observe anxious thoughts without judgment, reducing their power over you.
      
      ### 4. Physical Activity
      Exercise is a powerful anxiety reducer. Even a 30-minute walk can significantly improve your mood and anxiety levels.
      
      ### 5. Limit Caffeine and Sleep
      Both caffeine and poor sleep can amplify anxiety. Establishing good sleep hygiene and moderating caffeine intake can help.
      
      ## Creating Your Action Plan
      Remember, managing anxiety is a journey. Start with one or two techniques that resonate with you, and gradually build your toolkit. Consider working with a mental health professional to develop a personalized strategy.
      
      You have the strength to manage anxiety and live a fulfilling life. Take the first step today.
    `,
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
    content: `
      Mindfulness has become a buzzword in wellness circles, but what does it really mean? And how can it help you? Let's explore the transformative power of mindfulness and how you can start practicing it today.
      
      ## What is Mindfulness?
      Mindfulness is the practice of being fully present and engaged in the moment, without judgment. It's about observing your thoughts, feelings, and sensations with curiosity rather than criticism.
      
      ## Benefits of Mindfulness
      - Reduces stress and anxiety
      - Improves focus and concentration
      - Enhances emotional regulation
      - Promotes better sleep
      - Increases self-awareness
      
      ## Getting Started with Mindfulness
      
      ### Start Small
      Begin with just 5 minutes a day. Consistency matters more than duration when you're starting out.
      
      ### Find a Quiet Space
      Choose a comfortable place where you won't be interrupted. This could be your bedroom, a park, or even a quiet corner at work.
      
      ### Focus on Your Breath
      Close your eyes and pay attention to your breathing. Notice the inhale and exhale without trying to change it.
      
      ### Notice Without Judgment
      When your mind wanders (and it will), simply notice it and gently return to your breath without judgment.
      
      ## Making it a Habit
      Track your practice, join a meditation group, or use apps like Calm or Headspace to stay motivated.
      
      Mindfulness isn't about perfection—it's about practice. Start today and experience the transformation.
    `,
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
    content: `
      Mental health in the workplace is increasingly important. Let's explore how to create a culture where open conversations about mental health are normalized and supported.
      
      ## The Workplace Mental Health Crisis
      Stress, burnout, and mental health challenges affect workplace productivity and employee wellbeing. Creating a supportive environment is beneficial for everyone.
      
      ## Starting the Conversation
      
      ### Leadership Commitment
      Leaders must model openness about mental health. When leadership takes mental health seriously, it sets the tone for the entire organization.
      
      ### Create Safe Spaces
      Establish forums or groups where employees can discuss mental health without fear of judgment or repercussion.
      
      ### Provide Resources
      Offer Employee Assistance Programs (EAPs), mental health counseling, and educational resources.
      
      ### Flexible Work Arrangements
      Allow flexible schedules and remote work options to help employees manage stress and maintain work-life balance.
      
      ## Normalizing Mental Health Days
      Just as we take days for physical illness, mental health days should be accepted and encouraged.
      
      ## Training and Education
      Provide mental health training for managers and employees to increase awareness and reduce stigma.
      
      ## The Result
      A workplace that supports mental health sees improved employee engagement, reduced turnover, and increased productivity.
      
      Start today. The conversation matters.
    `,
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
    content: `
      The connection between sleep and mental health cannot be overstated. Poor sleep doesn't just make you tired—it can significantly impact your mental wellbeing. Here's what you need to know.
      
      ## The Sleep-Mental Health Connection
      During sleep, your brain consolidates memories, regulates emotions, and repairs itself. When you don't get enough quality sleep, these functions suffer.
      
      ## Impact of Sleep Deprivation
      - Increased anxiety and depression symptoms
      - Reduced emotional resilience
      - Impaired decision-making
      - Heightened stress response
      - Weakened immune system
      
      ## Sleep Hygiene Tips
      
      ### Establish a Routine
      Go to bed and wake up at the same time every day, even on weekends.
      
      ### Create a Sleep Environment
      Keep your bedroom dark, cool, and quiet. Invest in a comfortable mattress and pillows.
      
      ### Limit Screen Time
      Avoid screens for at least an hour before bed. Blue light can interfere with melatonin production.
      
      ### Watch Your Diet
      Avoid caffeine, large meals, and alcohol close to bedtime.
      
      ### Exercise Regularly
      Physical activity promotes better sleep, but avoid intense exercise close to bedtime.
      
      ## When to Seek Help
      If you consistently struggle with sleep despite good sleep hygiene, consult a healthcare provider. Sleep disorders like insomnia and sleep apnea can be effectively treated.
      
      Prioritize your sleep. Your mental health depends on it.
    `,
  },
]

export default function BlogPostPage() {
  const params = useParams()
  const post = blogPosts.find((p) => p.id === Number.parseInt(params.id as string))

  if (!post) {
    return (
      <>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex items-center justify-center">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold">Post Not Found</h1>
            <p className="text-foreground/70">Sorry, we couldn't find the blog post you're looking for.</p>
            <Link href="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30">
        {/* Hero Image */}
        <div className="relative w-full h-96 bg-muted overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        {/* Article Content */}
        <article className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {post.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground">{post.title}</h1>
              <div className="flex flex-wrap gap-6 text-sm text-foreground/60 border-t border-b border-border py-4">
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
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none text-foreground">
              {post.content.split("\n").map((paragraph, idx) => {
                if (paragraph.startsWith("##")) {
                  return (
                    <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">
                      {paragraph.replace("## ", "")}
                    </h2>
                  )
                }
                if (paragraph.startsWith("###")) {
                  return (
                    <h3 key={idx} className="text-xl font-semibold mt-6 mb-3">
                      {paragraph.replace("### ", "")}
                    </h3>
                  )
                }
                if (paragraph.startsWith("-")) {
                  return (
                    <li key={idx} className="ml-6 text-foreground/80">
                      {paragraph.replace("- ", "")}
                    </li>
                  )
                }
                if (paragraph.trim()) {
                  return (
                    <p key={idx} className="text-foreground/80 leading-relaxed mb-4">
                      {paragraph.trim()}
                    </p>
                  )
                }
                return null
              })}
            </div>

            {/* CTA */}
            <div className="mt-12 p-8 bg-primary/10 rounded-xl border border-primary/20 space-y-4">
              <h3 className="text-xl font-bold">Need More Support?</h3>
              <p className="text-foreground/70">
                If you're struggling with mental health, remember that help is available and you're not alone.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/resources">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Find Resources</Button>
                </Link>
                <Link href="/community">
                  <Button variant="outline">Join Community</Button>
                </Link>
              </div>
            </div>

            {/* Related Posts */}
            <div className="mt-16 pt-8 border-t border-border">
              <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {blogPosts
                  .filter((p) => p.id !== post.id)
                  .slice(0, 2)
                  .map((relatedPost) => (
                    <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                      <div className="group p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all cursor-pointer">
                        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-foreground/60 mt-2">{relatedPost.excerpt}</p>
                        <div className="flex items-center gap-2 text-primary text-sm mt-4 group-hover:gap-3 transition-all">
                          Read More
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </>
  )
}
