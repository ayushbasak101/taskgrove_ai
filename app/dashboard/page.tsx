import type { Metadata } from "next"
import DashboardGreeting from "@/components/dashboard/greeting"
import QuickLinks from "@/components/dashboard/quick-links"
import ActivityFeed from "@/components/dashboard/activity-feed"
import AIAssistant from "@/components/dashboard/ai-assistant"

export const metadata: Metadata = {
  title: "Dashboard | TaskGrove AI",
  description: "Your personalized TaskGrove AI dashboard",
}

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <DashboardGreeting name="Alex" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 space-y-6">
          <QuickLinks />
          <ActivityFeed />
        </div>
        <div className="lg:col-span-1">
          <AIAssistant />
        </div>
      </div>
    </div>
  )
}
