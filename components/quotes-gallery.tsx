"use client"

import { useState } from "react"
import { Bookmark, Share2, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { toast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample quotes data
const quotesData = [
  {
    id: 1,
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
    category: "productivity",
    isFavorite: false,
  },
  {
    id: 2,
    text: "It's not about having time, it's about making time.",
    author: "Unknown",
    category: "time",
    isFavorite: true,
  },
  {
    id: 3,
    text: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
    category: "action",
    isFavorite: false,
  },
  {
    id: 4,
    text: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
    category: "perseverance",
    isFavorite: false,
  },
  {
    id: 5,
    text: "The future depends on what you do today.",
    author: "Mahatma Gandhi",
    category: "motivation",
    isFavorite: true,
  },
  {
    id: 6,
    text: "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
    category: "motivation",
    isFavorite: false,
  },
  {
    id: 7,
    text: "Focus on being productive instead of busy.",
    author: "Tim Ferriss",
    category: "productivity",
    isFavorite: false,
  },
  {
    id: 8,
    text: "The most difficult thing is the decision to act, the rest is merely tenacity.",
    author: "Amelia Earhart",
    category: "action",
    isFavorite: false,
  },
  {
    id: 9,
    text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
    category: "perseverance",
    isFavorite: false,
  },
  {
    id: 10,
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
    category: "passion",
    isFavorite: true,
  },
  {
    id: 11,
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
    category: "motivation",
    isFavorite: false,
  },
  {
    id: 12,
    text: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
    category: "time",
    isFavorite: false,
  },
]

// Categories
const categories = [
  { value: "all", label: "All Categories" },
  { value: "productivity", label: "Productivity" },
  { value: "time", label: "Time Management" },
  { value: "action", label: "Action" },
  { value: "perseverance", label: "Perseverance" },
  { value: "motivation", label: "Motivation" },
  { value: "passion", label: "Passion" },
]

export function QuotesGallery() {
  const [quotes, setQuotes] = useState(quotesData)
  const [filter, setFilter] = useState("all")
  const [view, setView] = useState("all")

  // Filter quotes based on category and favorites
  const filteredQuotes = quotes.filter((quote) => {
    const categoryMatch = filter === "all" || quote.category === filter
    const favoriteMatch = view === "all" || (view === "favorites" && quote.isFavorite)
    return categoryMatch && favoriteMatch
  })

  // Toggle favorite status
  const toggleFavorite = (id: number) => {
    setQuotes(quotes.map((quote) => (quote.id === id ? { ...quote, isFavorite: !quote.isFavorite } : quote)))

    const quote = quotes.find((q) => q.id === id)
    if (quote) {
      toast({
        title: quote.isFavorite ? "Removed from favorites" : "Added to favorites",
        description: quote.isFavorite
          ? "Quote has been removed from your favorites."
          : "Quote has been added to your favorites.",
      })
    }
  }

  // Share quote
  const shareQuote = (quote: (typeof quotes)[0]) => {
    // In a real app, this would use the Web Share API
    navigator.clipboard.writeText(`"${quote.text}" — ${quote.author}`)

    toast({
      title: "Quote copied to clipboard",
      description: "You can now paste and share this quote.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Select value={filter} onValueChange={setFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={view} onValueChange={setView}>
            <SelectTrigger className="w-[150px]">
              <SelectValue placeholder="Select view" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Quotes</SelectItem>
              <SelectItem value="favorites">Favorites</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="text-sm text-muted-foreground">Showing {filteredQuotes.length} quotes</div>
      </div>

      {filteredQuotes.length === 0 ? (
        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed">
          <p className="text-center text-muted-foreground">No quotes found. Try changing your filters.</p>
        </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredQuotes.map((quote) => (
            <Card key={quote.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 text-4xl text-muted-foreground">"</div>
                <p className="mb-4 text-lg font-medium">{quote.text}</p>
                <p className="text-sm text-muted-foreground">— {quote.author}</p>
              </CardContent>
              <CardFooter className="flex justify-between bg-muted/50 p-4">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleFavorite(quote.id)}
                  className={quote.isFavorite ? "text-accent" : ""}
                >
                  <Heart className="h-4 w-4" fill={quote.isFavorite ? "currentColor" : "none"} />
                  <span className="sr-only">{quote.isFavorite ? "Remove from favorites" : "Add to favorites"}</span>
                </Button>
                <Button variant="ghost" size="icon" onClick={() => shareQuote(quote)}>
                  <Share2 className="h-4 w-4" />
                  <span className="sr-only">Share</span>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => {
                    toast({
                      title: "Quote saved",
                      description: "Quote has been saved to your collection.",
                    })
                  }}
                >
                  <Bookmark className="h-4 w-4" />
                  <span className="sr-only">Save</span>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
