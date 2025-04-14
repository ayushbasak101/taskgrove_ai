import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Unify Your Productivity with TaskGrove AI
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto">
            The all-in-one AI productivity platform that brings together writing, coding, design, video editing,
            research, and task planning tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
              Get Started for Free
            </Button>
            <Button size="lg" variant="outline">
              See How It Works
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">All Your Tools in One Place</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              TaskGrove AI combines powerful AI tools to streamline your workflow and boost productivity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Writing",
                description:
                  "Create compelling content with AI assistance. Perfect for blogs, marketing copy, and more.",
                icon: "📝",
              },
              {
                title: "Code Generation",
                description: "Write better code faster with AI suggestions and autocompletion.",
                icon: "💻",
              },
              {
                title: "Design Tools",
                description: "Create stunning visuals with AI-powered design suggestions and templates.",
                icon: "🎨",
              },
              {
                title: "Video Editing",
                description: "Edit videos with AI assistance for cuts, transitions, and subtitles.",
                icon: "🎬",
              },
              {
                title: "Research Assistant",
                description: "Find and summarize information quickly with AI-powered research tools.",
                icon: "🔍",
              },
              {
                title: "Task Planning",
                description: "Organize your work with AI scheduling and task management.",
                icon: "📅",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Join thousands of professionals who trust TaskGrove AI for their productivity needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  "TaskGrove AI has completely transformed how I work. I can now accomplish in hours what used to take days.",
                author: "Priya Sharma",
                role: "Content Creator",
              },
              {
                quote:
                  "The code generation feature is incredible. It's like having a senior developer looking over your shoulder at all times.",
                author: "Rahul Patel",
                role: "Software Engineer",
              },
              {
                quote: "As a designer, the AI design suggestions have been a game-changer for my creative process.",
                author: "Ananya Gupta",
                role: "UI/UX Designer",
              },
            ].map((testimonial, index) => (
              <div key={index} className="glassmorphism p-6 rounded-lg">
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-[#141416]">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Boost Your Productivity?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join thousands of professionals who use TaskGrove AI to work smarter, not harder.
          </p>

          <div className="bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { plan: "Free", price: "₹0", feature: "Basic access" },
                { plan: "Pro", price: "₹499", feature: "Full access", popular: true },
                { plan: "Team", price: "₹1,499", feature: "Team collaboration" },
              ].map((tier, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg text-center ${
                    tier.popular ? "bg-indigo-900 border-2 border-indigo-500 relative" : "bg-gray-700"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute -top-3 left-0 right-0 flex justify-center">
                      <span className="bg-indigo-500 text-white text-xs px-3 py-1 rounded-full">Most Popular</span>
                    </div>
                  )}
                  <h3 className="text-lg font-semibold mb-2">{tier.plan}</h3>
                  <p className="text-2xl font-bold mb-2">
                    {tier.price}
                    <span className="text-sm text-gray-400">/mo</span>
                  </p>
                  <p className="text-sm text-gray-300">{tier.feature}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/pricing">
                  View Pricing Details
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-indigo-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 flex items-center justify-center">
            <Sparkles className="h-8 w-8 mr-2 text-yellow-400" />
            Start Your AI Productivity Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join over 10,000+ users who have transformed their workflow with TaskGrove AI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-900 hover:bg-gray-100">
              Sign Up for Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-indigo-800">
              Schedule a Demo
            </Button>
          </div>

          <div className="mt-8 flex items-center justify-center text-sm">
            <CheckCircle2 className="h-5 w-5 mr-2 text-green-400" />
            No credit card required for free plan
          </div>
        </div>
      </section>
    </div>
  )
}
