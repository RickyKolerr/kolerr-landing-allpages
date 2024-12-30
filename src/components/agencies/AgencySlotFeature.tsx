import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const AgencySlotFeature = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 text-purple-300 mb-6">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              <span>Revolutionary SLOT System</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Maximize Campaign Efficiency with SLOT Technology
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Our innovative SLOT (Strategic Lifecycle Optimization Technology) system revolutionizes how agencies manage influencer campaigns.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "AI-powered influencer matching for each campaign slot",
                "Real-time availability tracking and scheduling",
                "Automated performance monitoring and optimization",
                "Integrated analytics and reporting dashboard",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 group"
            >
              Explore SLOT Features
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="SLOT Management Dashboard"
              className="rounded-lg shadow-2xl animate-float"
            />
            
            {/* Floating stats cards */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 animate-float">
              <div className="text-sm text-gray-200">Campaign Success Rate</div>
              <div className="text-2xl font-bold text-white">94.7%</div>
            </div>
            
            <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-lg p-4 animate-float" style={{ animationDelay: "0.3s" }}>
              <div className="text-sm text-gray-200">Active Slots</div>
              <div className="text-2xl font-bold text-white">2,547</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};