import { Navigation } from "@/components/layout/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Users, BarChart2, Clock, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Slot = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Calendar,
      title: "Campaign Scheduling",
      description: "Schedule and manage multiple campaigns with an intuitive calendar interface"
    },
    {
      icon: Users,
      title: "KOL Matching",
      description: "AI-powered matching system to find the perfect influencers for your campaigns"
    },
    {
      icon: BarChart2,
      title: "Performance Analytics",
      description: "Track campaign performance and ROI with detailed analytics"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SLOT Management System
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Streamline your influencer campaigns with our advanced SLOT management system
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800">
              <CardHeader>
                <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
                <CardTitle className="text-white">{feature.title}</CardTitle>
                <CardDescription className="text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-8 mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                How SLOT Works
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-300">
                  <Clock className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <span>Create time slots for your campaign requirements</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Users className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <span>Match with relevant KOLs based on your criteria</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <Shield className="w-6 h-6 text-purple-400 flex-shrink-0 mt-1" />
                  <span>Secure bookings and manage campaigns efficiently</span>
                </li>
              </ul>
              <Button 
                className="mt-8 bg-purple-600 hover:bg-purple-700"
                size="lg"
                onClick={() => navigate("/auth/register")}
              >
                Get Started
              </Button>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-800">
                {/* Placeholder for SLOT interface preview */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">SLOT Interface Preview</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Slot;