import { Star, Users, Award, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Star,
    title: "AI Matchmaking",
    description: "Find brands perfectly aligned with your expertise using intelligent filters.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    icon: Users,
    title: "Collaboration Hub",
    description: "Connect with brands and fellow KOLs to create impactful campaigns.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    icon: BarChart3,
    title: "Growth Analytics",
    description: "Track your performance and optimize your content strategy.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
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
              className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute inset-0">
                <img 
                  src={benefit.image} 
                  alt={benefit.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-purple-900/80 to-black/90" />
              </div>
              <div className="relative p-8 h-full flex flex-col justify-between z-10">
                <div>
                  <benefit.icon className="w-12 h-12 text-pink-500 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white/20 hover:bg-white/10 group"
          >
            Explore Features →
          </Button>
        </div>
      </div>
    </section>
  );
};