import type { Metadata } from "next"
import VideoEditor from "@/components/features/video/editor"

export const metadata: Metadata = {
  title: "Video | TaskGrove AI",
  description: "AI-powered video editing",
}

export default function VideoPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col space-y-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Video</h1>
          <p className="text-gray-400">Edit videos with AI assistance</p>
        </div>

        <VideoEditor />
      </div>
    </div>
  )
}
