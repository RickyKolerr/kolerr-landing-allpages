import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the matchmaking system work?",
    answer: "Our AI analyzes multiple factors including audience demographics, engagement rates, and content quality to find the perfect influencers for your campaign goals."
  },
  {
    question: "What metrics do you provide in campaign reports?",
    answer: "We provide comprehensive analytics including reach, engagement rates, click-through rates, conversion tracking, and ROI calculations."
  },
  {
    question: "What is the SLOT feature, and how does it help?",
    answer: "SLOT (Scheduled Live Opportunity Tracking) helps organize your campaigns into time slots, making it easier to manage multiple influencers and track performance in real-time."
  },
  {
    question: "How do you ensure brand safety?",
    answer: "We thoroughly vet all influencers and provide content approval workflows to ensure your brand guidelines are followed."
  }
];

export const BrandFAQ = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gray-900 rounded-lg border border-gray-800"
            >
              <AccordionTrigger className="px-6 text-white hover:text-purple-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};