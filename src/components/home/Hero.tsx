import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-kolerr-primary to-kolerr-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="animate-fade-up">
            <div className="inline-flex space-x-6">
              <span className="rounded-full bg-kolerr-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-kolerr-primary ring-1 ring-inset ring-kolerr-primary/20">
                What's new
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Just shipped v1.0</span>
              </span>
            </div>
            
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Connect Brands with{" "}
              <span className="text-kolerr-primary animate-pulse">Influential Voices</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Kolerr simplifies influencer marketing by connecting brands with the perfect KOLs for their campaigns. 
              Streamline your influencer outreach and amplify your brand's message.
            </p>
            
            <div className="mt-10 flex items-center gap-x-6">
              <Button className="bg-kolerr-primary hover:bg-kolerr-secondary transition-all duration-300 transform hover:scale-105">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="transition-all duration-300 hover:bg-kolerr-primary/10">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-kolerr-primary to-kolerr-secondary opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
      </div>
    </div>
  );
};