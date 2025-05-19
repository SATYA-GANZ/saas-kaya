"use client"

import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/hooks/use-toast"

export function FocusSettings() {
  const [autoStartBreaks, setAutoStartBreaks] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [soundVolume, setSoundVolume] = useState([70])
  const [theme, setTheme] = useState("default")

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your focus settings have been updated.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="auto-breaks">Auto-start breaks</Label>
            <p className="text-sm text-muted-foreground">Automatically start break timer when focus session ends</p>
          </div>
          <Switch id="auto-breaks" checked={autoStartBreaks} onCheckedChange={setAutoStartBreaks} />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="notifications">Notifications</Label>
            <p className="text-sm text-muted-foreground">Receive notifications when sessions end</p>
          </div>
          <Switch id="notifications" checked={notifications} onCheckedChange={setNotifications} />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="sound-volume">Sound Volume</Label>
            <span className="text-sm text-muted-foreground">{soundVolume[0]}%</span>
          </div>
          <Slider id="sound-volume" value={soundVolume} onValueChange={setSoundVolume} max={100} step={1} />
        </div>

        <div className="space-y-2">
          <Label htmlFor="theme">Timer Theme</Label>
          <Select value={theme} onValueChange={setTheme}>
            <SelectTrigger id="theme">
              <SelectValue placeholder="Select a theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="minimal">Minimal</SelectItem>
              <SelectItem value="nature">Nature</SelectItem>
              <SelectItem value="space">Space</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Button onClick={handleSave} className="w-full">
        Save Settings
      </Button>
    </div>
  )
}
