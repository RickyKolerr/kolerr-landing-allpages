import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const BrandHero = () => {
  const [countryCode, setCountryCode] = useState<string | null>(null);
  const [trialDays] = useState(14);
  const navigate = useNavigate();

  useEffect(() => {
    const detectLocation = async () => {
      try {
        // Add a small delay to help with rate limiting
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        const response = await fetch("https://ipapi.co/json/");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCountryCode(data.country_code);
      } catch (error) {
        console.error("Error detecting location:", error);
        // Set a fallback country code if detection fails
        setCountryCode("US");
      }
    };
    detectLocation();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/95" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text animate-fade-up">
              {countryCode === "VN" 
                ? "Tìm KOL Phù Hợp Trong Vài Phút" 
                : "Find the Perfect Influencer for Your Campaigns in Minutes"}
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {countryCode === "VN"
                ? "Công cụ thông minh, nhanh chóng và hiệu quả với AI"
                : "Smart, fast, and effective matchmaking with AI-powered tools"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
                onClick={() => navigate("/auth/register")}
              >
                Start {trialDays}-Day Free Trial
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
          </div>
          <div className="relative lg:block animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <img
              src="/dashboard-mockup.png"
              alt="Brand Dashboard"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};