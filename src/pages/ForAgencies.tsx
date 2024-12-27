import { Navigation } from "@/components/layout/Navigation";
import { AgencyHero } from "@/components/agencies/AgencyHero";
import { AgencyFeatures } from "@/components/agencies/AgencyFeatures";
import { AgencyWorkflow } from "@/components/agencies/AgencyWorkflow";
import { AgencySlotFeature } from "@/components/agencies/AgencySlotFeature";
import { AgencyPricing } from "@/components/agencies/AgencyPricing";
import { AgencyTestimonials } from "@/components/agencies/AgencyTestimonials";
import { AgencyCollaboration } from "@/components/agencies/AgencyCollaboration";
import { AgencyFAQ } from "@/components/agencies/AgencyFAQ";
import { AgencyFooter } from "@/components/agencies/AgencyFooter";

const ForAgencies = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <main>
        <AgencyHero />
        <AgencyFeatures />
        <AgencyWorkflow />
        <AgencySlotFeature />
        <AgencyPricing />
        <AgencyTestimonials />
        <AgencyCollaboration />
        <AgencyFAQ />
        <AgencyFooter />
      </main>
    </div>
  );
};

export default ForAgencies;