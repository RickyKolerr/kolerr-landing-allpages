import { Brain, BarChart2, TrendingUp } from "lucide-react";

const benefits = [
  {
    title: "Smart Matchmaking",
    description: "Discover KOLs with the right audience and engagement for your niche.",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Real-Time Campaign Tracking",
    description: "Monitor campaign performance and ROI effortlessly.",
    icon: BarChart2,
    gradient: "from-pink-500 to-red-500"
  },
  {
    title: "Trend Insights",
    description: "Leverage AI-generated trend analysis for better targeting.",
    icon: TrendingUp,
    gradient: "from-red-500 to-orange-500"
  }
];

export const BrandBenefits = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 transition-transform duration-300 hover:scale-105"
              style={{
                animation: "fade-up 0.5s ease-out forwards",
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${benefit.gradient} mb-4`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};