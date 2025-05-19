"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Bell, User, Clock, Shield, Palette } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "@/hooks/use-toast"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const accountFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

const notificationFormSchema = z.object({
  sessionNotifications: z.boolean().default(true),
  achievementNotifications: z.boolean().default(true),
  emailDigest: z.boolean().default(false),
  notificationSound: z.string().default("chime"),
  soundVolume: z.array(z.number()).default([70]),
})

const focusFormSchema = z.object({
  defaultFocusTime: z.string().default("25"),
  defaultBreakTime: z.string().default("5"),
  autoStartBreaks: z.boolean().default(false),
  longBreakInterval: z.string().default("4"),
  longBreakDuration: z.string().default("15"),
})

const blockerFormSchema = z.object({
  enableBlockingDuringFocus: z.boolean().default(true),
  blockSocialMedia: z.boolean().default(true),
  blockEntertainment: z.boolean().default(true),
  allowListMode: z.boolean().default(false),
})

const appearanceFormSchema = z.object({
  theme: z.string().default("system"),
  accentColor: z.string().default("purple"),
  reducedMotion: z.boolean().default(false),
  compactMode: z.boolean().default(false),
})

export function SettingsForm() {
  const [activeTab, setActiveTab] = useState("account")

  // Account form
  const accountForm = useForm<z.infer<typeof accountFormSchema>>({
    resolver: zodResolver(accountFormSchema),
    defaultValues: {
      name: "John Doe",
      email: "john@example.com",
    },
  })

  // Notification form
  const notificationForm = useForm<z.infer<typeof notificationFormSchema>>({
    resolver: zodResolver(notificationFormSchema),
    defaultValues: {
      sessionNotifications: true,
      achievementNotifications: true,
      emailDigest: false,
      notificationSound: "chime",
      soundVolume: [70],
    },
  })

  // Focus form
  const focusForm = useForm<z.infer<typeof focusFormSchema>>({
    resolver: zodResolver(focusFormSchema),
    defaultValues: {
      defaultFocusTime: "25",
      defaultBreakTime: "5",
      autoStartBreaks: false,
      longBreakInterval: "4",
      longBreakDuration: "15",
    },
  })

  // Blocker form
  const blockerForm = useForm<z.infer<typeof blockerFormSchema>>({
    resolver: zodResolver(blockerFormSchema),
    defaultValues: {
      enableBlockingDuringFocus: true,
      blockSocialMedia: true,
      blockEntertainment: true,
      allowListMode: false,
    },
  })

  // Appearance form
  const appearanceForm = useForm<z.infer<typeof appearanceFormSchema>>({
    resolver: zodResolver(appearanceFormSchema),
    defaultValues: {
      theme: "system",
      accentColor: "purple",
      reducedMotion: false,
      compactMode: false,
    },
  })

  // Form submission handlers
  function onAccountSubmit(values: z.infer<typeof accountFormSchema>) {
    toast({
      title: "Account settings updated",
      description: "Your account settings have been saved.",
    })
    console.log(values)
  }

  function onNotificationSubmit(values: z.infer<typeof notificationFormSchema>) {
    toast({
      title: "Notification settings updated",
      description: "Your notification settings have been saved.",
    })
    console.log(values)
  }

  function onFocusSubmit(values: z.infer<typeof focusFormSchema>) {
    toast({
      title: "Focus settings updated",
      description: "Your focus settings have been saved.",
    })
    console.log(values)
  }

  function onBlockerSubmit(values: z.infer<typeof blockerFormSchema>) {
    toast({
      title: "Blocker settings updated",
      description: "Your blocker settings have been saved.",
    })
    console.log(values)
  }

  function onAppearanceSubmit(values: z.infer<typeof appearanceFormSchema>) {
    toast({
      title: "Appearance settings updated",
      description: "Your appearance settings have been saved.",
    })
    console.log(values)
  }

  return (
    <Tabs defaultValue="account" value={activeTab} onValueChange={setActiveTab}>
      <TabsList className="mb-6 grid w-full grid-cols-5">
        <TabsTrigger value="account" className="flex items-center gap-2">
          <User className="h-4 w-4" />
          <span className="hidden sm:inline">Account</span>
        </TabsTrigger>
        <TabsTrigger value="notifications" className="flex items-center gap-2">
          <Bell className="h-4 w-4" />
          <span className="hidden sm:inline">Notifications</span>
        </TabsTrigger>
        <TabsTrigger value="focus" className="flex items-center gap-2">
          <Clock className="h-4 w-4" />
          <span className="hidden sm:inline">Focus</span>
        </TabsTrigger>
        <TabsTrigger value="blocker" className="flex items-center gap-2">
          <Shield className="h-4 w-4" />
          <span className="hidden sm:inline">Blocker</span>
        </TabsTrigger>
        <TabsTrigger value="appearance" className="flex items-center gap-2">
          <Palette className="h-4 w-4" />
          <span className="hidden sm:inline">Appearance</span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="account">
        <Form {...accountForm}>
          <form onSubmit={accountForm.handleSubmit(onAccountSubmit)} className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-medium">Account Settings</h3>
              <div className="space-y-4">
                <FormField
                  control={accountForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={accountForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="mb-4 text-lg font-medium">Security</h3>
              <div className="space-y-4">
                <Button variant="outline" type="button">
                  Change Password
                </Button>
                <Button variant="outline" type="button">
                  Two-Factor Authentication
                </Button>
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="mb-4 text-lg font-medium">Data</h3>
              <div className="space-y-4">
                <Button variant="outline" type="button">
                  Export Data
                </Button>
                <Button variant="outline" type="button" className="text-destructive">
                  Delete Account
                </Button>
              </div>
            </div>
            <Button type="submit">Save Account Settings</Button>
          </form>
        </Form>
      </TabsContent>

      <TabsContent value="notifications">
        <Form {...notificationForm}>
          <form onSubmit={notificationForm.handleSubmit(onNotificationSubmit)} className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-medium">Notification Settings</h3>
              <div className="space-y-4">
                <FormField
                  control={notificationForm.control}
                  name="sessionNotifications"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Session Notifications</FormLabel>
                        <FormDescription>Receive notifications when focus sessions end</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={notificationForm.control}
                  name="achievementNotifications"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Achievement Notifications</FormLabel>
                        <FormDescription>Receive notifications when you unlock achievements</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={notificationForm.control}
                  name="emailDigest"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Weekly Email Digest</FormLabel>
                        <FormDescription>Receive a weekly summary of your productivity</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="mb-4 text-lg font-medium">Sound Settings</h3>
              <div className="space-y-4">
                <FormField
                  control={notificationForm.control}
                  name="notificationSound"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Notification Sound</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a sound" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="chime">Chime</SelectItem>
                          <SelectItem value="bell">Bell</SelectItem>
                          <SelectItem value="ding">Ding</SelectItem>
                          <SelectItem value="chirp">Chirp</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={notificationForm.control}
                  name="soundVolume"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sound Volume</FormLabel>
                      <FormControl>
                        <div className="space-y-1">
                          <Slider value={field.value} onValueChange={field.onChange} max={100} step={1} />
                          <div className="flex justify-between text-xs text-muted-foreground">
                            <span>0%</span>
                            <span>{field.value}%</span>
                            <span>100%</span>
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit">Save Notification Settings</Button>
          </form>
        </Form>
      </TabsContent>

      <TabsContent value="focus">
        <Form {...focusForm}>
          <form onSubmit={focusForm.handleSubmit(onFocusSubmit)} className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-medium">Focus Timer Settings</h3>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={focusForm.control}
                    name="defaultFocusTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Default Focus Time (minutes)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="15">15 minutes</SelectItem>
                            <SelectItem value="25">25 minutes</SelectItem>
                            <SelectItem value="30">30 minutes</SelectItem>
                            <SelectItem value="45">45 minutes</SelectItem>
                            <SelectItem value="60">60 minutes</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={focusForm.control}
                    name="defaultBreakTime"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Default Break Time (minutes)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="5">5 minutes</SelectItem>
                            <SelectItem value="10">10 minutes</SelectItem>
                            <SelectItem value="15">15 minutes</SelectItem>
                            <SelectItem value="20">20 minutes</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={focusForm.control}
                  name="autoStartBreaks"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Auto-start Breaks</FormLabel>
                        <FormDescription>Automatically start break timer when focus session ends</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="mb-4 text-lg font-medium">Long Break Settings</h3>
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <FormField
                    control={focusForm.control}
                    name="longBreakInterval"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Long Break Interval</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select interval" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="2">Every 2 sessions</SelectItem>
                            <SelectItem value="3">Every 3 sessions</SelectItem>
                            <SelectItem value="4">Every 4 sessions</SelectItem>
                            <SelectItem value="5">Every 5 sessions</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>Number of focus sessions before a long break</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={focusForm.control}
                    name="longBreakDuration"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Long Break Duration (minutes)</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select duration" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="15">15 minutes</SelectItem>
                            <SelectItem value="20">20 minutes</SelectItem>
                            <SelectItem value="25">25 minutes</SelectItem>
                            <SelectItem value="30">30 minutes</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </div>
            <Button type="submit">Save Focus Settings</Button>
          </form>
        </Form>
      </TabsContent>

      <TabsContent value="blocker">
        <Form {...blockerForm}>
          <form onSubmit={blockerForm.handleSubmit(onBlockerSubmit)} className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-medium">Distraction Blocker Settings</h3>
              <div className="space-y-4">
                <FormField
                  control={blockerForm.control}
                  name="enableBlockingDuringFocus"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Enable Blocking During Focus</FormLabel>
                        <FormDescription>Automatically block distractions during focus sessions</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={blockerForm.control}
                  name="blockSocialMedia"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Block Social Media</FormLabel>
                        <FormDescription>Block social media websites during focus sessions</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={blockerForm.control}
                  name="blockEntertainment"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Block Entertainment</FormLabel>
                        <FormDescription>Block entertainment websites during focus sessions</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={blockerForm.control}
                  name="allowListMode"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Allow List Mode</FormLabel>
                        <FormDescription>Only allow specific websites during focus sessions</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit">Save Blocker Settings</Button>
          </form>
        </Form>
      </TabsContent>

      <TabsContent value="appearance">
        <Form {...appearanceForm}>
          <form onSubmit={appearanceForm.handleSubmit(onAppearanceSubmit)} className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-medium">Appearance Settings</h3>
              <div className="space-y-4">
                <FormField
                  control={appearanceForm.control}
                  name="theme"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Theme</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select theme" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="light">Light</SelectItem>
                          <SelectItem value="dark">Dark</SelectItem>
                          <SelectItem value="system">System</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={appearanceForm.control}
                  name="accentColor"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Accent Color</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select accent color" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="purple">Purple</SelectItem>
                          <SelectItem value="pink">Pink</SelectItem>
                          <SelectItem value="blue">Blue</SelectItem>
                          <SelectItem value="green">Green</SelectItem>
                          <SelectItem value="orange">Orange</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={appearanceForm.control}
                  name="reducedMotion"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Reduced Motion</FormLabel>
                        <FormDescription>Reduce animations and motion effects</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={appearanceForm.control}
                  name="compactMode"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">Compact Mode</FormLabel>
                        <FormDescription>Use a more compact UI layout</FormDescription>
                      </div>
                      <FormControl>
                        <Switch checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <Button type="submit">Save Appearance Settings</Button>
          </form>
        </Form>
      </TabsContent>
    </Tabs>
  )
}
