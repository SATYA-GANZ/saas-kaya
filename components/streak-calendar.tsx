"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, CalendarIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Sample data - would be fetched from API in a real app
const streakData = {
  currentStreak: 7,
  longestStreak: 14,
  thisMonth: [
    { date: "2025-05-01", focusMinutes: 120, completed: true },
    { date: "2025-05-02", focusMinutes: 95, completed: true },
    { date: "2025-05-03", focusMinutes: 0, completed: false },
    { date: "2025-05-04", focusMinutes: 0, completed: false },
    { date: "2025-05-05", focusMinutes: 150, completed: true },
    { date: "2025-05-06", focusMinutes: 135, completed: true },
    { date: "2025-05-07", focusMinutes: 180, completed: true },
    { date: "2025-05-08", focusMinutes: 60, completed: true },
    { date: "2025-05-09", focusMinutes: 75, completed: true },
    { date: "2025-05-10", focusMinutes: 90, completed: true },
    { date: "2025-05-11", focusMinutes: 0, completed: false },
    { date: "2025-05-12", focusMinutes: 120, completed: true },
    { date: "2025-05-13", focusMinutes: 150, completed: true },
    { date: "2025-05-14", focusMinutes: 135, completed: true },
    { date: "2025-05-15", focusMinutes: 0, completed: false },
    { date: "2025-05-16", focusMinutes: 120, completed: true },
    { date: "2025-05-17", focusMinutes: 0, completed: false },
  ],
}

export function StreakCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate()
  }

  // Get day of week for first day of month (0 = Sunday, 1 = Monday, etc.)
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay()
  }

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear()
    const month = currentMonth.getMonth()
    const daysInMonth = getDaysInMonth(year, month)
    const firstDayOfMonth = getFirstDayOfMonth(year, month)

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push({ day: 0, focusMinutes: 0, completed: false, isEmpty: true })
    }

    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`
      const dayData = streakData.thisMonth.find((d) => d.date === dateString)

      days.push({
        day,
        focusMinutes: dayData?.focusMinutes || 0,
        completed: dayData?.completed || false,
        isEmpty: false,
      })
    }

    return days
  }

  // Navigate to previous month
  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))
  }

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))
  }

  // Format month and year
  const formatMonthYear = (date: Date) => {
    return date.toLocaleDateString("en-US", { month: "long", year: "numeric" })
  }

  const calendarDays = generateCalendarDays()

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-muted-foreground" />
          <div>
            <div className="font-medium">{formatMonthYear(currentMonth)}</div>
            <div className="text-sm text-muted-foreground">Current streak: {streakData.currentStreak} days</div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button variant="outline" size="icon" onClick={previousMonth}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous month</span>
          </Button>
          <Button variant="outline" size="icon" onClick={nextMonth}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next month</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-xs font-medium">
        <div className="py-1">Sun</div>
        <div className="py-1">Mon</div>
        <div className="py-1">Tue</div>
        <div className="py-1">Wed</div>
        <div className="py-1">Thu</div>
        <div className="py-1">Fri</div>
        <div className="py-1">Sat</div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={cn(
              "aspect-square flex flex-col items-center justify-center rounded-md text-sm",
              day.isEmpty ? "invisible" : "visible",
              day.completed
                ? "bg-primary/10 text-primary hover:bg-primary/20"
                : "bg-muted/50 text-muted-foreground hover:bg-muted",
            )}
          >
            {!day.isEmpty && (
              <>
                <span className="font-medium">{day.day}</span>
                {day.focusMinutes > 0 && <span className="text-xs">{day.focusMinutes}m</span>}
              </>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-center gap-4 text-sm">
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-sm bg-primary/10" />
          <span>Focus day</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-3 w-3 rounded-sm bg-muted/50" />
          <span>No focus</span>
        </div>
      </div>
    </div>
  )
}
