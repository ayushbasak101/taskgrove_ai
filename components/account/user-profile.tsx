"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  FileText,
  Code,
  Palette,
  Video,
  Search,
  Calendar,
  Clock,
  Star,
  Award,
  BarChart,
  Edit,
  Github,
  Twitter,
  Linkedin,
  Globe,
  Sparkles,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [bio, setBio] = useState(
    "Product designer and developer working with AI tools to improve productivity and creativity.",
  )
  const [website, setWebsite] = useState("alexjohnson.com")
  const [twitter, setTwitter] = useState("@alexjohnson")
  const [github, setGithub] = useState("github.com/alexjohnson")
  const [linkedin, setLinkedin] = useState("linkedin.com/in/alexjohnson")

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-1">
        <Card className="glassmorphism">
          <CardHeader className="pb-2">
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center text-center">
              <Avatar className="h-24 w-24 mb-4">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Alex Johnson" />
                <AvatarFallback>AJ</AvatarFallback>
              </Avatar>

              <h2 className="text-xl font-bold">Alex Johnson</h2>
              <p className="text-sm text-gray-400 mb-2">alex@example.com</p>

              <Badge className="bg-indigo-600 mb-4">Pro Plan</Badge>

              {isEditing ? (
                <div className="w-full space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea id="bio" value={bio} onChange={(e) => setBio(e.target.value)} className="bg-gray-800" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="website">Website</Label>
                    <Input
                      id="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="bg-gray-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="twitter">Twitter</Label>
                    <Input
                      id="twitter"
                      value={twitter}
                      onChange={(e) => setTwitter(e.target.value)}
                      className="bg-gray-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub</Label>
                    <Input
                      id="github"
                      value={github}
                      onChange={(e) => setGithub(e.target.value)}
                      className="bg-gray-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn</Label>
                    <Input
                      id="linkedin"
                      value={linkedin}
                      onChange={(e) => setLinkedin(e.target.value)}
                      className="bg-gray-800"
                    />
                  </div>

                  <div className="flex space-x-2">
                    <Button className="w-full" onClick={() => setIsEditing(false)}>
                      Save Profile
                    </Button>
                    <Button variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-sm mb-4">{bio}</p>

                  <div className="w-full space-y-2 mb-4">
                    {website && (
                      <div className="flex items-center text-sm">
                        <Globe className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{website}</span>
                      </div>
                    )}
                    {twitter && (
                      <div className="flex items-center text-sm">
                        <Twitter className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{twitter}</span>
                      </div>
                    )}
                    {github && (
                      <div className="flex items-center text-sm">
                        <Github className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{github}</span>
                      </div>
                    )}
                    {linkedin && (
                      <div className="flex items-center text-sm">
                        <Linkedin className="h-4 w-4 mr-2 text-gray-400" />
                        <span>{linkedin}</span>
                      </div>
                    )}
                  </div>

                  <Button variant="outline" className="w-full" onClick={() => setIsEditing(true)}>
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-2">
        <Card className="glassmorphism">
          <Tabs defaultValue="activity">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="stats">Stats</TabsTrigger>
            </TabsList>

            <TabsContent value="activity" className="p-4">
              <h3 className="text-lg font-medium mb-4">Recent Activity</h3>

              <div className="space-y-4">
                {[
                  {
                    icon: FileText,
                    title: "Created a new document",
                    project: "Q1 Marketing Plan",
                    time: "2 hours ago",
                    color: "text-blue-400",
                  },
                  {
                    icon: Code,
                    title: "Updated code snippet",
                    project: "Authentication System",
                    time: "Yesterday",
                    color: "text-green-400",
                  },
                  {
                    icon: Palette,
                    title: "Created a new design",
                    project: "Mobile App UI",
                    time: "2 days ago",
                    color: "text-purple-400",
                  },
                  {
                    icon: Video,
                    title: "Edited video project",
                    project: "Product Demo",
                    time: "3 days ago",
                    color: "text-red-400",
                  },
                  {
                    icon: Search,
                    title: "Conducted research",
                    project: "Market Analysis",
                    time: "4 days ago",
                    color: "text-yellow-400",
                  },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start p-3 rounded-lg hover:bg-gray-800">
                    <div className={`p-2 rounded-md ${activity.color} bg-opacity-20 mr-3`}>
                      <activity.icon className={`h-5 w-5 ${activity.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium"></p>
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-gray-400">{activity.project}</p>
                    </div>
                    <div className="flex items-center text-xs text-gray-500">
                      <Clock className="h-3 w-3 mr-1" />
                      {activity.time}
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="projects" className="p-4">
              <h3 className="text-lg font-medium mb-4">Your Projects</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    title: "Marketing Campaign",
                    type: "Document",
                    icon: FileText,
                    lastEdited: "2 hours ago",
                    color: "bg-blue-500",
                  },
                  {
                    title: "User Authentication",
                    type: "Code",
                    icon: Code,
                    lastEdited: "Yesterday",
                    color: "bg-green-500",
                  },
                  {
                    title: "Website Redesign",
                    type: "Design",
                    icon: Palette,
                    lastEdited: "2 days ago",
                    color: "bg-purple-500",
                  },
                  {
                    title: "Product Demo",
                    type: "Video",
                    icon: Video,
                    lastEdited: "3 days ago",
                    color: "bg-red-500",
                  },
                  {
                    title: "Competitor Analysis",
                    type: "Research",
                    icon: Search,
                    lastEdited: "4 days ago",
                    color: "bg-yellow-500",
                  },
                  {
                    title: "Project Timeline",
                    type: "Planner",
                    icon: Calendar,
                    lastEdited: "5 days ago",
                    color: "bg-indigo-500",
                  },
                ].map((project, i) => (
                  <div key={i} className="border border-gray-800 rounded-lg p-4 hover:bg-gray-800 cursor-pointer">
                    <div className="flex items-center mb-2">
                      <div className={`p-2 rounded-md ${project.color} mr-3`}>
                        <project.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium">{project.title}</h4>
                        <p className="text-xs text-gray-400">{project.type}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                      <span>Last edited {project.lastEdited}</span>
                      <Button variant="ghost" size="sm" className="h-7 px-2">
                        <Star className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="stats" className="p-4">
              <h3 className="text-lg font-medium mb-4">Usage Statistics</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {[
                  { label: "Total Projects", value: "24", icon: FileText },
                  { label: "AI Credits Used", value: "1,245", icon: Sparkles },
                  { label: "Hours Saved", value: "47", icon: Clock },
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-800 rounded-lg p-4 text-center">
                    <stat.icon className="h-6 w-6 mx-auto mb-2 text-indigo-400" />
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">Feature Usage</h4>
                    <span className="text-xs text-gray-400">Last 30 days</span>
                  </div>
                  <div className="space-y-3">
                    {[
                      { feature: "Writing", percentage: 40 },
                      { feature: "Coding", percentage: 25 },
                      { feature: "Design", percentage: 15 },
                      { feature: "Video", percentage: 10 },
                      { feature: "Research", percentage: 10 },
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{item.feature}</span>
                          <span>{item.percentage}%</span>
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-indigo-600 h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <h4 className="font-medium">Achievements</h4>
                    <Button variant="link" size="sm" className="h-7 px-2">
                      View All
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "Power User", icon: Award },
                      { name: "AI Expert", icon: Sparkles },
                      { name: "Early Adopter", icon: Star },
                      { name: "Productivity Master", icon: BarChart },
                    ].map((badge, i) => (
                      <div key={i} className="flex flex-col items-center bg-gray-800 rounded-lg p-3 w-24">
                        <badge.icon className="h-6 w-6 text-yellow-400 mb-1" />
                        <span className="text-xs text-center">{badge.name}</span>
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
