import { Navigation } from "@/components/layout/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calendar, Users, BarChart2, Clock, Shield, ArrowRight, Zap, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Slot = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("SLOT page mounted");
  }, []);

  const mainFeatures = [
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered campaign scheduling that optimizes for maximum engagement",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Intelligent Matching",
      description: "Automatically match the right influencers to your campaign slots",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: BarChart2,
      title: "Real-time Analytics",
      description: "Track performance metrics and ROI in real-time",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Time Optimization",
      description: "Reduce campaign setup time by 75%"
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "Built-in verification system for content quality"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Match influencers to your exact requirements"
    },
    {
      icon: Zap,
      title: "Instant Insights",
      description: "Real-time performance monitoring"
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712]"> {/* Changed to a darker background color */}
      <Navigation />
      
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/30 mb-6 animate-fade-up">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
              </span>
              <span className="text-purple-300">Revolutionary Campaign Management</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              SLOT: Streamlined Campaign Management at Your Fingertips
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
              Simplify your influencer marketing process with SLOT – a powerful feature designed to help brands, 
              agencies, and influencers seamlessly organize and track campaigns.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 animate-fade-up group"
              style={{ animationDelay: "0.4s" }}
              onClick={() => navigate("/auth/register")}
            >
              Get Started with SLOT
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Main Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {mainFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="bg-gray-900/50 border-gray-800 p-6 hover:bg-gray-900/70 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${0.5 + index * 0.1}s` }}
              >
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} bg-opacity-20 mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Statistics Section */}
          <div className="relative p-8 rounded-2xl bg-gradient-to-r from-purple-900/50 to-pink-900/50 mb-20">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { label: "Active Campaigns", value: "5,000+" },
                { label: "Time Saved", value: "75%" },
                { label: "Success Rate", value: "94%" },
                { label: "ROI Increase", value: "3.5x" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center animate-fade-up"
                  style={{ animationDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={benefit.title}
                className="p-6 rounded-xl bg-gray-900/50 border border-gray-800 hover:bg-gray-900/70 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${1 + index * 0.1}s` }}
              >
                <benefit.icon className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Campaign Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful brands and agencies using SLOT to streamline their influencer marketing campaigns.
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
              className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
              onClick={() => navigate("/features")}
            >
              Learn More
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Slot;