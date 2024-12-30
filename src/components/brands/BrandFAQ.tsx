import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does your SEO analysis work?",
    answer: "Our AI-powered system analyzes your website's technical structure, content quality, backlink profile, and keyword opportunities to provide comprehensive SEO recommendations."
  },
  {
    question: "What metrics do you track?",
    answer: "We track keyword rankings, organic traffic, backlinks, page speed, core web vitals, and over 200+ technical SEO factors."
  },
  {
    question: "How long does it take to see results?",
    answer: "While SEO is a long-term strategy, most clients see initial improvements within 2-3 months, with significant results in 6-12 months."
  },
  {
    question: "Do you provide competitor analysis?",
    answer: "Yes, we analyze your competitors' SEO strategies, keywords, and backlink profiles to help you gain a competitive advantage."
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
              <AccordionTrigger className="px-6 text-white hover:text-blue-400">
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