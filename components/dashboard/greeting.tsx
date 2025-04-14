"use client"

import { useEffect, useState } from "react"

interface DashboardGreetingProps {
  name: string
}

export default function DashboardGreeting({ name }: DashboardGreetingProps) {
  const [greeting, setGreeting] = useState("Hello")

  useEffect(() => {
    const hour = new Date().getHours()
    if (hour < 12) setGreeting("Good morning")
    else if (hour < 18) setGreeting("Good afternoon")
    else setGreeting("Good evening")
  }, [])

  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-3xl font-bold tracking-tight">
        {greeting}, {name}!
      </h1>
      <p className="text-gray-400">Welcome back to your TaskGrove AI dashboard. Here's what's happening today.</p>
    </div>
  )
}
