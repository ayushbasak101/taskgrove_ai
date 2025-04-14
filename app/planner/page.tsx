import type { Metadata } from "next"
import PlannerTool from "@/components/features/planner/planner-tool"

export const metadata: Metadata = {
  title: "Planner | TaskGrove AI",
  description: "AI-powered task and project planning",
}

export default function PlannerPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Planner</h1>
          <p className="text-gray-400">Organize tasks and projects with AI assistance</p>
        </div>

        <PlannerTool />
      </div>
    </div>
  )
}
