import { Search, BarChart2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Analyze Your Site",
    description: "Deep technical SEO analysis and keyword research.",
    icon: Search,
    image: "/seo-analysis.png"
  },
  {
    title: "Track Performance",
    description: "Monitor rankings, traffic, and key SEO metrics.",
    icon: BarChart2,
    image: "/seo-tracking.png"
  },
  {
    title: "Optimize & Grow",
    description: "Implement AI-powered recommendations for better rankings.",
    icon: Rocket,
    image: "/seo-growth.png"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          How Our SEO Server Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative"
              style={{
                animation: "fade-up 0.5s ease-out forwards",
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <step.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 mb-4">{step.description}</p>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};