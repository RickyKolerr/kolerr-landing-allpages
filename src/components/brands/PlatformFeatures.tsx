import { Code2, Zap, Shield, Globe, Sparkles, LineChart } from "lucide-react";

export const PlatformFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Platform Features
          </h2>
          <p className="text-gray-300 text-lg">
            Everything you need to succeed in influencer marketing
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Code2,
              title: "API Integration",
              description: "Connect with your existing tools seamlessly",
              gradient: "from-blue-500 to-cyan-500"
            },
            {
              icon: Zap,
              title: "Fast Deployment",
              description: "Launch campaigns in minutes, not days",
              gradient: "from-yellow-500 to-orange-500"
            },
            {
              icon: Shield,
              title: "Brand Safety",
              description: "Advanced content screening and verification",
              gradient: "from-green-500 to-emerald-500"
            },
            {
              icon: Globe,
              title: "Global Reach",
              description: "Access influencers worldwide",
              gradient: "from-purple-500 to-pink-500"
            },
            {
              icon: Sparkles,
              title: "AI-Powered",
              description: "Smart matching and optimization",
              gradient: "from-red-500 to-pink-500"
            },
            {
              icon: LineChart,
              title: "Analytics",
              description: "Comprehensive performance tracking",
              gradient: "from-indigo-500 to-purple-500"
            }
          ].map((feature, index) => (
            <div
              key={feature.title}
              className="relative group"
              style={{
                animation: "fade-up 0.5s ease-out forwards",
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-xl border border-gray-800 h-full transition-all duration-300 hover:scale-105">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};