"use client"

import { useState, useEffect, useRef } from "react"
import { Play, Pause, RotateCcw, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { toast } from "@/hooks/use-toast"

export function PomodoroTimer() {
  const [duration, setDuration] = useState(25 * 60) // 25 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(duration)
  const [isActive, setIsActive] = useState(false)
  const [showNotification, setShowNotification] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // Calculate progress percentage
  const progress = (1 - timeLeft / duration) * 100
  const radius = 85
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference * (1 - progress / 100)

  // Format time as MM:SS
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  // Handle timer completion
  useEffect(() => {
    if (timeLeft === 0) {
      setIsActive(false)
      setShowNotification(true)
      toast({
        title: "Focus session complete!",
        description: "Take a short break before starting your next session.",
      })

      // Play notification sound
      const audio = new Audio("/notification.mp3")
      audio.play().catch((e) => console.error("Error playing sound:", e))
    }
  }, [timeLeft])

  // Timer logic
  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setTimeout(() => {
        setTimeLeft((prev) => prev - 1)
      }, 1000)
    } else if (timerRef.current) {
      clearTimeout(timerRef.current)
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [isActive, timeLeft])

  // Handle start/pause
  const toggleTimer = () => {
    setIsActive(!isActive)
    setShowNotification(false)
  }

  // Handle reset
  const resetTimer = () => {
    setIsActive(false)
    setTimeLeft(duration)
    setShowNotification(false)
  }

  // Handle duration change
  const handleDurationChange = (value: number[]) => {
    const newDuration = value[0] * 60 // Convert minutes to seconds
    setDuration(newDuration)
    setTimeLeft(newDuration)
    setIsActive(false)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-64 w-64 items-center justify-center">
        {/* Progress ring */}
        <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 200 200">
          {/* Background circle */}
          <circle cx="100" cy="100" r={radius} fill="none" stroke="currentColor" strokeWidth="8" strokeOpacity="0.1" />
          {/* Progress circle */}
          <circle
            className="progress-ring__circle"
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              stroke: isActive
                ? "hsl(var(--primary))"
                : showNotification
                  ? "hsl(var(--accent))"
                  : "hsl(var(--muted-foreground))",
            }}
          />
        </svg>

        {/* Timer display */}
        <div className="z-10 flex flex-col items-center">
          <span className="text-4xl font-bold">{formatTime(timeLeft)}</span>
          <span className="mt-2 text-sm text-muted-foreground">
            {isActive ? "Focus time!" : showNotification ? "Break time!" : "Ready to focus?"}
          </span>
        </div>
      </div>

      {/* Timer controls */}
      <div className="mt-6 flex w-full max-w-xs items-center justify-center gap-4">
        <Button variant="outline" size="icon" onClick={resetTimer} disabled={timeLeft === duration && !isActive}>
          <RotateCcw className="h-5 w-5" />
          <span className="sr-only">Reset</span>
        </Button>

        <Button size="lg" className="w-32" onClick={toggleTimer} variant={isActive ? "secondary" : "default"}>
          {isActive ? (
            <>
              <Pause className="mr-2 h-5 w-5" /> Pause
            </>
          ) : (
            <>
              <Play className="mr-2 h-5 w-5" /> Start
            </>
          )}
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            toast({
              title: "Notification test",
              description: "Your notification sound is working correctly.",
            })
          }
        >
          <Bell className="h-5 w-5" />
          <span className="sr-only">Test notification</span>
        </Button>
      </div>

      {/* Duration slider */}
      <div className="mt-6 w-full max-w-xs">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Session length: {duration / 60} min</span>
        </div>
        <Slider
          defaultValue={[duration / 60]}
          min={5}
          max={60}
          step={5}
          onValueChange={handleDurationChange}
          disabled={isActive}
        />
        <div className="mt-1 flex justify-between text-xs text-muted-foreground">
          <span>5 min</span>
          <span>60 min</span>
        </div>
      </div>
    </div>
  )
}
