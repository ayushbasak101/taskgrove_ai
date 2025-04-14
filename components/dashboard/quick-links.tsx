import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Code, Palette, Video } from "lucide-react"

const quickLinks = [
  {
    title: "New Document",
    description: "Create a new document with AI assistance",
    icon: FileText,
    href: "/write/new",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "New Code Snippet",
    description: "Start a new coding project with AI help",
    icon: Code,
    href: "/code/new",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "New Design",
    description: "Create a new design with AI suggestions",
    icon: Palette,
    href: "/design/new",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "New Video Project",
    description: "Start editing a new video with AI",
    icon: Video,
    href: "/video/new",
    color: "from-orange-500 to-red-500",
  },
]

export default function QuickLinks() {
  return (
    <Card className="glassmorphism">
      <CardHeader>
        <CardTitle>Quick Links</CardTitle>
        <CardDescription>Start a new project with TaskGrove AI</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickLinks.map((link) => (
            <Link key={link.title} href={link.href}>
              <div className="flex items-start p-4 rounded-lg transition-all duration-200 hover:bg-gray-800/50 cursor-pointer h-full">
                <div className={`p-2 rounded-md bg-gradient-to-br ${link.color} mr-4`}>
                  <link.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-medium">{link.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{link.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
