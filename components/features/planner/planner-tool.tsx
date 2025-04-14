"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  CalendarIcon,
  Clock,
  Plus,
  CheckCircle2,
  MoreHorizontal,
  Sparkles,
  ArrowUpDown,
  Filter,
  Save,
  Download,
  AlertCircle,
  ListTodo,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { format } from "date-fns"

// Task type definition
type Task = {
  id: string
  title: string
  description?: string
  status: "todo" | "in-progress" | "completed"
  priority: "low" | "medium" | "high"
  dueDate?: Date
  tags: string[]
  project?: string
}

// Project type definition
type Project = {
  id: string
  name: string
  color: string
  taskCount: number
}

export default function PlannerTool() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Create marketing campaign for Q2",
      description: "Develop comprehensive marketing strategy for the second quarter",
      status: "in-progress",
      priority: "high",
      dueDate: new Date(2025, 4, 15),
      tags: ["marketing", "strategy"],
      project: "Marketing",
    },
    {
      id: "2",
      title: "Update user authentication system",
      description: "Implement OAuth 2.0 and improve security measures",
      status: "todo",
      priority: "medium",
      dueDate: new Date(2025, 4, 20),
      tags: ["development", "security"],
      project: "Development",
    },
    {
      id: "3",
      title: "Design new product landing page",
      description: "Create mockups and prototypes for the new product page",
      status: "todo",
      priority: "high",
      dueDate: new Date(2025, 4, 10),
      tags: ["design", "website"],
      project: "Design",
    },
    {
      id: "4",
      title: "Quarterly budget review",
      description: "Review and adjust budget allocations for Q2",
      status: "completed",
      priority: "high",
      dueDate: new Date(2025, 3, 30),
      tags: ["finance", "planning"],
      project: "Finance",
    },
    {
      id: "5",
      title: "Team performance evaluations",
      description: "Complete performance reviews for all team members",
      status: "in-progress",
      priority: "medium",
      dueDate: new Date(2025, 4, 25),
      tags: ["hr", "management"],
      project: "HR",
    },
  ])

  const [projects, setProjects] = useState<Project[]>([
    { id: "1", name: "Marketing", color: "bg-purple-500", taskCount: 4 },
    { id: "2", name: "Development", color: "bg-blue-500", taskCount: 7 },
    { id: "3", name: "Design", color: "bg-pink-500", taskCount: 3 },
    { id: "4", name: "Finance", color: "bg-green-500", taskCount: 2 },
    { id: "5", name: "HR", color: "bg-yellow-500", taskCount: 5 },
  ])

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "medium",
    project: "",
  })

  const [date, setDate] = useState<Date>()
  const [aiPrompt, setAiPrompt] = useState("")
  const [view, setView] = useState<"list" | "calendar" | "timeline">("list")
  const [filter, setFilter] = useState<"all" | "todo" | "in-progress" | "completed">("all")

  const handleAddTask = () => {
    if (!newTask.title.trim()) return

    const task: Task = {
      id: Math.random().toString(36).substring(2, 9),
      title: newTask.title,
      description: newTask.description,
      status: "todo",
      priority: newTask.priority as "low" | "medium" | "high",
      dueDate: date,
      tags: [],
      project: newTask.project || undefined,
    }

    setTasks([task, ...tasks])
    setNewTask({
      title: "",
      description: "",
      priority: "medium",
      project: "",
    })
    setDate(undefined)
  }

  const handleStatusChange = (taskId: string, status: "todo" | "in-progress" | "completed") => {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, status }
        }
        return task
      }),
    )
  }

  const handleAIGenerate = () => {
    if (!aiPrompt.trim()) return

    // Simulate AI response
    setTimeout(() => {
      alert(`AI is analyzing your request: "${aiPrompt}" and will optimize your schedule.`)
      setAiPrompt("")
    }, 1000)
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true
    return task.status === filter
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500"
      case "medium":
        return "text-yellow-500"
      case "low":
        return "text-green-500"
      default:
        return "text-gray-500"
    }
  }

  const getProjectColor = (projectName?: string) => {
    if (!projectName) return "bg-gray-500"
    const project = projects.find((p) => p.name === projectName)
    return project?.color || "bg-gray-500"
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-1">
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                New Project
              </Button>

              <div className="space-y-2">
                <div
                  className="flex items-center p-2 rounded-md bg-gray-800/50 cursor-pointer"
                  onClick={() => setFilter("all")}
                >
                  <ListTodo className="h-4 w-4 mr-2 text-indigo-400" />
                  <span className="text-sm font-medium">All Tasks</span>
                  <Badge className="ml-auto bg-gray-700">{tasks.length}</Badge>
                </div>

                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="flex items-center p-2 rounded-md hover:bg-gray-800 cursor-pointer"
                    onClick={() => setNewTask({ ...newTask, project: project.name })}
                  >
                    <div className={`h-3 w-3 rounded-full ${project.color} mr-2`}></div>
                    <span className="text-sm">{project.name}</span>
                    <Badge className="ml-auto bg-gray-700">{project.taskCount}</Badge>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-800 pt-4">
                <h3 className="text-sm font-medium mb-2">Upcoming Deadlines</h3>
                <div className="space-y-2">
                  {tasks
                    .filter((task) => task.dueDate && task.status !== "completed")
                    .sort((a, b) => {
                      if (a.dueDate && b.dueDate) {
                        return a.dueDate.getTime() - b.dueDate.getTime()
                      }
                      return 0
                    })
                    .slice(0, 3)
                    .map((task) => (
                      <div key={task.id} className="flex items-center p-2 rounded-md hover:bg-gray-800">
                        <AlertCircle className={`h-4 w-4 mr-2 ${getPriorityColor(task.priority)}`} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm truncate">{task.title}</p>
                          <div className="flex items-center mt-1">
                            <CalendarIcon className="h-3 w-3 text-gray-500 mr-1" />
                            <p className="text-xs text-gray-500">
                              {task.dueDate ? format(task.dueDate, "MMM d, yyyy") : "No date"}
                            </p>
                          </div>
                        </div>
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
          <CardHeader className="pb-2">
            <div className="flex justify-between items-center">
              <CardTitle>Tasks</CardTitle>
              <div className="flex items-center space-x-2">
                <Select value={view} onValueChange={(value) => setView(value as any)}>
                  <SelectTrigger className="w-[130px] h-8 text-xs bg-gray-800">
                    <SelectValue placeholder="View" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="list">List View</SelectItem>
                    <SelectItem value="calendar">Calendar View</SelectItem>
                    <SelectItem value="timeline">Timeline View</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline" size="sm" className="h-8">
                  <Filter className="h-3 w-3 mr-1" />
                  Filter
                </Button>
                <Button variant="outline" size="sm" className="h-8">
                  <ArrowUpDown className="h-3 w-3 mr-1" />
                  Sort
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {view === "list" && (
              <div className="space-y-4">
                <div className="flex space-x-2 mb-4">
                  <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
                    All
                  </Button>
                  <Button
                    variant={filter === "todo" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("todo")}
                  >
                    To Do
                  </Button>
                  <Button
                    variant={filter === "in-progress" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("in-progress")}
                  >
                    In Progress
                  </Button>
                  <Button
                    variant={filter === "completed" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setFilter("completed")}
                  >
                    Completed
                  </Button>
                </div>

                <div className="space-y-2">
                  {filteredTasks.length > 0 ? (
                    filteredTasks.map((task) => (
                      <div
                        key={task.id}
                        className="p-3 rounded-lg border border-gray-800 hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="flex items-start">
                          <div className="pt-0.5">
                            <Checkbox
                              checked={task.status === "completed"}
                              onCheckedChange={(checked) => {
                                handleStatusChange(task.id, checked ? "completed" : "todo")
                              }}
                            />
                          </div>
                          <div className="ml-3 flex-1 min-w-0">
                            <p
                              className={`font-medium ${task.status === "completed" ? "line-through text-gray-500" : ""}`}
                            >
                              {task.title}
                            </p>
                            {task.description && (
                              <p className="text-sm text-gray-400 mt-1 line-clamp-2">{task.description}</p>
                            )}
                            <div className="flex flex-wrap items-center gap-2 mt-2">
                              {task.project && (
                                <div
                                  className={`px-2 py-0.5 rounded text-xs text-white ${getProjectColor(task.project)}`}
                                >
                                  {task.project}
                                </div>
                              )}
                              {task.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                              {task.dueDate && (
                                <div className="flex items-center text-xs text-gray-400">
                                  <CalendarIcon className="h-3 w-3 mr-1" />
                                  {format(task.dueDate, "MMM d, yyyy")}
                                </div>
                              )}
                              <div className={`flex items-center text-xs ${getPriorityColor(task.priority)} ml-auto`}>
                                <AlertCircle className="h-3 w-3 mr-1" />
                                {task.priority}
                              </div>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8 ml-2">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <CheckCircle2 className="h-12 w-12 mx-auto text-gray-600 mb-2" />
                      <p className="text-gray-400">No tasks found</p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {view === "calendar" && (
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="mx-auto"
                    classNames={{
                      day_today: "bg-indigo-600 text-white",
                    }}
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Tasks for {date ? format(date, "MMMM d, yyyy") : "Today"}</h3>
                  {filteredTasks
                    .filter(
                      (task) =>
                        task.dueDate &&
                        date &&
                        task.dueDate.getDate() === date.getDate() &&
                        task.dueDate.getMonth() === date.getMonth() &&
                        task.dueDate.getFullYear() === date.getFullYear(),
                    )
                    .map((task) => (
                      <div
                        key={task.id}
                        className="p-3 rounded-lg border border-gray-800 hover:bg-gray-800/50 transition-colors"
                      >
                        <div className="flex items-center">
                          <Checkbox
                            checked={task.status === "completed"}
                            onCheckedChange={(checked) => {
                              handleStatusChange(task.id, checked ? "completed" : "todo")
                            }}
                          />
                          <span className={`ml-3 ${task.status === "completed" ? "line-through text-gray-500" : ""}`}>
                            {task.title}
                          </span>
                          <div className={`ml-auto text-xs ${getPriorityColor(task.priority)}`}>{task.priority}</div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {view === "timeline" && (
              <div className="space-y-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium">Project Timeline</h3>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Save className="h-3 w-3 mr-1" />
                      Save
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="h-3 w-3 mr-1" />
                      Export
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <div className="min-w-[800px]">
                    {/* Timeline header */}
                    <div className="flex border-b border-gray-700 pb-2 mb-4">
                      <div className="w-1/4">Project</div>
                      <div className="w-3/4 flex">
                        {Array.from({ length: 12 }, (_, i) => (
                          <div key={i} className="flex-1 text-center text-xs text-gray-400">
                            {new Date(2025, i, 1).toLocaleString("default", { month: "short" })}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Timeline rows */}
                    {projects.map((project) => (
                      <div key={project.id} className="flex items-center mb-4">
                        <div className="w-1/4 flex items-center">
                          <div className={`h-3 w-3 rounded-full ${project.color} mr-2`}></div>
                          <span>{project.name}</span>
                        </div>
                        <div className="w-3/4 relative h-6">
                          {/* Example timeline bars - in a real app, these would be calculated based on task dates */}
                          <div
                            className={`absolute h-4 rounded-full ${project.color} opacity-80`}
                            style={{
                              left: `${(project.id.charCodeAt(0) % 3) * 10}%`,
                              width: `${30 + (project.id.charCodeAt(0) % 5) * 10}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <Card className="glassmorphism">
          <Tabs defaultValue="new-task">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="new-task">New Task</TabsTrigger>
              <TabsTrigger value="ai">AI Assistant</TabsTrigger>
            </TabsList>
            <TabsContent value="new-task" className="p-4">
              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Task title"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    className="bg-gray-800"
                  />
                </div>

                <div>
                  <Textarea
                    placeholder="Description (optional)"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    className="min-h-[100px] bg-gray-800"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Select
                      value={newTask.priority}
                      onValueChange={(value) => setNewTask({ ...newTask, priority: value })}
                    >
                      <SelectTrigger className="bg-gray-800">
                        <SelectValue placeholder="Priority" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Select
                      value={newTask.project}
                      onValueChange={(value) => setNewTask({ ...newTask, project: value })}
                    >
                      <SelectTrigger className="bg-gray-800">
                        <SelectValue placeholder="Project" />
                      </SelectTrigger>
                      <SelectContent>
                        {projects.map((project) => (
                          <SelectItem key={project.id} value={project.name}>
                            {project.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full justify-start bg-gray-800">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a due date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        classNames={{
                          day_today: "bg-indigo-600 text-white",
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <div className="flex space-x-2">
                  <Button className="w-full" onClick={handleAddTask} disabled={!newTask.title.trim()}>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Task
                  </Button>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="ai" className="p-4">
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">AI Planning Assistant</h3>
                  <p className="text-xs text-gray-400 mb-4">
                    Describe what you want to plan and let AI help you organize your tasks.
                  </p>

                  <Textarea
                    value={aiPrompt}
                    onChange={(e) => setAiPrompt(e.target.value)}
                    placeholder="E.g., Plan my marketing campaign for the next quarter..."
                    className="min-h-[100px] bg-gray-800"
                  />

                  <Button className="w-full mt-2" onClick={handleAIGenerate} disabled={!aiPrompt.trim()}>
                    <Sparkles className="h-4 w-4 mr-2" />
                    Generate Plan
                  </Button>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <h3 className="text-sm font-medium mb-2">Suggestions</h3>
                  <div className="space-y-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setAiPrompt("Optimize my task schedule for this week")}
                    >
                      Optimize my schedule
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setAiPrompt("Break down my project into manageable tasks")}
                    >
                      Break down my project
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => setAiPrompt("Suggest deadlines based on task dependencies")}
                    >
                      Suggest deadlines
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        <Card className="glassmorphism mt-6">
          <CardHeader className="pb-2">
            <CardTitle>Analytics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-2">Task Status</h3>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Completed</span>
                      <span>
                        {tasks.filter((t) => t.status === "completed").length}/{tasks.length}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-green-500 h-2 rounded-full"
                        style={{
                          width: `${(tasks.filter((t) => t.status === "completed").length / tasks.length) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>In Progress</span>
                      <span>
                        {tasks.filter((t) => t.status === "in-progress").length}/{tasks.length}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-yellow-500 h-2 rounded-full"
                        style={{
                          width: `${(tasks.filter((t) => t.status === "in-progress").length / tasks.length) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>To Do</span>
                      <span>
                        {tasks.filter((t) => t.status === "todo").length}/{tasks.length}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-indigo-500 h-2 rounded-full"
                        style={{
                          width: `${(tasks.filter((t) => t.status === "todo").length / tasks.length) * 100}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-4">
                <h3 className="text-sm font-medium mb-2">Productivity Score</h3>
                <div className="flex items-center justify-center">
                  <div className="relative h-24 w-24">
                    <svg className="h-24 w-24" viewBox="0 0 100 100">
                      <circle
                        className="text-gray-700"
                        strokeWidth="8"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                      <circle
                        className="text-indigo-500"
                        strokeWidth="8"
                        strokeDasharray={251.2}
                        strokeDashoffset={251.2 * (1 - 0.75)}
                        strokeLinecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="40"
                        cx="50"
                        cy="50"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold">75%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-800 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium">Recent Activity</h3>
                  <Button variant="link" size="sm" className="h-7 px-2 text-xs">
                    View All
                  </Button>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center text-xs">
                    <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center mr-2">
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </div>
                    <div className="flex-1">
                      <p>Completed "Quarterly budget review"</p>
                      <p className="text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center text-xs">
                    <div className="h-6 w-6 rounded-full bg-yellow-600 flex items-center justify-center mr-2">
                      <Clock className="h-3 w-3 text-white" />
                    </div>
                    <div className="flex-1">
                      <p>Started "Team performance evaluations"</p>
                      <p className="text-gray-500">Yesterday</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
