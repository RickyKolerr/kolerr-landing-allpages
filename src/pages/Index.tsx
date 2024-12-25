import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { Pricing } from "@/components/home/Pricing";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
    </div>
  );
};

export default Index;