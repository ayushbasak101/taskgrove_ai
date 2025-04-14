"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Globe, Clock, Bookmark, Share2, Download, Sparkles, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function ResearchTool() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchResults, setSearchResults] = useState<any[]>([])
  const [selectedResult, setSelectedResult] = useState<any>(null)
  const [summary, setSummary] = useState("")

  const handleSearch = () => {
    if (!searchQuery.trim()) return

    setIsSearching(true)

    // Simulate search results
    setTimeout(() => {
      setSearchResults([
        {
          id: 1,
          title: "The Impact of Artificial Intelligence on Modern Productivity",
          source: "AI Research Journal",
          url: "https://example.com/ai-productivity",
          snippet:
            "This comprehensive study examines how AI tools are transforming workplace productivity across various industries...",
          date: "March 15, 2025",
        },
        {
          id: 2,
          title: "Productivity Revolution: How AI is Changing the Way We Work",
          source: "Tech Insights",
          url: "https://example.com/productivity-revolution",
          snippet:
            "The integration of AI into daily workflows has led to significant improvements in efficiency and output quality...",
          date: "February 28, 2025",
        },
        {
          id: 3,
          title: "Case Study: TaskGrove AI Implementation in Enterprise Settings",
          source: "Business Technology Review",
          url: "https://example.com/taskgrove-case-study",
          snippet:
            "This case study analyzes the implementation of TaskGrove AI in three Fortune 500 companies and the resulting productivity gains...",
          date: "April 2, 2025",
        },
        {
          id: 4,
          title: "The Future of Work: AI Assistants and Human Collaboration",
          source: "Future Trends Magazine",
          url: "https://example.com/future-work-ai",
          snippet:
            "As AI assistants become more sophisticated, the nature of human work is evolving toward higher-level strategic thinking...",
          date: "January 10, 2025",
        },
      ])
      setIsSearching(false)
    }, 1500)
  }

  const handleResultSelect = (result: any) => {
    setSelectedResult(result)

    // Simulate AI summary generation
    setTimeout(() => {
      setSummary(`This article discusses how AI tools like TaskGrove are transforming workplace productivity. Key points include:

1. AI-powered writing tools can increase content creation speed by up to 70%
2. Code generation assistants reduce development time by approximately 40%
3. Design tools with AI suggestions improve iteration cycles by 60%
4. Video editing with AI assistance cuts production time in half
5. Research tools provide 3x faster information gathering and synthesis

The author concludes that integrated AI productivity platforms represent the future of knowledge work, with potential productivity gains of 30-50% across organizations that implement them effectively.`)
    }, 1000)
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Research Query</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Input
                  placeholder="Enter your research topic..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-gray-800"
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <Button onClick={handleSearch} disabled={isSearching || !searchQuery.trim()}>
                  <Search className="h-4 w-4 mr-2" />
                  {isSearching ? "Searching..." : "Search"}
                </Button>
              </div>

              <div className="border-t border-gray-800 pt-4">
                <h3 className="text-sm font-medium mb-2">Recent Searches</h3>
                <div className="space-y-2">
                  {["AI productivity tools", "Machine learning basics", "Data visualization techniques"].map(
                    (search, i) => (
                      <div
                        key={i}
                        className="flex items-center p-2 rounded-md hover:bg-gray-800 cursor-pointer"
                        onClick={() => setSearchQuery(search)}
                      >
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        <span className="text-sm">{search}</span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="border-t border-gray-800 pt-4">
                <h3 className="text-sm font-medium mb-2">Saved Research</h3>
                <div className="space-y-2">
                  {["Future of remote work", "AI ethics guidelines", "Productivity measurement"].map((topic, i) => (
                    <div key={i} className="flex items-center p-2 rounded-md hover:bg-gray-800 cursor-pointer">
                      <Bookmark className="h-4 w-4 mr-2 text-gray-400" />
                      <span className="text-sm">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <Card className="glassmorphism">
          <Tabs defaultValue="results">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="results">Search Results</TabsTrigger>
              <TabsTrigger value="summary" disabled={!selectedResult}>
                AI Summary
              </TabsTrigger>
            </TabsList>
            <TabsContent value="results" className="p-4">
              {searchResults.length > 0 ? (
                <div className="space-y-4">
                  {searchResults.map((result) => (
                    <div
                      key={result.id}
                      className={`p-4 rounded-lg border ${selectedResult?.id === result.id ? "border-indigo-500 bg-gray-800/50" : "border-gray-800 hover:bg-gray-800/30"} cursor-pointer`}
                      onClick={() => handleResultSelect(result)}
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-indigo-400">{result.title}</h3>
                        <Badge variant="outline" className="ml-2">
                          {result.source}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-300 mt-2">{result.snippet}</p>
                      <div className="flex justify-between items-center mt-3 text-xs text-gray-400">
                        <span>{result.date}</span>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            <Bookmark className="h-3 w-3 mr-1" />
                            Save
                          </Button>
                          <Button variant="ghost" size="sm" className="h-7 px-2">
                            <ExternalLink className="h-3 w-3 mr-1" />
                            Visit
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : isSearching ? (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mb-4"></div>
                  <p className="text-gray-400">Searching for results...</p>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-12">
                  <Search className="h-12 w-12 text-gray-600 mb-4" />
                  <p className="text-gray-400">Enter a search query to find research materials</p>
                </div>
              )}
            </TabsContent>
            <TabsContent value="summary" className="p-4">
              {selectedResult && (
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-xl font-medium">{selectedResult.title}</h2>
                      <p className="text-sm text-gray-400">
                        Source: {selectedResult.source} • {selectedResult.date}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                    </div>
                  </div>

                  <div className="border-t border-gray-800 pt-4">
                    <div className="flex items-center mb-4">
                      <Sparkles className="h-5 w-5 text-indigo-400 mr-2" />
                      <h3 className="text-lg font-medium">AI Summary</h3>
                    </div>

                    {summary ? (
                      <div className="bg-gray-800 rounded-lg p-4 text-gray-200">
                        <p className="whitespace-pre-line">{summary}</p>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-32 bg-gray-800 rounded-lg">
                        <div className="animate-pulse text-gray-400">Generating summary...</div>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-gray-800 pt-4">
                    <h3 className="text-lg font-medium mb-4">Key Insights</h3>
                    <div className="space-y-2">
                      <div className="bg-gray-800 rounded-lg p-3">
                        <p className="text-sm">AI tools can increase productivity by 30-50% across organizations.</p>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3">
                        <p className="text-sm">
                          Integration of multiple AI tools provides greater benefits than isolated solutions.
                        </p>
                      </div>
                      <div className="bg-gray-800 rounded-lg p-3">
                        <p className="text-sm">
                          Human-AI collaboration is more effective than either working independently.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center mt-4">
                    <Button>
                      <Globe className="h-4 w-4 mr-2" />
                      Read Full Article
                    </Button>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  )
}
