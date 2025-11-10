"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Send, Loader } from "lucide-react"

interface Message {
  id: string
  type: "user" | "bot"
  content: string
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      type: "bot",
      content:
        "Hello! I'm MindCare AI, here to provide mental health guidance and support. How can I help you today? (Note: This is for informational purposes and not a substitute for professional mental health care.)",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const botResponses = [
        "That sounds challenging. Many people experience similar feelings. Have you considered talking to a therapist or counselor?",
        "I appreciate you sharing that. It's important to prioritize your mental health. Would you like some coping strategies?",
        "Your feelings are valid. Remember that seeking help is a sign of strength, not weakness.",
        "Self-care is important. Some activities that help many people include exercise, meditation, and spending time with loved ones.",
        "If you're in crisis, please reach out to a crisis hotline or emergency services immediately. You're not alone in this.",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: "bot",
        content: randomResponse,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-b from-background via-background to-muted/30 flex flex-col">
        {/* Header */}
        <section className="py-8 px-4 sm:px-6 lg:px-8 border-b border-border bg-gradient-to-b from-primary/10 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-foreground">Mental Health Support Chat</h1>
            <p className="text-foreground/70 mt-2">Connect with our AI-powered mental health guidance available 24/7</p>
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
              <p className="text-xs text-foreground/70">
                💡 This chat is for informational purposes only and does not replace professional mental health care.
              </p>
            </div>
          </div>
        </section>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-md lg:max-w-2xl px-6 py-4 rounded-lg ${
                    message.type === "user"
                      ? "bg-primary text-primary-foreground rounded-br-none"
                      : "bg-muted text-foreground rounded-bl-none border border-border"
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.content}</p>
                  <p
                    className={`text-xs mt-2 ${
                      message.type === "user" ? "text-primary-foreground/70" : "text-foreground/60"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground px-6 py-4 rounded-lg rounded-bl-none border border-border">
                  <Loader className="w-4 h-4 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <section className="border-t border-border bg-background px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSend} className="flex gap-3">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary disabled:opacity-50"
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                size="lg"
              >
                <Send className="w-5 h-5" />
              </Button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
