"use client"

import { Award, Clock, Zap, Target, Flame, Calendar, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils"

// Sample achievements data
const achievements = [
  {
    id: 1,
    name: "Focus Novice",
    description: "Complete 5 focus sessions",
    icon: Clock,
    progress: 100,
    unlocked: true,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 2,
    name: "Consistency Champion",
    description: "Maintain a 7-day streak",
    icon: Calendar,
    progress: 100,
    unlocked: true,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 3,
    name: "Distraction Destroyer",
    description: "Block 50 distractions",
    icon: Target,
    progress: 100,
    unlocked: true,
    color: "bg-primary/10 text-primary",
  },
  {
    id: 4,
    name: "Focus Master",
    description: "Complete 25 focus sessions",
    icon: Award,
    progress: 72,
    unlocked: false,
    color: "bg-muted text-muted-foreground",
  },
  {
    id: 5,
    name: "Productivity Powerhouse",
    description: "Accumulate 10 hours of focus time",
    icon: Zap,
    progress: 65,
    unlocked: false,
    color: "bg-muted text-muted-foreground",
  },
  {
    id: 6,
    name: "Two-Week Warrior",
    description: "Maintain a 14-day streak",
    icon: Flame,
    progress: 50,
    unlocked: false,
    color: "bg-muted text-muted-foreground",
  },
  {
    id: 7,
    name: "Improvement Icon",
    description: "Increase focus time for 5 consecutive days",
    icon: TrendingUp,
    progress: 40,
    unlocked: false,
    color: "bg-muted text-muted-foreground",
  },
]

export function AchievementBadges() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {achievements.map((achievement) => (
        <Card
          key={achievement.id}
          className={cn("overflow-hidden transition-all", achievement.unlocked ? "border-primary/50" : "")}
        >
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center">
              <div className={cn("mb-3 flex h-16 w-16 items-center justify-center rounded-full", achievement.color)}>
                <achievement.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-1 font-semibold">{achievement.name}</h3>
              <p className="mb-3 text-xs text-muted-foreground">{achievement.description}</p>
              <div className="w-full space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span>{achievement.progress}%</span>
                  {achievement.unlocked && <span className="text-primary">Unlocked!</span>}
                </div>
                <Progress value={achievement.progress} className="h-1.5" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
