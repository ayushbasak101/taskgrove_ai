"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Free",
    description: "Basic access to TaskGrove AI tools",
    price: { monthly: "₹0", yearly: "₹0" },
    features: [
      "Access to basic AI writing tools",
      "Limited code generation",
      "Basic design templates",
      "1 project at a time",
      "Community support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "For individuals and freelancers",
    price: { monthly: "₹1,299", yearly: "₹₹12,470" },
    features: [
      "Full access to all AI tools",
      "Advanced code generation",
      "Custom design templates",
      "Unlimited projects",
      "Priority support",
      "API access (100 requests/day)",
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Team",
    description: "For teams and small businesses",
    price: { monthly: "₹1,699", yearly: "₹15,999" },
    features: [
      "Everything in Pro",
      "Team collaboration features",
      "Advanced project management",
      "Custom branding options",
      "Dedicated account manager",
      "API access (1000 requests/day)",
      "SSO authentication",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-2 bg-gray-800 p-1 rounded-lg">
          <span
            className={`px-3 py-1 rounded ${billingCycle === "monthly" ? "bg-indigo-600 text-white" : "text-gray-400"}`}
          >
            Monthly
          </span>
          <Switch
            checked={billingCycle === "yearly"}
            onCheckedChange={(checked) => setBillingCycle(checked ? "yearly" : "monthly")}
          />
          <span
            className={`px-3 py-1 rounded flex items-center ${billingCycle === "yearly" ? "bg-indigo-600 text-white" : "text-gray-400"}`}
          >
            Yearly
            <span className="ml-1 text-xs bg-green-500 text-white px-1.5 py-0.5 rounded-full">Save 20%</span>
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan) => (
          <Card
            key={plan.name}
            className={`glassmorphism relative ${plan.popular ? "border-indigo-500 shadow-lg shadow-indigo-500/20" : ""}`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-0 right-0 flex justify-center">
                <span className="bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                  Most Popular
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-4xl font-bold">{plan.price[billingCycle]}</p>
                <p className="text-sm text-gray-400">{billingCycle === "monthly" ? "per month" : "per year"}</p>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button
                className={`w-full ${plan.popular ? "bg-indigo-600 hover:bg-indigo-700" : ""}`}
                variant={plan.popular ? "default" : "outline"}
              >
                {plan.cta}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Enterprise</h3>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Need a custom solution for your organization? Contact our sales team for a tailored plan that meets your
          specific requirements.
        </p>
        <Button variant="outline" size="lg">
          Contact Enterprise Sales
        </Button>
      </div>
    </div>
  )
}
