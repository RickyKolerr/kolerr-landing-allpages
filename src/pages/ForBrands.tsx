import { Navigation } from "@/components/layout/Navigation";
import { BrandHero } from "@/components/brands/BrandHero";
import { BrandBenefits } from "@/components/brands/BrandBenefits";
import { HowItWorks } from "@/components/brands/HowItWorks";
import { SlotFeature } from "@/components/brands/SlotFeature";
import { PricingPreview } from "@/components/brands/PricingPreview";
import { CustomerStories } from "@/components/brands/CustomerStories";
import { BrandFAQ } from "@/components/brands/BrandFAQ";
import { BrandFooter } from "@/components/brands/BrandFooter";

const ForBrands = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <BrandHero />
        <BrandBenefits />
        <HowItWorks />
        <SlotFeature />
        <PricingPreview />
        <CustomerStories />
        <BrandFAQ />
        <BrandFooter />
      </main>
    </div>
  );
};

export default ForBrands;