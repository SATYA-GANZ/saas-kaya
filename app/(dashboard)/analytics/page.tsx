import type { Metadata } from "next"
import { AnalyticsCharts } from "@/components/analytics-charts"
import { StreakCalendar } from "@/components/streak-calendar"
import { AchievementBadges } from "@/components/achievement-badges"

export const metadata: Metadata = {
  title: "Analytics - FokusMaster",
  description: "Track your productivity and focus progress",
}

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">Focus Time</h2>
          <AnalyticsCharts />
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">Streak Calendar</h2>
          <StreakCalendar />
        </div>
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <h2 className="mb-6 text-xl font-semibold">Achievements</h2>
        <AchievementBadges />
      </div>
    </div>
  )
}
