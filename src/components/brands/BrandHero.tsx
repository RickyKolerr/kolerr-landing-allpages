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
        const response = await fetch("https://api.ipify.org?format=json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const { ip } = await response.json();
        
        const locationResponse = await fetch(`https://ipapi.com/ip_api.php?ip=${ip}`);
        if (!locationResponse.ok) {
          throw new Error(`HTTP error! status: ${locationResponse.status}`);
        }
        const locationData = await locationResponse.json();
        setCountryCode(locationData.country_code);
      } catch (error) {
        console.error("Error detecting location:", error);
        setCountryCode("US");
      }
    };
    detectLocation();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black/95" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-500 to-teal-500 text-transparent bg-clip-text animate-fade-up">
              {countryCode === "VN" 
                ? "Tối Ưu SEO Chuyên Nghiệp" 
                : "Professional SEO Optimization Server"}
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              {countryCode === "VN"
                ? "Giải pháp SEO toàn diện với công nghệ AI tiên tiến"
                : "Comprehensive SEO solutions powered by advanced AI technology"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up" style={{ animationDelay: "0.4s" }}>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90"
                onClick={() => navigate("/auth/register")}
              >
                Start {trialDays}-Day Free Trial
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-500/10"
                onClick={() => navigate("/features")}
              >
                Explore Features
              </Button>
            </div>
          </div>
          <div className="relative lg:block animate-fade-up" style={{ animationDelay: "0.6s" }}>
            <img
              src="/dashboard-mockup.png"
              alt="SEO Dashboard"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};