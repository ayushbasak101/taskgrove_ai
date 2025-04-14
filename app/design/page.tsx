import type { Metadata } from "next"
import DesignEditor from "@/components/features/design/editor"

export const metadata: Metadata = {
  title: "Design | TaskGrove AI",
  description: "AI-powered design tools",
}

export default function DesignPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Design</h1>
          <p className="text-gray-400">Create and edit designs with AI assistance</p>
        </div>

        <DesignEditor />
      </div>
    </div>
  )
}
