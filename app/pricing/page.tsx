import type { Metadata } from "next"
import PricingPlans from "@/components/pricing/pricing-plans"
import PricingFAQ from "@/components/pricing/pricing-faq"

export const metadata: Metadata = {
  title: "Pricing | TaskGrove AI",
  description: "TaskGrove AI pricing plans and features",
}

export default function PricingPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Choose the plan that's right for you and start creating with TaskGrove AI
        </p>
      </div>

      <PricingPlans />

      <div className="mt-24">
        <PricingFAQ />
      </div>
    </div>
  )
}
