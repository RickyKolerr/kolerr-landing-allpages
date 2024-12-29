import { Navigation } from "@/components/layout/Navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Brain,
  BarChart2,
  Users,
  Calendar,
  MessageSquare,
  Shield,
  Globe,
  Zap,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();

  const featureCategories = {
    automation: [
      {
        icon: Brain,
        title: "AI-Powered Matching",
        description: "Smart algorithm to match brands with the perfect KOLs"
      },
      {
        icon: Calendar,
        title: "Automated Scheduling",
        description: "Effortless campaign scheduling and management"
      },
      {
        icon: BarChart2,
        title: "Performance Analytics",
        description: "Automated reporting and insights generation"
      }
    ],
    collaboration: [
      {
        icon: Users,
        title: "Team Management",
        description: "Collaborate with team members and manage permissions"
      },
      {
        icon: MessageSquare,
        title: "Integrated Chat",
        description: "Direct communication between brands and KOLs"
      },
      {
        icon: Globe,
        title: "Global Network",
        description: "Access to worldwide influencer network"
      }
    ],
    security: [
      {
        icon: Shield,
        title: "Secure Payments",
        description: "Safe and transparent payment processing"
      },
      {
        icon: Zap,
        title: "Real-time Updates",
        description: "Instant notifications and campaign tracking"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Platform Features
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover the powerful features that make our platform the perfect choice for influencer marketing
          </p>
        </div>

        <Tabs defaultValue="automation" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="automation">Automation</TabsTrigger>
            <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          
          {Object.entries(featureCategories).map(([category, features]) => (
            <TabsContent key={category} value={category}>
              <div className="grid md:grid-cols-3 gap-8">
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
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
            onClick={() => navigate("/auth/register")}
          >
            Start Free Trial
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Features;