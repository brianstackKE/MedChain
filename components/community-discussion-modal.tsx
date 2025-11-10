"use client"

import { useState } from "react"
import { X, Heart, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Reply {
  id: number
  author: string
  content: string
  timestamp: string
  likes: number
  isLiked: boolean
}

interface DiscussionModalProps {
  post: {
    id: number
    title: string
    author: string
    category: string
    excerpt: string
    content?: string
    replies: number
    views: number
    likes: number
    timestamp: string
  }
  onClose: () => void
}

export default function CommunityDiscussionModal({ post, onClose }: DiscussionModalProps) {
  const [replies, setReplies] = useState<Reply[]>([
    {
      id: 1,
      author: "Sam L.",
      content: "This really resonates with me. Thank you for sharing your story.",
      timestamp: "2 hours ago",
      likes: 8,
      isLiked: false,
    },
    {
      id: 2,
      author: "Casey W.",
      content: "I've had similar experiences. The advice about consistency really helped me.",
      timestamp: "1 hour ago",
      likes: 5,
      isLiked: false,
    },
  ])
  const [newReply, setNewReply] = useState("")
  const [postLikes, setPostLikes] = useState(post.likes)
  const [isPostLiked, setIsPostLiked] = useState(false)

  const handleAddReply = () => {
    if (!newReply.trim()) return

    const reply: Reply = {
      id: replies.length + 1,
      author: "You",
      content: newReply,
      timestamp: "just now",
      likes: 0,
      isLiked: false,
    }

    setReplies([...replies, reply])
    setNewReply("")
  }

  const handleLikeReply = (id: number) => {
    setReplies(
      replies.map((r) =>
        r.id === id
          ? {
              ...r,
              likes: r.isLiked ? r.likes - 1 : r.likes + 1,
              isLiked: !r.isLiked,
            }
          : r,
      ),
    )
  }

  const handleLikePost = () => {
    setPostLikes(isPostLiked ? postLikes - 1 : postLikes + 1)
    setIsPostLiked(!isPostLiked)
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
      <div className="bg-background rounded-2xl border border-border max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-in slide-in-from-bottom-5 duration-300">
        {/* Header */}
        <div className="flex justify-between items-start p-6 border-b border-border">
          <div className="flex-1">
            <div className="flex gap-2 mb-2">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                {post.category}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-foreground">{post.title}</h2>
            <p className="text-sm text-foreground/60 mt-2">
              Posted by {post.author} • {post.timestamp}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-foreground/60 hover:text-foreground p-2 hover:bg-muted rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Original Post */}
          <div className="space-y-4">
            <p className="text-foreground leading-relaxed">{post.excerpt}</p>
            <div className="flex gap-6 text-sm text-foreground/60">
              <button
                onClick={handleLikePost}
                className={`flex items-center gap-2 hover:text-foreground transition-colors ${isPostLiked ? "text-primary" : ""}`}
              >
                <Heart className={`w-4 h-4 ${isPostLiked ? "fill-current" : ""}`} />
                {postLikes} likes
              </button>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                {replies.length} replies
              </div>
              <div className="text-foreground/40">{post.views} views</div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <h3 className="font-semibold mb-4 text-foreground">Replies ({replies.length})</h3>

            {/* Replies */}
            <div className="space-y-4">
              {replies.map((reply) => (
                <div key={reply.id} className="p-4 bg-muted/50 rounded-lg border border-border/50">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-semibold text-foreground text-sm">{reply.author}</p>
                      <p className="text-xs text-foreground/60">{reply.timestamp}</p>
                    </div>
                  </div>
                  <p className="text-sm text-foreground mb-3 leading-relaxed">{reply.content}</p>
                  <button
                    onClick={() => handleLikeReply(reply.id)}
                    className={`flex items-center gap-1 text-xs hover:text-primary transition-colors ${
                      reply.isLiked ? "text-primary" : "text-foreground/60"
                    }`}
                  >
                    <Heart className={`w-3 h-3 ${reply.isLiked ? "fill-current" : ""}`} />
                    {reply.likes}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reply Input */}
        <div className="border-t border-border p-6 bg-muted/30">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-foreground">Share Your Support</label>
            <div className="flex gap-3">
              <textarea
                value={newReply}
                onChange={(e) => setNewReply(e.target.value)}
                placeholder="Write a supportive reply..."
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 resize-none"
                rows={3}
              />
            </div>
            <Button
              onClick={handleAddReply}
              disabled={!newReply.trim()}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
            >
              Post Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
