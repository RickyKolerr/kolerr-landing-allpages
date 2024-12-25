import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center animate-fade-up">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Connect Brands with
            <span className="text-kolerr-primary"> Influential Voices</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kolerr simplifies influencer marketing by connecting brands with the perfect KOLs for their campaigns. Streamline your influencer outreach and amplify your brand's message.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button className="bg-kolerr-primary hover:bg-kolerr-secondary">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline">Learn more</Button>
          </div>
        </div>
      </div>
    </div>
  );
};