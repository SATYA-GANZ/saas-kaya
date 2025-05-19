"use client"

import { useState } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Sample data
const dailyData = [
  { day: "Mon", focusTime: 120, distractions: 8 },
  { day: "Tue", focusTime: 95, distractions: 12 },
  { day: "Wed", focusTime: 150, distractions: 5 },
  { day: "Thu", focusTime: 135, distractions: 7 },
  { day: "Fri", focusTime: 180, distractions: 4 },
  { day: "Sat", focusTime: 60, distractions: 15 },
  { day: "Sun", focusTime: 75, distractions: 10 },
]

const weeklyData = [
  { week: "Week 1", focusTime: 720, distractions: 45 },
  { week: "Week 2", focusTime: 840, distractions: 38 },
  { week: "Week 3", focusTime: 915, distractions: 30 },
  { week: "Week 4", focusTime: 780, distractions: 42 },
]

const monthlyData = [
  { month: "Jan", focusTime: 3200, distractions: 180 },
  { month: "Feb", focusTime: 2800, distractions: 210 },
  { month: "Mar", focusTime: 3600, distractions: 150 },
  { month: "Apr", focusTime: 3900, distractions: 120 },
  { month: "May", focusTime: 3500, distractions: 140 },
  { month: "Jun", focusTime: 3100, distractions: 160 },
]

export function AnalyticsCharts() {
  const [timeRange, setTimeRange] = useState("daily")
  const [chartType, setChartType] = useState("line")

  // Get data based on selected time range
  const getData = () => {
    switch (timeRange) {
      case "daily":
        return dailyData
      case "weekly":
        return weeklyData
      case "monthly":
        return monthlyData
      default:
        return dailyData
    }
  }

  // Get x-axis key based on selected time range
  const getXAxisKey = () => {
    switch (timeRange) {
      case "daily":
        return "day"
      case "weekly":
        return "week"
      case "monthly":
        return "month"
      default:
        return "day"
    }
  }

  // Format focus time for display
  const formatFocusTime = (minutes: number) => {
    if (timeRange === "daily") {
      return `${minutes} min`
    } else if (timeRange === "weekly") {
      const hours = Math.floor(minutes / 60)
      return `${hours} hr`
    } else {
      const hours = Math.floor(minutes / 60)
      return `${hours} hr`
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <Tabs defaultValue="daily" value={timeRange} onValueChange={setTimeRange}>
          <TabsList>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="flex gap-2">
          <Button variant={chartType === "line" ? "default" : "outline"} size="sm" onClick={() => setChartType("line")}>
            Line
          </Button>
          <Button variant={chartType === "bar" ? "default" : "outline"} size="sm" onClick={() => setChartType("bar")}>
            Bar
          </Button>
        </div>
      </div>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          {chartType === "line" ? (
            <LineChart data={getData()} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey={getXAxisKey()} tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
              <YAxis
                yAxisId="left"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => formatFocusTime(value)}
              />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(value, name) => {
                  if (name === "focusTime") {
                    return [formatFocusTime(value as number), "Focus Time"]
                  }
                  return [value, "Distractions"]
                }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              />
              <Legend />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="focusTime"
                name="Focus Time"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="distractions"
                name="Distractions"
                stroke="hsl(var(--accent))"
                strokeWidth={2}
                dot={{ r: 4 }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          ) : (
            <BarChart data={getData()} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey={getXAxisKey()} tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
              <YAxis
                yAxisId="left"
                tick={{ fontSize: 12 }}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => formatFocusTime(value)}
              />
              <YAxis yAxisId="right" orientation="right" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
              <Tooltip
                formatter={(value, name) => {
                  if (name === "focusTime") {
                    return [formatFocusTime(value as number), "Focus Time"]
                  }
                  return [value, "Distractions"]
                }}
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                }}
              />
              <Legend />
              <Bar
                yAxisId="left"
                dataKey="focusTime"
                name="Focus Time"
                fill="hsl(var(--primary))"
                radius={[4, 4, 0, 0]}
              />
              <Bar
                yAxisId="right"
                dataKey="distractions"
                name="Distractions"
                fill="hsl(var(--accent))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
}
