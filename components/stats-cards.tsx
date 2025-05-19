"use client"

import { Clock, Calendar, Zap, Award } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function StatsCards() {
  // Sample data - would be fetched from API in a real app
  const stats = [
    {
      title: "Focus Time Today",
      value: "2h 15m",
      description: "30% increase from yesterday",
      icon: Clock,
      trend: "increase",
    },
    {
      title: "Current Streak",
      value: "7 days",
      description: "Keep it up!",
      icon: Calendar,
      trend: "neutral",
    },
    {
      title: "Productivity Score",
      value: "85%",
      description: "5% increase this week",
      icon: Zap,
      trend: "increase",
    },
    {
      title: "Achievements",
      value: "12",
      description: "2 new this month",
      icon: Award,
      trend: "increase",
    },
  ]

  return (
    <>
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p
              className={`text-xs ${
                stat.trend === "increase"
                  ? "text-green-500 dark:text-green-400"
                  : stat.trend === "decrease"
                    ? "text-red-500 dark:text-red-400"
                    : "text-muted-foreground"
              }`}
            >
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
