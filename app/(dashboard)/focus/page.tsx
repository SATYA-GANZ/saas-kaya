import type { Metadata } from "next"
import { PomodoroTimer } from "@/components/pomodoro-timer"
import { FocusSettings } from "@/components/focus-settings"

export const metadata: Metadata = {
  title: "Focus Timer - FokusMaster",
  description: "Stay focused with the Pomodoro technique",
}

export default function FocusPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Focus Timer</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center rounded-lg border bg-card p-6 shadow-sm">
          <PomodoroTimer />
        </div>

        <div className="rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="mb-6 text-xl font-semibold">Focus Settings</h2>
          <FocusSettings />
        </div>
      </div>
    </div>
  )
}
