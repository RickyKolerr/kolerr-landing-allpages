import { Navigation } from "@/components/layout/Navigation";
import { Hero } from "@/components/home/Hero";
import { Features } from "@/components/home/Features";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    console.log("Index page mounted");
    return () => {
      console.log("Index page unmounted");
    };
  }, []);

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