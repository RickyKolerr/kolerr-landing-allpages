import { Button } from "@/components/ui/button";
import { ArrowRight, Star, TrendingUp, Users } from "lucide-react";
import { useEffect } from "react";

export const Hero = () => {
  useEffect(() => {
    console.log("Hero component mounted");
    return () => {
      console.log("Hero component unmounted");
    };
  }, []);

  const handleGetStarted = () => {
    console.log("Get Started button clicked");
  };

  const handleLearnMore = () => {
    console.log("Learn More button clicked");
  };

  return (
    <div className="relative isolate min-h-[90vh] flex items-center">
      {/* Background effects */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-up">
            <div className="inline-flex space-x-6">
              <span className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset ring-white/20">
                New Platform
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <Star className="h-4 w-4 text-yellow-500" />
                <span>Just launched</span>
              </span>
            </div>
            
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
              Connect with Top{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                KOLs
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-300 max-w-xl">
              Kolerr is your gateway to successful influencer marketing. Connect with the perfect KOLs for your brand and amplify your message globally.
            </p>
            
            <div className="mt-10 flex items-center gap-x-6">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90 transition-all duration-300 transform hover:scale-105"
                onClick={handleGetStarted}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-white/20 hover:bg-white/10"
                onClick={handleLearnMore}
              >
                Learn more
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              {[
                { icon: Users, label: "Active Users", value: "50K+" },
                { icon: TrendingUp, label: "Success Rate", value: "95%" },
                { icon: Star, label: "Satisfaction", value: "4.9/5" }
              ].map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-300 hover:bg-white/10"
                  style={{
                    animation: `fade-up 0.5s ease-out forwards`,
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <stat.icon className="h-6 w-6 text-purple-400 mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero image/visual */}
          <div className="relative lg:block animate-fade-up hidden">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f"
                alt="Platform Dashboard"
                className="w-full rounded-lg shadow-2xl animate-float"
              />
              
              {/* Floating stats cards */}
              <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 animate-float">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-green-400" />
                  <div>
                    <div className="text-sm text-gray-200">Growth Rate</div>
                    <div className="text-lg font-bold text-white">+127%</div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-white/10 backdrop-blur-md rounded-lg p-4 animate-float" style={{ animationDelay: "0.3s" }}>
                <div className="flex items-center gap-3">
                  <Users className="text-purple-400" />
                  <div>
                    <div className="text-sm text-gray-200">Active Users</div>
                    <div className="text-lg font-bold text-white">50K+</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
};