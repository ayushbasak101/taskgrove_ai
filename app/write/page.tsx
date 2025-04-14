import type { Metadata } from "next"
import WriteEditor from "@/components/features/write/editor"

export const metadata: Metadata = {
  title: "Write | TaskGrove AI",
  description: "AI-powered writing assistant",
}

export default function WritePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Write</h1>
          <p className="text-gray-400">Create and edit documents with AI assistance</p>
        </div>

        <WriteEditor />
      </div>
    </div>
  )
}
