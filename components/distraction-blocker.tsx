"use client"

import { useState } from "react"
import { Plus, Trash2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { toast } from "@/hooks/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample data
const initialBlockedItems = [
  { id: 1, name: "Facebook", type: "website", url: "facebook.com", enabled: true },
  { id: 2, name: "Twitter", type: "website", url: "twitter.com", enabled: true },
  { id: 3, name: "Instagram", type: "website", url: "instagram.com", enabled: false },
  { id: 4, name: "YouTube", type: "website", url: "youtube.com", enabled: true },
  { id: 5, name: "Reddit", type: "website", url: "reddit.com", enabled: true },
]

export function DistractionBlocker() {
  const [blockedItems, setBlockedItems] = useState(initialBlockedItems)
  const [newItemName, setNewItemName] = useState("")
  const [newItemUrl, setNewItemUrl] = useState("")
  const [newItemType, setNewItemType] = useState("website")
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [blockingEnabled, setBlockingEnabled] = useState(true)

  const handleAddItem = () => {
    if (!newItemName || !newItemUrl) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      })
      return
    }

    const newItem = {
      id: Date.now(),
      name: newItemName,
      type: newItemType,
      url: newItemUrl,
      enabled: true,
    }

    setBlockedItems([...blockedItems, newItem])
    setNewItemName("")
    setNewItemUrl("")
    setNewItemType("website")
    setIsDialogOpen(false)

    toast({
      title: "Item added",
      description: `${newItemName} has been added to your block list.`,
    })
  }

  const handleToggleItem = (id: number) => {
    setBlockedItems(blockedItems.map((item) => (item.id === id ? { ...item, enabled: !item.enabled } : item)))
  }

  const handleRemoveItem = (id: number) => {
    const itemToRemove = blockedItems.find((item) => item.id === id)
    setBlockedItems(blockedItems.filter((item) => item.id !== id))

    toast({
      title: "Item removed",
      description: `${itemToRemove?.name} has been removed from your block list.`,
    })
  }

  const handleToggleBlocking = (enabled: boolean) => {
    setBlockingEnabled(enabled)

    toast({
      title: enabled ? "Blocking enabled" : "Blocking disabled",
      description: enabled ? "Distraction blocking is now active." : "Distraction blocking has been paused.",
    })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="blocking-toggle">Blocking Status</Label>
          <p className="text-sm text-muted-foreground">
            {blockingEnabled ? "Blocking is active" : "Blocking is paused"}
          </p>
        </div>
        <Switch id="blocking-toggle" checked={blockingEnabled} onCheckedChange={handleToggleBlocking} />
      </div>

      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium">Blocked Items</h3>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline">
              <Plus className="mr-2 h-4 w-4" />
              Add New
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Add New Blocked Item</DialogTitle>
              <DialogDescription>Add a website or application to your block list.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="item-name">Name</Label>
                <Input
                  id="item-name"
                  placeholder="e.g., Facebook"
                  value={newItemName}
                  onChange={(e) => setNewItemName(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="item-type">Type</Label>
                <Select value={newItemType} onValueChange={setNewItemType}>
                  <SelectTrigger id="item-type">
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Website</SelectItem>
                    <SelectItem value="application">Application</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="item-url">{newItemType === "website" ? "URL" : "Application Name"}</Label>
                <Input
                  id="item-url"
                  placeholder={newItemType === "website" ? "e.g., facebook.com" : "e.g., Discord"}
                  value={newItemUrl}
                  onChange={(e) => setNewItemUrl(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddItem}>Add Item</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-2">
        {blockedItems.length === 0 ? (
          <div className="flex h-24 items-center justify-center rounded-md border border-dashed">
            <p className="text-sm text-muted-foreground">No items in your block list</p>
          </div>
        ) : (
          blockedItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between rounded-md border p-3">
              <div className="flex items-center space-x-3">
                <div
                  className={`rounded-full p-1 ${
                    item.enabled && blockingEnabled ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {item.type === "website" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <line x1="2" y1="12" x2="22" y2="12" />
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <rect x="8" y="2" width="8" height="4" rx="1" />
                      <path d="M10.5 13a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{item.name}</p>
                  <p className="text-xs text-muted-foreground">{item.url}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  checked={item.enabled}
                  onCheckedChange={() => handleToggleItem(item.id)}
                  aria-label={`Toggle ${item.name}`}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveItem(item.id)}
                  className="h-8 w-8 text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                  <span className="sr-only">Remove {item.name}</span>
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="rounded-md bg-muted p-4">
        <div className="flex items-start gap-4">
          <Clock className="mt-0.5 h-5 w-5 text-muted-foreground" />
          <div>
            <h4 className="text-sm font-medium">Schedule Blocking</h4>
            <p className="text-sm text-muted-foreground">
              Set up automatic blocking schedules to maintain focus during specific times.
            </p>
            <Button
              variant="link"
              className="mt-2 h-auto p-0 text-sm"
              onClick={() => {
                toast({
                  title: "Coming soon",
                  description: "Scheduled blocking will be available in the next update.",
                })
              }}
            >
              Configure schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
