import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, including Visa, Mastercard, and American Express. We also support payment through UPI, NetBanking, and digital wallets for our Indian customers.",
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer:
      "Yes, you can upgrade your plan at any time and the new features will be immediately available. If you downgrade, the changes will take effect at the start of your next billing cycle.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, we offer a 14-day free trial of our Pro plan. No credit card is required to start your trial. You can explore all the features and decide if it's right for you.",
  },
  {
    question: "What happens when I reach my API request limit?",
    answer:
      "When you reach your API request limit, additional requests will be queued until the next day when your limit resets. For immediate access to more requests, you can upgrade your plan or purchase additional API credits.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "We offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with our service within the first 30 days, contact our support team for a full refund.",
  },
  {
    question: "How does the yearly billing discount work?",
    answer:
      "When you choose yearly billing, you get a 20% discount compared to the monthly plan. You'll be billed for the full year upfront, and your subscription will automatically renew at the end of the billing cycle unless canceled.",
  },
]

export default function PricingFAQ() {
  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Find answers to common questions about TaskGrove AI pricing and plans
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="text-center mt-12">
        <p className="text-gray-400 mb-4">Still have questions? We're here to help.</p>
        <div className="flex justify-center space-x-4">
          <a href="/contact" className="text-indigo-400 hover:text-indigo-300">
            Contact Support
          </a>
          <span className="text-gray-600">•</span>
          <a href="/docs" className="text-indigo-400 hover:text-indigo-300">
            Read Documentation
          </a>
        </div>
      </div>
    </div>
  )
}
