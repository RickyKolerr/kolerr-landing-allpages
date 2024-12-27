import { Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Star,
    title: "AI Matchmaking",
    description: "Find brands perfectly aligned with your expertise using intelligent filters.",
  },
  {
    icon: Users,
    title: "Collaboration Hub",
    description: "Connect with brands and fellow KOLs to create impactful campaigns.",
  },
  {
    icon: Award,
    title: "Growth Analytics",
    description: "Track your performance and optimize your content strategy.",
  },
];

export const KolsBenefits = () => {
  return (
    <section className="py-20 bg-black/80">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-br from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 transition-colors animate-fade-up"
            >
              <benefit.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white/20 hover:bg-white/10"
          >
            Explore Features →
          </Button>
        </div>
      </div>
    </section>
  );
};