import { Button } from "@/components/ui/button";
import { ArrowRight, Briefcase, Target, ChartBar } from "lucide-react";

export const AgencyHero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/95" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/20 to-transparent rotate-12 animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/20 to-transparent -rotate-12 animate-pulse" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 mb-6 animate-fade-up">
              <Briefcase className="w-4 h-4" />
              <span>Agency Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-fade-up">
              Scale Your Agency with Advanced Analytics & AI
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Leverage our comprehensive suite of tools to manage multiple brands and campaigns effortlessly
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 group"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
              >
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              {[
                { icon: Target, label: "95% Match Rate", desc: "AI-Powered" },
                { icon: ChartBar, label: "2x ROI Increase", desc: "Average" },
                { icon: Briefcase, label: "500+ Agencies", desc: "Trust Us" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-purple-900/20 border border-purple-500/20">
                  <stat.icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                  <div className="text-lg font-bold text-white">{stat.label}</div>
                  <div className="text-sm text-gray-400">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:block animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Agency Dashboard"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              {/* Floating stats cards */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 animate-float">
                <div className="flex items-center gap-3">
                  <Target className="text-green-400" />
                  <div>
                    <div className="text-sm text-gray-200">Campaign Success</div>
                    <div className="text-lg font-bold text-white">+127%</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-lg p-4 animate-float" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-3">
                  <ChartBar className="text-purple-400" />
                  <div>
                    <div className="text-sm text-gray-200">Active Campaigns</div>
                    <div className="text-lg font-bold text-white">1,234</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};