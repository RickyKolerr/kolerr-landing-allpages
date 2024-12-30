import { Star, TrendingUp, DollarSign, Users, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  {
    icon: Star,
    title: "AI-Powered Matching",
    description: "Get matched with brands that align perfectly with your niche and values",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    icon: TrendingUp,
    title: "Growth Analytics",
    description: "Track your performance and optimize your content strategy with detailed insights",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
  },
  {
    icon: DollarSign,
    title: "Smart Earnings",
    description: "Maximize your revenue with our intelligent pricing recommendations",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e"
  },
  {
    icon: Users,
    title: "Collaboration Hub",
    description: "Connect with brands and fellow KOLs to create impactful campaigns",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    icon: Shield,
    title: "Brand Safety",
    description: "Work with verified brands in a secure and professional environment",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
  },
  {
    icon: Zap,
    title: "Instant Payments",
    description: "Get paid quickly and securely through our automated payment system",
    image: "https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4"
  }
];

export const KolsBenefits = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why KOLs Choose Us
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Join thousands of successful KOLs who are growing their influence and income with our platform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg transition-all duration-300 hover:transform hover:scale-105"
              style={{
                animation: "fade-up 0.5s ease-out forwards",
                animationDelay: `${index * 0.1}s`,
                opacity: 0,
              }}
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
                  <benefit.icon className="w-12 h-12 text-purple-400 mb-4" />
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
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 group"
          >
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};