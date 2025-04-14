"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Save,
  Download,
  Upload,
  Sparkles,
  Scissors,
  Volume2,
  Music,
  Type,
  ImageIcon,
  Film,
  Plus,
} from "lucide-react"
import { Slider } from "@/components/ui/slider"

export default function VideoEditor() {
  const [projectName, setProjectName] = useState("Untitled Video")
  const [aiPrompt, setAiPrompt] = useState("")
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration] = useState(120) // 2 minutes in seconds

  const handleAIGenerate = () => {
    if (!aiPrompt.trim()) return

    // Simulate AI response
    setTimeout(() => {
      // In a real app, this would generate video edits based on the prompt
      alert(`Generating video edits based on: "${aiPrompt}"`)
      setAiPrompt("")
    }, 1000)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <Card className="glassmorphism p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="w-48 bg-gray-800"
              />
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Import
              </Button>
              <Button variant="outline" size="sm">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>

          {/* Video preview */}
          <div className="bg-black aspect-video rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <Film className="h-12 w-12 mx-auto mb-2 text-gray-600" />
              <p className="text-gray-400">Video preview area</p>
            </div>
          </div>

          {/* Video controls */}
          <div className="flex flex-col space-y-2 mb-6">
            <div className="flex items-center justify-between">
              <span className="text-sm">{formatTime(currentTime)}</span>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <SkipBack className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full bg-indigo-600"
                  onClick={() => setIsPlaying(!isPlaying)}
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <SkipForward className="h-4 w-4" />
                </Button>
              </div>
              <span className="text-sm">{formatTime(duration)}</span>
            </div>
            <Slider
              value={[currentTime]}
              max={duration}
              step={1}
              onValueChange={(value) => setCurrentTime(value[0])}
              className="w-full"
            />
          </div>

          {/* Timeline */}
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium">Timeline</h3>
              <div className="flex space-x-2">
                <Button variant="ghost" size="sm">
                  <Scissors className="h-4 w-4 mr-1" />
                  Split
                </Button>
                <Button variant="ghost" size="sm">
                  <Plus className="h-4 w-4 mr-1" />
                  Add Track
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              {/* Video track */}
              <div className="flex items-center">
                <div className="w-20 text-xs text-gray-400">Video</div>
                <div className="flex-1 h-10 bg-gray-700 rounded relative">
                  <div className="absolute inset-y-0 left-0 w-1/3 bg-indigo-800 rounded"></div>
                  <div className="absolute inset-y-0 left-[40%] w-1/4 bg-indigo-800 rounded"></div>
                </div>
              </div>

              {/* Audio track */}
              <div className="flex items-center">
                <div className="w-20 text-xs text-gray-400">Audio</div>
                <div className="flex-1 h-10 bg-gray-700 rounded relative">
                  <div className="absolute inset-y-0 left-0 w-2/3 bg-green-800 rounded"></div>
                </div>
              </div>

              {/* Text track */}
              <div className="flex items-center">
                <div className="w-20 text-xs text-gray-400">Text</div>
                <div className="flex-1 h-10 bg-gray-700 rounded relative">
                  <div className="absolute inset-y-0 left-[20%] w-1/5 bg-yellow-800 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <Card className="glassmorphism">
          <Tabs defaultValue="ai">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ai">AI Assistant</TabsTrigger>
              <TabsTrigger value="media">Media</TabsTrigger>
            </TabsList>
            <TabsContent value="ai" className="p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">AI Video Assistant</h3>
                  <p className="text-xs text-gray-400 mb-4">
                    Describe what you want to do with your video and let AI help you.
                  </p>

                  <Textarea
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="E.g., Add subtitles to my video automatically..."
                    className="min-h-[100px] bg-gray-800"
                  />

                  <Button className="w-full mt-2" onClick={handleAIGenerate} disabled={!aiPrompt.trim()}>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Edits
                  </Button>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="text-sm font-medium mb-2">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setAiPrompt("Trim unnecessary parts")}
                    >
                      Trim unnecessary parts
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setAiPrompt("Add automatic subtitles")}
                    >
                      Add automatic subtitles
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setAiPrompt("Enhance audio quality")}
                    >
                      Enhance audio quality
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="media" className="p-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium mb-2">Media Library</h3>

                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Film className="h-4 w-4 mr-2" />
                    Video Clips
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <ImageIcon className="h-4 w-4 mr-2" />
                    Images
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Music className="h-4 w-4 mr-2" />
                    Audio
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Type className="h-4 w-4 mr-2" />
                    Text & Titles
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Volume2 className="h-4 w-4 mr-2" />
                    Sound Effects
                  </Button>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="text-sm font-medium mb-2">Recent Media</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="aspect-video bg-gray-700 rounded-md hover:bg-gray-600 cursor-pointer flex items-center justify-center"
                      >
                        <span className="text-xs text-gray-400">Clip {i}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
