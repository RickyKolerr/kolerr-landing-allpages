import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anna Chen",
    role: "Beauty Influencer",
    quote: "The SLOT system helped me secure two campaigns in just a week! The AI matchmaking is incredibly accurate.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    name: "Marcus Rodriguez",
    role: "Tech Reviewer",
    quote: "Finally, a platform that understands what KOLs really need. The analytics tools are game-changing.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Sarah Kim",
    role: "Lifestyle Creator",
    quote: "The AI matchmaking is incredible. Every brand collaboration feels perfect for my audience.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
  },
];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1
    );
  };

  return (
    <section className="py-20 bg-black/90">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          What KOLs Say About Us
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-y-0 -left-4 flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="text-white border-white/20 hover:bg-white/10 rounded-full"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="overflow-hidden px-12">
            <Card className="w-full bg-gradient-to-br from-purple-900/50 to-black border-purple-800/50 p-8 backdrop-blur-sm">
              <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-8">
                <div className="relative">
                  <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-pink-500/20">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <Quote className="absolute -bottom-2 -right-2 text-pink-500 w-8 h-8" />
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl text-white mb-4">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  <cite className="not-italic">
                    <div className="font-semibold text-white">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-pink-400">
                      {testimonials[activeIndex].role}
                    </div>
                  </cite>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="absolute inset-y-0 -right-4 flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="text-white border-white/20 hover:bg-white/10 rounded-full"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};