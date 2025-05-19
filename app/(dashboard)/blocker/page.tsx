import type { Metadata } from "next"
import { DistractionBlocker } from "@/components/distraction-blocker"
import { BlockerStats } from "@/components/blocker-stats"

export const metadata: Metadata = {
  title: "Distraction Blocker - FokusMaster",
  description: "Block distracting websites and applications",
}

export default function BlockerPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Distraction Blocker</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">Block Distractions</h2>
          <DistractionBlocker />
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">Distraction Statistics</h2>
          <BlockerStats />
        </div>
      </div>
    </div>
  )
}
