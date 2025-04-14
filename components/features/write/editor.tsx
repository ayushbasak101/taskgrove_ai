"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Sparkles,
  Save,
  FileText,
} from "lucide-react"

export default function WriteEditor() {
  const [title, setTitle] = useState("Untitled Document")
  const [content, setContent] = useState("")
  const [aiPrompt, setAiPrompt] = useState("")

  const handleAIGenerate = () => {
    if (!aiPrompt.trim()) return

    // Simulate AI response
    setTimeout(() => {
      setContent(
        (prev) =>
          prev +
          "\n\n" +
          "Here's some AI-generated content based on your prompt. TaskGrove AI helps you create high-quality content quickly and efficiently. You can edit this text or ask for more specific suggestions to refine your document.",
      )
      setAiPrompt("")
    }, 1000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3">
        <Card className="glassmorphism p-6">
          <div className="mb-4">
            <Input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="text-2xl font-bold border-none bg-transparent focus-visible:ring-0 px-0 h-auto"
              placeholder="Document Title"
            />
          </div>

          <div className="flex flex-wrap gap-2 mb-4 border-b border-gray-800 pb-4">
            <Button variant="ghost" size="icon">
              <Bold className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Italic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Underline className="h-4 w-4" />
            </Button>
            <div className="h-6 w-px bg-gray-800 mx-1" />
            <Button variant="ghost" size="icon">
              <List className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <ListOrdered className="h-4 w-4" />
            </Button>
            <div className="h-6 w-px bg-gray-800 mx-1" />
            <Button variant="ghost" size="icon">
              <AlignLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <AlignCenter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <AlignRight className="h-4 w-4" />
            </Button>
            <div className="ml-auto">
              <Button variant="outline" size="sm" className="mr-2">
                <Save className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>

          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing or use AI to generate content..."
            className="min-h-[400px] border-none bg-transparent focus-visible:ring-0 resize-none"
          />
        </Card>
      </div>

      <div className="lg:col-span-1">
        <Card className="glassmorphism">
          <Tabs defaultValue="ai">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="ai">AI Assistant</TabsTrigger>
              <TabsTrigger value="docs">Documents</TabsTrigger>
            </TabsList>
            <TabsContent value="ai" className="p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">AI Writing Assistant</h3>
                  <p className="text-xs text-gray-400 mb-4">
                    Describe what you want to write about and let AI help you generate content.
                  </p>

                  <Textarea
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="E.g., Write an introduction about artificial intelligence..."
                    className="min-h-[100px] bg-gray-800"
                  />

                  <Button className="w-full mt-2" onClick={handleAIGenerate} disabled={!aiPrompt.trim()}>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Content
                  </Button>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="text-sm font-medium mb-2">Suggestions</h3>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setAiPrompt("Improve the writing style")}
                    >
                      Improve writing style
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setAiPrompt("Make it more concise")}
                    >
                      Make it more concise
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setAiPrompt("Fix grammar and spelling")}
                    >
                      Fix grammar and spelling
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="docs" className="p-4">
              <div className="space-y-4">
                <h3 className="text-sm font-medium mb-2">Recent Documents</h3>
                <div className="space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center p-2 rounded-md hover:bg-gray-800">
                      <FileText className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-sm">Document {i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
