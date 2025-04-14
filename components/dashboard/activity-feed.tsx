import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Code, Palette, Video, Clock } from "lucide-react"

const activities = [
  {
    id: 1,
    title: "Marketing Copy Draft",
    type: "document",
    icon: FileText,
    time: "2 hours ago",
    action: "edited",
  },
  {
    id: 2,
    title: "User Authentication",
    type: "code",
    icon: Code,
    time: "Yesterday",
    action: "created",
  },
  {
    id: 3,
    title: "Landing Page Mockup",
    type: "design",
    icon: Palette,
    time: "2 days ago",
    action: "commented on",
  },
  {
    id: 4,
    title: "Product Demo",
    type: "video",
    icon: Video,
    time: "3 days ago",
    action: "completed",
  },
]

export default function ActivityFeed() {
  return (
    <Card className="glassmorphism">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Your recent projects and activities</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start">
              <div className="flex-shrink-0 mr-4">
                <activity.icon className="h-5 w-5 text-gray-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">
                  You {activity.action} <span className="font-semibold">{activity.title}</span>
                </p>
                <div className="flex items-center mt-1">
                  <Clock className="h-3 w-3 text-gray-500 mr-1" />
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
