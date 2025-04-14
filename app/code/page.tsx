import type { Metadata } from "next"
import CodeEditor from "@/components/features/code/editor"

export const metadata: Metadata = {
  title: "Code | TaskGrove AI",
  description: "AI-powered code editor",
}

export default function CodePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Code</h1>
          <p className="text-gray-400">Write and edit code with AI assistance</p>
        </div>

        <CodeEditor />
      </div>
    </div>
  )
}
