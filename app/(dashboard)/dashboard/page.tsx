import type { Metadata } from "next"
import { PomodoroTimer } from "@/components/pomodoro-timer"
import { QuoteCard } from "@/components/quote-card"
import { StatsCards } from "@/components/stats-cards"
import { FocusHistory } from "@/components/focus-history"

export const metadata: Metadata = {
  title: "Dashboard - FokusMaster",
  description: "Your productivity dashboard",
}

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Today is {new Date().toLocaleDateString()}</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatsCards />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">Focus Timer</h2>
          <PomodoroTimer />
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">Daily Inspiration</h2>
          <QuoteCard />
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">Recent Focus Sessions</h2>
        <FocusHistory />
      </div>
    </div>
  )
}
