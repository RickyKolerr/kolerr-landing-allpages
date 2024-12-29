import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    <div className="relative isolate overflow-hidden bg-black min-h-screen">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="animate-fade-up">
            <div className="inline-flex space-x-6">
              <span className="rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent px-3 py-1 text-sm font-semibold leading-6 ring-1 ring-inset ring-white/20">
                New Platform
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                <span>Just launched</span>
              </span>
            </div>
            
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Connect with Top{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent animate-pulse">
                KOLs
              </span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Kolerr is your gateway to successful influencer marketing. Connect with the perfect KOLs for your brand and amplify your message.
            </p>
            
            <div className="mt-10 flex items-center gap-x-6">
              <Button 
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90 transition-opacity transform hover:scale-105"
                onClick={handleGetStarted}
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="text-white border-white/20 hover:bg-white/10"
                onClick={handleLearnMore}
              >
                Learn more
              </Button>
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