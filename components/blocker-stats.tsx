"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample data
const distractionData = [
  { name: "Facebook", attempts: 28, color: "#3a0ca3" },
  { name: "YouTube", attempts: 42, color: "#f72585" },
  { name: "Twitter", attempts: 18, color: "#4361ee" },
  { name: "Instagram", attempts: 34, color: "#7209b7" },
  { name: "Reddit", attempts: 23, color: "#560bad" },
]

export function BlockerStats() {
  // Calculate total blocked attempts
  const totalAttempts = distractionData.reduce((sum, item) => sum + item.attempts, 0)

  // Find most distracting site
  const mostDistracting = [...distractionData].sort((a, b) => b.attempts - a.attempts)[0]

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardContent className="p-4">
            <div className="text-sm font-medium text-muted-foreground">Total Blocked</div>
            <div className="text-2xl font-bold">{totalAttempts}</div>
            <div className="text-xs text-muted-foreground">Distraction attempts this week</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-sm font-medium text-muted-foreground">Most Distracting</div>
            <div className="text-2xl font-bold">{mostDistracting.name}</div>
            <div className="text-xs text-muted-foreground">{mostDistracting.attempts} attempts this week</div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium">Distraction Attempts by Site</h3>
          <p className="text-xs text-muted-foreground">Last 7 days</p>
        </div>

        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={distractionData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
              <YAxis tick={{ fontSize: 12 }} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
              <Tooltip
                cursor={{ fill: "rgba(0, 0, 0, 0.05)" }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              />
              <Bar dataKey="attempts" radius={[4, 4, 0, 0]} fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium">Top Distractions</h3>
        <div className="flex flex-wrap gap-2">
          {distractionData.map((item) => (
            <Badge key={item.name} variant="outline" className="flex items-center gap-1">
              {item.name}
              <span className="ml-1 rounded-full bg-primary/10 px-1.5 py-0.5 text-xs font-medium text-primary">
                {item.attempts}
              </span>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}
