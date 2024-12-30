import { Briefcase, ChartBar, Target, Network, Rocket, Users } from "lucide-react";

const features = [
  {
    title: "AI-Powered Matchmaking",
    description: "Our advanced AI algorithms ensure perfect brand-influencer matches every time.",
    icon: Target,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Real-time Analytics",
    description: "Track campaign performance and ROI with comprehensive dashboards.",
    icon: ChartBar,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Multi-Brand Management",
    description: "Efficiently manage multiple brands and campaigns from a single dashboard.",
    icon: Briefcase,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Global Network",
    description: "Access our vast network of verified influencers across all major platforms.",
    icon: Network,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Scalable Growth",
    description: "Tools and features that grow with your agency's expanding needs.",
    icon: Rocket,
    color: "from-purple-500 to-indigo-500",
  },
  {
    title: "Team Collaboration",
    description: "Built-in tools for seamless team coordination and campaign management.",
    icon: Users,
    color: "from-pink-500 to-rose-500",
  },
];

export const AgencyFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powerful Features for Modern Agencies
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to scale your influencer marketing operations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative bg-gradient-to-br from-purple-900/50 to-black rounded-xl p-8 border border-purple-500/20 group hover:border-purple-500/40 transition-all duration-300"
              style={{
                animation: "fade-up 0.5s ease-out forwards",
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} bg-opacity-20 mb-4`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};