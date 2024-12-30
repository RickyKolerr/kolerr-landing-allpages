import { ArrowUpRight, Users, BarChart2, TrendingUp } from "lucide-react";

export const BrandStats = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              label: "Active Campaigns",
              value: "10,000+",
              change: "+27%",
              icon: BarChart2,
              description: "Monthly active campaigns"
            },
            {
              label: "Global Reach",
              value: "150M+",
              change: "+45%",
              icon: Users,
              description: "Total audience reach"
            },
            {
              label: "ROI Average",
              value: "387%",
              change: "+52%",
              icon: TrendingUp,
              description: "Return on investment"
            },
            {
              label: "Success Rate",
              value: "94.7%",
              change: "+18%",
              icon: ArrowUpRight,
              description: "Campaign success rate"
            }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="relative p-6 rounded-xl bg-gradient-to-br from-purple-900/50 to-black border border-purple-500/20 group hover:border-purple-500/40 transition-all duration-300"
              style={{
                animation: "fade-up 0.5s ease-out forwards",
                animationDelay: `${index * 0.1}s`,
                opacity: 0
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <stat.icon className="w-6 h-6 text-purple-400" />
                </div>
                <span className="text-green-400 text-sm font-medium">
                  {stat.change}
                </span>
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};