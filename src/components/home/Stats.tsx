import { Users, TrendingUp, Globe, Award } from "lucide-react";

export const Stats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Users, label: "Active KOLs", value: "50K+", description: "Verified creators" },
            { icon: TrendingUp, label: "Campaign Growth", value: "127%", description: "Year over year" },
            { icon: Globe, label: "Global Reach", value: "100+", description: "Countries" },
            { icon: Award, label: "Success Rate", value: "95%", description: "Campaign completion" }
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-black border border-purple-500/20 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500/20 mb-4">
                <stat.icon className="w-6 h-6 text-purple-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-purple-300 mb-2">{stat.label}</div>
              <div className="text-xs text-gray-400">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};