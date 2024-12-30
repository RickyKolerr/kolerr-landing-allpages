import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";

export const KolsHero = () => {
  const [stats, setStats] = useState([
    { value: "0", label: "Active KOLs" },
    { value: "0", label: "Campaigns" },
    { value: "0", label: "Engagement Rate" }
  ]);

  useEffect(() => {
    // Animate stats counting up
    const finalStats = [
      { value: "10K+", label: "Active KOLs" },
      { value: "50K+", label: "Campaigns" },
      { value: "25%", label: "Engagement Rate" }
    ];
    
    setTimeout(() => setStats(finalStats), 500);
  }, []);

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
              <Star className="w-4 h-4" />
              <span>Become a Top KOL</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-fade-up">
              Unlock the Future of Influencer Marketing with Kolerr and TikTok's Global Data
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Join our network of successful KOLs and connect with brands that match your values
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 group"
              >
                Start Creating
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
              >
                View Success Stories
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:block animate-fade-up" style={{ animationDelay: "0.8s" }}>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg"
                alt="KOL Dashboard Preview"
                className="w-full rounded-lg shadow-2xl"
              />
              
              {/* Floating stats cards */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 animate-float">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-green-400" />
                  <div>
                    <div className="text-sm text-gray-200">Growth Rate</div>
                    <div className="text-lg font-bold text-white">+127%</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-lg p-4 animate-float" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-3">
                  <Users className="text-purple-400" />
                  <div>
                    <div className="text-sm text-gray-200">Audience Reach</div>
                    <div className="text-lg font-bold text-white">2.5M+</div>
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