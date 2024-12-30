import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";

export const SlotFeature = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Simplify Collaboration with SLOTs
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Organize campaigns by slots, ensuring quality matches and faster results.
            </p>
            <div className="flex flex-col gap-4 mb-8">
              <div className="flex items-center gap-3">
                <Calendar className="w-6 h-6 text-purple-500" />
                <span className="text-gray-300">Schedule campaigns efficiently</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-purple-500" />
                <span className="text-gray-300">Auto-match with perfect influencers</span>
              </div>
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
            >
              Try SLOT Feature
            </Button>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf"
              alt="SLOT Feature Dashboard"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};