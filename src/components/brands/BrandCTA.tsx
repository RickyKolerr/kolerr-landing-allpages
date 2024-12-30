import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const BrandCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/5 bg-grid-16" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Influencer Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of brands already using Kolerr to scale their influencer campaigns and drive measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 group"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};