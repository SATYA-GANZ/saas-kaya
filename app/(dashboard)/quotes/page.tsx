import type { Metadata } from "next"
import { QuotesGallery } from "@/components/quotes-gallery"

export const metadata: Metadata = {
  title: "Motivational Quotes - FokusMaster",
  description: "Get inspired with motivational quotes",
}

export default function QuotesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Motivational Quotes</h1>
      </div>

      <QuotesGallery />
    </div>
  )
}
