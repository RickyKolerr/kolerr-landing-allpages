import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Pricing } from "@/components/home/Pricing";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    console.log("Index page mounted");
    return () => {
      console.log("Index page unmounted");
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#030712]">
      <Navigation />
      <main className="relative">
        {/* Gradient background effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rotate-12 animate-pulse" />
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-500/10 to-transparent -rotate-12 animate-pulse" />
        </div>

        {/* Main content */}
        <div className="relative z-10">
          <Hero />
          <Features />
          <Pricing />
        </div>
      </main>
    </div>
  );
};

export default Index;