import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-16">
        <Hero />
        <Features />
      </div>
    </div>
  );
};

export default Index;