import type { Metadata } from "next"
import { SettingsForm } from "@/components/settings-form"

export const metadata: Metadata = {
  title: "Settings - FokusMaster",
  description: "Customize your FokusMaster experience",
}

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
      </div>

      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <SettingsForm />
      </div>
    </div>
  )
}
