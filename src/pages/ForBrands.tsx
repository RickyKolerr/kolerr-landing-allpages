import { Navigation } from "@/components/layout/Navigation";
import { BrandHero } from "@/components/brands/BrandHero";
import { BrandBenefits } from "@/components/brands/BrandBenefits";
import { HowItWorks } from "@/components/brands/HowItWorks";
import { SlotFeature } from "@/components/brands/SlotFeature";
import { PlatformFeatures } from "@/components/brands/PlatformFeatures";
import { IntegrationShowcase } from "@/components/brands/IntegrationShowcase";
import { PricingPreview } from "@/components/brands/PricingPreview";
import { CustomerStories } from "@/components/brands/CustomerStories";
import { BrandFAQ } from "@/components/brands/BrandFAQ";
import { BrandFooter } from "@/components/brands/BrandFooter";
import { BrandStats } from "@/components/brands/BrandStats";
import { BrandCTA } from "@/components/brands/BrandCTA";
import { BrandTrustedBy } from "@/components/brands/BrandTrustedBy";

const ForBrands = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <BrandHero />
        <BrandTrustedBy />
        <BrandBenefits />
        <BrandStats />
        <PlatformFeatures />
        <HowItWorks />
        <IntegrationShowcase />
        <SlotFeature />
        <CustomerStories />
        <PricingPreview />
        <BrandCTA />
        <BrandFAQ />
        <BrandFooter />
      </main>
    </div>
  );
};

export default ForBrands;