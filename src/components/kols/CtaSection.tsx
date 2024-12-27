import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CtaSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/95 via-purple-800/95 to-pink-900/95 backdrop-blur-sm" />
      </div>
      
      <div className="relative container mx-auto px-4 text-center z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Level Up Your KOL Career?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90 transition-opacity group"
          >
            Sign Up Free
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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