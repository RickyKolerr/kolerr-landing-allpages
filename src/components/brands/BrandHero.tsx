import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Globe } from "lucide-react";

export const BrandHero = () => {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [trialDays] = useState(14);
  const navigate = useNavigate();

  useEffect(() => {
    const detectLocation = async () => {
      try {
        const cachedLocation = localStorage.getItem('userCountryCode');
        const cacheTimestamp = localStorage.getItem('locationCacheTimestamp');
        
        if (cachedLocation && cacheTimestamp) {
          const cacheAge = Date.now() - parseInt(cacheTimestamp);
          if (cacheAge < 3600000) {
            setCountryCode(cachedLocation);
            return;
          }
        }

        const response = await fetch("https://ipapi.co/json/");
        
        if (response.status === 429) {
          setCountryCode(cachedLocation || "US");
          return;
        }

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        
        localStorage.setItem('userCountryCode', data.country_code);
        localStorage.setItem('locationCacheTimestamp', Date.now().toString());
        
        setCountryCode(data.country_code);
      } catch (error) {
        console.error("Error detecting location:", error);
        setCountryCode(localStorage.getItem('userCountryCode') || "US");
      }
    };

    detectLocation();
  }, []);

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-black to-black animate-pulse" />
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-20" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/50 border border-purple-500/30 mb-6 animate-fade-up">
              <Globe className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-300">Global TikTok Data Integration</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-up">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
                {countryCode === "VN" 
                  ? "Tìm KOL Phù Hợp Trong Vài Phút" 
                  : "Unlock the Future of Influencer Marketing with Kolerr and TikTok's Global Data"}
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {countryCode === "VN"
                ? "Công cụ thông minh, nhanh chóng và hiệu quả với AI"
                : "Transform your influencer campaigns with AI-powered matchmaking and real-time analytics"}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 group"
                onClick={() => navigate("/auth/register")}
              >
                Start {trialDays}-Day Free Trial
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
                onClick={() => navigate("/features")}
              >
                Explore Features
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-4 animate-fade-up" style={{ animationDelay: "0.6s" }}>
              {[
                { label: "Active Brands", value: "500+" },
                { label: "Global KOLs", value: "50K+" },
                { label: "Campaign ROI", value: "3.5x" }
              ].map((stat) => (
                <div key={stat.label} className="p-4 rounded-lg bg-purple-900/20 border border-purple-500/20 animate-float">
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:block animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                alt="Brand Dashboard"
                className="rounded-lg shadow-2xl animate-float"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg" />
            </div>

            {/* Floating feature cards */}
            <div className="absolute -top-4 -left-4 p-4 rounded-lg bg-purple-900/90 border border-purple-500/30 shadow-xl animate-float" style={{ animationDelay: "0.8s" }}>
              <div className="text-sm font-semibold text-white mb-1">AI Matchmaking</div>
              <div className="text-xs text-gray-300">95% accuracy rate</div>
            </div>

            <div className="absolute -bottom-4 -right-4 p-4 rounded-lg bg-pink-900/90 border border-pink-500/30 shadow-xl animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-sm font-semibold text-white mb-1">Real-time Analytics</div>
              <div className="text-xs text-gray-300">Live performance tracking</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
