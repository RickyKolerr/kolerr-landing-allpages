import { Button } from "@/components/ui/button";
import { KolsHero } from "@/components/kols/KolsHero";
import { KolsBenefits } from "@/components/kols/KolsBenefits";
import { SlotFeature } from "@/components/kols/SlotFeature";
import { Testimonials } from "@/components/kols/Testimonials";
import { CtaSection } from "@/components/kols/CtaSection";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ForKols = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      <nav className="container mx-auto px-4 py-4">
        <Link 
          to="/"
          className="inline-flex items-center text-white hover:text-purple-400 transition-colors"
          aria-label="Back to Home"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          <span className="text-sm font-medium">Back to Home</span>
        </Link>
      </nav>
      <KolsHero />
      <KolsBenefits />
      <SlotFeature />
      <Testimonials />
      <CtaSection />
    </div>
  );
};

export default ForKols;