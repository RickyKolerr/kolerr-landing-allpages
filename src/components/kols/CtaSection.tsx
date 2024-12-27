import { Button } from "@/components/ui/button";

export const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 via-purple-800 to-pink-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Level Up Your KOL Career?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90 transition-opacity"
          >
            Sign Up Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white hover:bg-white/10"
          >
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};