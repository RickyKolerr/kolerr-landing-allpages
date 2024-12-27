import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const KolsHero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-black/80 to-black/90" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-up">
          Connect, Collaborate, Succeed –{" "}
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Built for KOLs Like You!
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-up">
          Land brand deals, grow your reach, and manage campaigns with ease.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up">
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Sign Up Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-white/20 hover:bg-white/10 w-full sm:w-auto group"
          >
            <Play className="mr-2 h-4 w-4 group-hover:text-pink-500 transition-colors" /> Watch Demo
          </Button>
        </div>
        
        <div className="mt-12 relative">
          <div className="bg-gradient-to-t from-black to-transparent absolute bottom-0 left-0 right-0 h-32 pointer-events-none" />
          <img
            src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
            alt="Platform Dashboard"
            className="rounded-lg shadow-2xl mx-auto max-w-4xl w-full animate-fade-up"
          />
        </div>
      </div>
    </div>
  );
};