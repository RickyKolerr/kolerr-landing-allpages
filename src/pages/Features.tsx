import { Navigation } from "@/components/layout/Navigation";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Calendar,
  ChartBar,
  Database,
  Users,
  Link,
  Lock,
  Globe,
  DollarSign,
  Network,
  BarChart2,
  Rocket,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Features = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const mainFeatures = [
    {
      icon: Brain,
      title: "AI-Powered Matchmaking",
      description: "Intelligent system that analyzes data to match the perfect influencers with brands",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Calendar,
      title: "SLOT Feature",
      description: "Maximize campaign efficiency with scheduled time slots and real-time tracking",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: ChartBar,
      title: "Real-Time Campaign Tracking",
      description: "Monitor and manage all campaigns with instant updates and analytics",
      gradient: "from-green-500 to-emerald-500",
    }
  ];

  const additionalFeatures = [
    {
      icon: Database,
      title: "Comprehensive Database",
      description: "Access vast influencer data across TikTok, Instagram, and YouTube",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Foster stronger relationships within our vibrant community",
    },
    {
      icon: Link,
      title: "Marketing API Integration",
      description: "Leverage TikTok's marketing API for detailed analytics",
    },
    {
      icon: Lock,
      title: "Secure Authentication",
      description: "Robust login system with full data protection",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Global reach with multi-language platform support",
    },
    {
      icon: DollarSign,
      title: "Flexible Pricing",
      description: "Subscription plans tailored for all business sizes",
    }
  ];

  const whyKolerr = [
    {
      icon: Rocket,
      title: "Scalable and Powerful",
      description: "Built for businesses of all sizes, from small agencies to large enterprises",
    },
    {
      icon: Brain,
      title: "AI-Driven Solutions",
      description: "Revolutionary influencer marketing powered by cutting-edge AI technology",
    },
    {
      icon: Network,
      title: "Global Reach",
      description: "Exclusive access to TikTok's global ecosystem and features",
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black to-black" />
        <div className="container relative z-10 mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
              The Ultimate AI-Powered Platform for Influencer Marketing
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Transform your influencer marketing strategy with AI-powered matchmaking and real-time analytics
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
              onClick={() => {
                toast({
                  title: "Let's get started!",
                  description: "Creating your account...",
                });
                navigate("/auth/register");
              }}
            >
              Get Started
            </Button>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="relative p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 group hover:border-purple-500/50 transition-all duration-300"
                style={{
                  animation: "fade-up 0.5s ease-out forwards",
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.gradient} mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl -z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Powerful Features for Modern Marketing
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 transition-all duration-300 group"
                style={{
                  animation: "fade-up 0.5s ease-out forwards",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <feature.icon className="w-6 h-6 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kolerr Section */}
      <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Why Choose Kolerr?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyKolerr.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                style={{
                  animation: "fade-up 0.5s ease-out forwards",
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <item.icon className="w-6 h-6 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Influencer Marketing?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of brands and influencers already using Kolerr to revolutionize their marketing strategy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
              onClick={() => navigate("/auth/register")}
            >
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-500 text-purple-500 hover:bg-purple-500/10"
              onClick={() => navigate("/pricing")}
            >
              View Pricing
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;