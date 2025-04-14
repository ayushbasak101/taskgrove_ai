"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Copy, Key, Save, Upload } from "lucide-react"

export default function AccountSettings() {
  const [apiKey, setApiKey] = useState("sk_taskgrove_1234567890abcdef")
  const [showApiKey, setShowApiKey] = useState(false)

  return (
    <Tabs defaultValue="profile" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="subscription">Subscription</TabsTrigger>
        <TabsTrigger value="api">API Keys</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>

      <TabsContent value="profile">
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Update your account information and profile settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col items-center space-y-2">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <Button variant="outline" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Change Avatar
                </Button>
              </div>

              <div className="flex-1 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Alex" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Johnson" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" defaultValue="alex@example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company (Optional)</Label>
                  <Input id="company" defaultValue="TaskGrove Inc." />
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-lg font-medium mb-4">Password</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Current Password</Label>
                  <Input id="currentPassword" type="password" />
                </div>
                <div></div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">New Password</Label>
                  <Input id="newPassword" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm New Password</Label>
                  <Input id="confirmPassword" type="password" />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button>
                <Save className="h-4 w-4 mr-2" />
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="subscription">
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Subscription Management</CardTitle>
            <CardDescription>View and manage your current subscription plan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center">
                    <h3 className="text-xl font-medium">Pro Plan</h3>
                    <Badge className="ml-2 bg-green-600">Active</Badge>
                  </div>
                  <p className="text-gray-400 mt-1">Billed monthly at ₹499</p>
                </div>
                <Button variant="outline">Change Plan</Button>
              </div>

              <div className="mt-4 text-sm text-gray-400">
                Your subscription will renew automatically on May 15, 2025. You can cancel anytime before the renewal
                date.
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-lg font-medium mb-4">Payment Method</h3>
              <div className="bg-gray-800 rounded-lg p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <div className="h-10 w-16 bg-gray-700 rounded mr-4 flex items-center justify-center text-xs font-medium">
                    VISA
                  </div>
                  <div>
                    <p className="font-medium">Visa ending in 4242</p>
                    <p className="text-sm text-gray-400">Expires 12/2026</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Update
                </Button>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-lg font-medium mb-4">Billing History</h3>
              <div className="space-y-4">
                {[
                  { date: "Apr 15, 2025", amount: "₹499", status: "Paid" },
                  { date: "Mar 15, 2025", amount: "₹499", status: "Paid" },
                  { date: "Feb 15, 2025", amount: "₹499", status: "Paid" },
                ].map((invoice, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-gray-800 rounded-lg">
                    <div>
                      <p className="font-medium">{invoice.date}</p>
                      <p className="text-sm text-gray-400">Pro Plan - Monthly</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{invoice.amount}</p>
                      <p className="text-sm text-green-500">{invoice.status}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6 flex justify-between">
              <Button variant="destructive">Cancel Subscription</Button>
              <Button variant="outline">Download Invoices</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="api">
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>API Keys</CardTitle>
            <CardDescription>Manage your API keys for integrating with TaskGrove AI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium">Your API Key</h3>
                  <p className="text-sm text-gray-400">Use this key to authenticate API requests</p>
                </div>
                <Button variant="outline" size="sm" onClick={() => setShowApiKey(!showApiKey)}>
                  {showApiKey ? "Hide" : "Show"} Key
                </Button>
              </div>

              <div className="flex">
                <div className="bg-gray-800 rounded-l-lg p-3 flex-1 font-mono text-sm overflow-hidden">
                  {showApiKey ? apiKey : "•".repeat(apiKey.length)}
                </div>
                <Button
                  variant="secondary"
                  className="rounded-l-none"
                  onClick={() => navigator.clipboard.writeText(apiKey)}
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copy
                </Button>
              </div>

              <div className="flex items-center space-x-2 text-sm text-gray-400">
                <Key className="h-4 w-4" />
                <span>Last used: 2 hours ago</span>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <h3 className="text-lg font-medium mb-4">API Usage</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">API Requests (Today)</span>
                    <span className="text-sm">42/100</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "42%" }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">API Requests (This Month)</span>
                    <span className="text-sm">1,245/3,000</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: "41.5%" }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">API Documentation</h3>
                <Button variant="outline" size="sm">
                  View Docs
                </Button>
              </div>
              <p className="text-sm text-gray-400">
                Learn how to integrate TaskGrove AI into your applications with our comprehensive API documentation.
              </p>
            </div>

            <div className="border-t border-gray-800 pt-6 flex justify-between">
              <Button variant="destructive">Revoke Key</Button>
              <Button>Generate New Key</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="notifications">
        <Card className="glassmorphism">
          <CardHeader>
            <CardTitle>Notification Settings</CardTitle>
            <CardDescription>Manage how and when you receive notifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Email Notifications</h3>

              {[
                { id: "email-updates", label: "Product updates and announcements" },
                { id: "email-tips", label: "Tips and tutorials" },
                { id: "email-billing", label: "Billing and subscription notices" },
                { id: "email-security", label: "Security alerts" },
              ].map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <Label htmlFor={item.id} className="flex-1">
                    {item.label}
                  </Label>
                  <Switch id={item.id} defaultChecked={item.id === "email-billing" || item.id === "email-security"} />
                </div>
              ))}
            </div>

            <div className="border-t border-gray-800 pt-6 space-y-4">
              <h3 className="text-lg font-medium">In-App Notifications</h3>

              {[
                { id: "app-comments", label: "Comments on your projects" },
                { id: "app-mentions", label: "Mentions and tags" },
                { id: "app-shares", label: "When someone shares content with you" },
                { id: "app-ai", label: "AI-generated suggestions" },
              ].map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <Label htmlFor={item.id} className="flex-1">
                    {item.label}
                  </Label>
                  <Switch id={item.id} defaultChecked />
                </div>
              ))}
            </div>

            <div className="border-t border-gray-800 pt-6 space-y-4">
              <h3 className="text-lg font-medium">Notification Schedule</h3>
              <p className="text-sm text-gray-400">Choose when you want to receive non-critical notifications</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quiet-start">Quiet Hours Start</Label>
                  <Input id="quiet-start" type="time" defaultValue="22:00" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quiet-end">Quiet Hours End</Label>
                  <Input id="quiet-end" type="time" defaultValue="08:00" />
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="weekend-pause" />
                <Label htmlFor="weekend-pause">Pause non-critical notifications on weekends</Label>
              </div>
            </div>

            <div className="flex justify-end">
              <Button>Save Preferences</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
