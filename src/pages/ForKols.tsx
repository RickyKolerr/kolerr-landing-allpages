import { Navigation } from "@/components/layout/Navigation";
import { KolsHero } from "@/components/kols/KolsHero";
import { KolsBenefits } from "@/components/kols/KolsBenefits";
import { SlotFeature } from "@/components/kols/SlotFeature";
import { Testimonials } from "@/components/kols/Testimonials";
import { CtaSection } from "@/components/kols/CtaSection";

const ForKols = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <Navigation />
      <KolsHero />
      <KolsBenefits />
      <SlotFeature />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default ForKols;