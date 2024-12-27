import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can I manage campaigns for multiple brands simultaneously?",
    answer: "Yes, our platform is designed to handle multiple brand campaigns simultaneously. You can organize campaigns by client, track performance, and manage influencer relationships all in one place.",
  },
  {
    question: "How do I customize reports with my agency branding?",
    answer: "Our white-label reporting feature allows you to add your agency's logo, colors, and branding elements to all client reports. You can customize templates and export them in various formats.",
  },
  {
    question: "Can I set up different roles for my team members?",
    answer: "Absolutely! You can assign different roles and permissions to team members, such as Campaign Manager, Data Analyst, or Account Executive, controlling their access to specific features and client data.",
  },
];

export const AgencyFAQ = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-300 text-lg">
            Common questions about our agency solutions
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-gradient-to-br from-purple-900/50 to-black rounded-xl border border-purple-500/20 px-6"
            >
              <AccordionTrigger className="text-white hover:text-purple-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};