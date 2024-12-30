import { Brain, BarChart2, TrendingUp, Shield, Users, Zap } from "lucide-react";

const benefits = [
  {
    title: "Smart Matchmaking",
    description: "Our AI analyzes audience demographics, engagement rates, and content quality to find perfect matches.",
    icon: Brain,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "Real-Time Analytics",
    description: "Track campaign performance, ROI, and engagement metrics in a comprehensive dashboard.",
    icon: BarChart2,
    gradient: "from-pink-500 to-red-500"
  },
  {
    title: "Trend Analysis",
    description: "Stay ahead with AI-powered trend predictions and content recommendations.",
    icon: TrendingUp,
    gradient: "from-red-500 to-orange-500"
  },
  {
    title: "Brand Safety",
    description: "Advanced content screening and brand alignment verification systems.",
    icon: Shield,
    gradient: "from-orange-500 to-yellow-500"
  },
  {
    title: "Global Reach",
    description: "Access a vast network of verified influencers across multiple platforms.",
    icon: Users,
    gradient: "from-yellow-500 to-green-500"
  },
  {
    title: "Quick Launch",
    description: "Streamlined campaign setup and automated workflow management.",
    icon: Zap,
    gradient: "from-green-500 to-blue-500"
  }
];

export const BrandBenefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black via-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Choose Kolerr?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empower your brand with cutting-edge tools and insights
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              style={{
                animation: "fade-up 0.5s ease-out forwards",
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${benefit.gradient} mb-4 group-hover:scale-110 transition-transform`}>
                <benefit.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
              
              {/* Decorative gradient border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};