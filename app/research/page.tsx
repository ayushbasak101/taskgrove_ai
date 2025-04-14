import type { Metadata } from "next"
import ResearchTool from "@/components/features/research/research-tool"

export const metadata: Metadata = {
  title: "Research | TaskGrove AI",
  description: "AI-powered research assistant",
}

export default function ResearchPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Research</h1>
          <p className="text-gray-400">Find and summarize information with AI assistance</p>
        </div>

        <ResearchTool />
      </div>
    </div>
  )
}
