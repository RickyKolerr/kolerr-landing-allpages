import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-kolerr-primary to-kolerr-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <div className="animate-fade-up">
            <div className="inline-flex space-x-6">
              <span className="rounded-full bg-kolerr-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-kolerr-primary ring-1 ring-inset ring-kolerr-primary/20">
                New Platform
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>Just launched</span>
              </span>
            </div>
            
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Connect with Top{" "}
              <span className="text-kolerr-primary animate-pulse">KOLs</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Kolerr is your gateway to successful influencer marketing. Connect with the perfect KOLs for your brand and amplify your message.
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
        
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src="/lovable-uploads/4ae7b41e-8029-4f8f-88f3-32e7f15fb20c.png"
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};