import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Anna Chen",
    role: "Beauty Influencer",
    quote: "The SLOT system helped me secure two campaigns in just a week!",
    avatar: "/avatars/anna.jpg",
  },
  {
    name: "Marcus Rodriguez",
    role: "Tech Reviewer",
    quote: "Finally, a platform that understands what KOLs really need.",
    avatar: "/avatars/marcus.jpg",
  },
  {
    name: "Sarah Kim",
    role: "Lifestyle Creator",
    quote: "The AI matchmaking is incredible. Every brand collaboration feels perfect.",
    avatar: "/avatars/sarah.jpg",
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
          <div className="absolute inset-y-0 left-0 flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="text-white border-white/20 hover:bg-white/10"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="overflow-hidden px-12">
            <div className="flex transition-transform duration-300 ease-in-out transform">
              <Card className="w-full bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800 p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <blockquote className="text-xl text-white mb-4">
                    "{testimonials[activeIndex].quote}"
                  </blockquote>
                  <cite className="not-italic">
                    <div className="font-semibold text-white">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-gray-400">
                      {testimonials[activeIndex].role}
                    </div>
                  </cite>
                </div>
              </Card>
            </div>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="text-white border-white/20 hover:bg-white/10"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};