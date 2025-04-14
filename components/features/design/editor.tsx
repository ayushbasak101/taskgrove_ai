"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Save,
  Download,
  Sparkles,
  ImageIcon,
  Square,
  Circle,
  Type,
  Layers,
  Move,
  Palette,
  Grid,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DesignEditor() {
  const [designName, setDesignName] = useState("Untitled Design")
  const [aiPrompt, setAiPrompt] = useState("")
  const [canvasSize, setCanvasSize] = useState("1080x1080")
  const [zoom, setZoom] = useState(100)

  const handleAIGenerate = () => {
    if (!aiPrompt.trim()) return

    // Simulate AI response
    setTimeout(() => {
      // In a real app, this would generate a design based on the prompt
      alert(`Generating design based on: "${aiPrompt}"`)
      setAiPrompt("")
    }, 1000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <Card className="glassmorphism p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <Input value={designName} onChange={(e) => setDesignName(e.target.value)} className="w-48 bg-gray-800" />
              <Select value={canvasSize} onValueChange={setCanvasSize}>
                <SelectTrigger className="w-40 ml-2 bg-gray-800">
                  <SelectValue placeholder="Canvas Size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1080x1080">Instagram Post (1080×1080)</SelectItem>
                  <SelectItem value="1200x628">Facebook Post (1200×628)</SelectItem>
                  <SelectItem value="1920x1080">HD (1920×1080)</SelectItem>
                  <SelectItem value="custom">Custom Size</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Undo className="h-4 w-4 mr-2" />
                Undo
              </Button>
              <Button variant="outline" size="sm">
                <Redo className="h-4 w-4 mr-2" />
                Redo
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

          <div className="flex h-[600px]">
            {/* Tools sidebar */}
            <div className="w-12 bg-gray-800 rounded-l-lg flex flex-col items-center py-4 space-y-6">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Move className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Square className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Circle className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Type className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ImageIcon className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Layers className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Palette className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Grid className="h-5 w-5" />
              </Button>
            </div>

            {/* Canvas area */}
            <div className="flex-1 bg-gray-900 flex items-center justify-center relative">
              <div
                className="bg-white rounded-lg shadow-lg flex items-center justify-center"
                style={{
                  width: "500px",
                  height: "500px",
                  transform: `scale(${zoom / 100})`,
                  transition: "transform 0.2s ease",
                }}
              >
                <p className="text-gray-400 text-center">
                  Your design canvas
                  <br />
                  Use the tools on the left or AI suggestions on the right
                </p>
              </div>

              {/* Zoom controls */}
              <div className="absolute bottom-4 right-4 flex items-center bg-gray-800 rounded-lg p-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setZoom(Math.max(50, zoom - 10))}
                >
                  <ZoomOut className="h-4 w-4" />
                </Button>
                <span className="mx-2 text-sm">{zoom}%</span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setZoom(Math.min(200, zoom + 10))}
                >
                  <ZoomIn className="h-4 w-4" />
                </Button>
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
              <TabsTrigger value="templates">Templates</TabsTrigger>
            </TabsList>
            <TabsContent value="ai" className="p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">AI Design Assistant</h3>
                  <p className="text-xs text-gray-400 mb-4">
                    Describe what you want to design and let AI help you generate it.
                  </p>

                  <Textarea
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="E.g., Create a minimalist logo for a coffee shop..."
                    className="min-h-[100px] bg-gray-800"
                  />

                  <Button className="w-full mt-2" onClick={handleAIGenerate} disabled={!aiPrompt.trim()}>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Design
                  </Button>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="text-sm font-medium mb-2">Design Suggestions</h3>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setAiPrompt("Create a modern logo")}
                    >
                      Create a modern logo
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setAiPrompt("Design a social media banner")}
                    >
                      Design a social media banner
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setAiPrompt("Generate a product mockup")}
                    >
                      Generate a product mockup
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="templates" className="p-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium mb-2">Design Templates</h3>
                <div className="grid grid-cols-2 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gray-800 rounded-md hover:bg-gray-700 cursor-pointer flex items-center justify-center"
                    >
                      <span className="text-xs text-gray-400">Template {i}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-2">
                  Browse More Templates
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
