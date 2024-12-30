import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const IntegrationShowcase = () => {
  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Seamless Integration with Your Workflow
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Connect Kolerr with your favorite tools and platforms for a streamlined experience
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Direct API access for custom integrations",
                "Webhook support for real-time updates",
                "Export data in multiple formats",
                "OAuth 2.0 authentication"
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-500" />
                  {feature}
                </div>
              ))}
            </div>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 group"
            >
              Explore Integrations
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                "/lovable-uploads/a675419f-0dd0-46af-a3b6-7b49ee999701.png",
                "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
                "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
              ].map((image, index) => (
                <div
                  key={index}
                  className="relative rounded-lg overflow-hidden group"
                  style={{
                    animation: "fade-up 0.5s ease-out forwards",
                    animationDelay: `${index * 0.2}s`,
                    opacity: 0
                  }}
                >
                  <img
                    src={image}
                    alt={`Integration ${index + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};