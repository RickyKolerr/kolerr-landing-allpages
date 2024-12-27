import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const slotFeatures = [
  {
    title: "Apply to Campaigns",
    description: "Browse and apply to campaigns that match your niche and audience.",
    image: "/slot-campaigns.png",
  },
  {
    title: "Collaborate with Others",
    description: "Build your credibility and connect with fellow content creators.",
    image: "/slot-collaborate.png",
  },
  {
    title: "Earn and Grow",
    description: "Track your earnings and grow your influence with detailed analytics.",
    image: "/slot-earnings.png",
  },
];

export const SlotFeature = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          The SLOT System
        </h2>
        
        <div className="relative">
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-800">
            <div className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {slotFeatures[activeIndex].title}
                  </h3>
                  <p className="text-gray-400">
                    {slotFeatures[activeIndex].description}
                  </p>
                  <div className="flex gap-2 mt-4">
                    {slotFeatures.map((_, index) => (
                      <Button
                        key={index}
                        variant={activeIndex === index ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveIndex(index)}
                        className={
                          activeIndex === index
                            ? "bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"
                            : "text-white border-white/20 hover:bg-white/10"
                        }
                      >
                        {index + 1}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={slotFeatures[activeIndex].image}
                    alt={slotFeatures[activeIndex].title}
                    className="w-full h-auto rounded-lg shadow-lg animate-fade-up"
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};