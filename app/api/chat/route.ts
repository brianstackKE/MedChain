import { generateText } from "ai"
import { huggingface } from "@ai-sdk/huggingface"

export async function POST(request: Request) {
  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return new Response(JSON.stringify({ error: "Message is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    const { text } = await generateText({
      model: huggingface("HuggingFaceH4/zephyr-7b-beta"),
      system: `You are MindCare AI, a compassionate mental health support assistant. You provide:
- Emotional support and validation
- General mental health information
- Coping strategies and wellness tips
- Resources and encouragement to seek professional help
- Crisis resources when needed

IMPORTANT: Always remind users that you're not a substitute for professional mental health care. 
If someone mentions suicidal thoughts or severe crisis, provide crisis hotline numbers:
- National Suicide Prevention Lifeline: 988
- Crisis Text Line: Text HOME to 741741
Keep responses warm, supportive, and under 150 words.`,
      prompt: message,
    })

    return new Response(JSON.stringify({ response: text }), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return new Response(
      JSON.stringify({
        error: "Failed to generate response. Please try again.",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    )
  }
}
