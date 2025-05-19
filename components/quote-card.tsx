"use client"

import { useState, useEffect } from "react"
import { RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// Sample quotes data
const quotes = [
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "It's not about having time, it's about making time.",
    author: "Unknown",
  },
  {
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
  },
  {
    text: "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    text: "Focus on being productive instead of busy.",
    author: "Tim Ferriss",
  },
  {
    text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
  },
]

export function QuoteCard() {
  const [quote, setQuote] = useState(quotes[0])
  const [isLoading, setIsLoading] = useState(false)

  const getRandomQuote = () => {
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length)
      setQuote(quotes[randomIndex])
      setIsLoading(false)
    }, 500)
  }

  // Get a random quote on initial load
  useEffect(() => {
    getRandomQuote()
  }, [])

  return (
    <Card className="border-0 shadow-none">
      <CardContent className="flex flex-col items-center p-0">
        <div className="mb-4 flex h-40 w-full flex-col items-center justify-center rounded-lg bg-muted/50 p-6 text-center">
          <p className="mb-4 text-lg font-medium italic">"{quote.text}"</p>
          <p className="text-sm text-muted-foreground">— {quote.author}</p>
        </div>
        <Button variant="outline" size="sm" className="mt-2" onClick={getRandomQuote} disabled={isLoading}>
          <RefreshCw className={`mr-2 h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          New Quote
        </Button>
      </CardContent>
    </Card>
  )
}
