import { Navigation } from "@/components/layout/Navigation";
import { Pricing as PricingSection } from "@/components/home/Pricing";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <div className="pt-16">
        <PricingSection />
      </div>
    </div>
  );
};

export default Pricing;