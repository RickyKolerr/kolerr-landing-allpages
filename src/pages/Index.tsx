import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Pricing } from "@/components/home/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Features />
        <Pricing />
      </div>
    </div>
  );
};

export default Index;