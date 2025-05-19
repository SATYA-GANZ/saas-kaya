"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function FocusHistory() {
  // Sample data - would be fetched from API in a real app
  const sessions = [
    {
      id: 1,
      date: "Today, 10:30 AM",
      duration: "25 minutes",
      task: "Project Research",
      completed: true,
    },
    {
      id: 2,
      date: "Today, 9:00 AM",
      duration: "50 minutes",
      task: "Email Management",
      completed: true,
    },
    {
      id: 3,
      date: "Yesterday, 4:15 PM",
      duration: "25 minutes",
      task: "Report Writing",
      completed: true,
    },
    {
      id: 4,
      date: "Yesterday, 2:30 PM",
      duration: "25 minutes",
      task: "Code Review",
      completed: false,
    },
    {
      id: 5,
      date: "Yesterday, 11:00 AM",
      duration: "50 minutes",
      task: "Team Meeting",
      completed: true,
    },
  ]

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date & Time</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Task</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sessions.map((session) => (
            <TableRow key={session.id}>
              <TableCell className="font-medium">{session.date}</TableCell>
              <TableCell>{session.duration}</TableCell>
              <TableCell>{session.task}</TableCell>
              <TableCell>
                {session.completed ? (
                  <Badge
                    variant="outline"
                    className="bg-green-50 text-green-700 hover:bg-green-50 dark:bg-green-900/20 dark:text-green-400 dark:hover:bg-green-900/20"
                  >
                    Completed
                  </Badge>
                ) : (
                  <Badge
                    variant="outline"
                    className="bg-amber-50 text-amber-700 hover:bg-amber-50 dark:bg-amber-900/20 dark:text-amber-400 dark:hover:bg-amber-900/20"
                  >
                    Interrupted
                  </Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
