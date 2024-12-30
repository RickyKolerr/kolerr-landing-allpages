import { Badge } from "@/components/ui/badge";
import { getOptimizedImageUrl } from "@/utils/imageOptimizer";

export const KolShowcase = () => {
  const kols = [
    {
      image: "photo-1581092795360-fd1ca04f0952",
      name: "Alex Chen",
      category: "Tech Influencer",
      followers: "500K+"
    },
    {
      image: "photo-1581091226825-a6a2a5aee158",
      name: "Sarah Williams",
      category: "Lifestyle Creator",
      followers: "1.2M+"
    },
    {
      image: "photo-1486312338219-ce68d2c6f44d",
      name: "David Park",
      category: "Business Coach",
      followers: "750K+"
    },
    {
      image: "photo-1649972904349-6e44c42644a7",
      name: "Emma Rodriguez",
      category: "Digital Creator",
      followers: "900K+"
    },
    {
      image: "photo-1581091226825-a6a2a5aee158",
      name: "Lisa Thompson",
      category: "Content Strategist",
      followers: "600K+"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text">
          Top KOLs Trust Our Platform
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {/* Center featured KOL */}
          <div className="col-span-2 md:col-span-1 lg:col-span-1 order-1 lg:order-3">
            {kols.slice(2, 3).map((kol, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={getOptimizedImageUrl(`https://images.unsplash.com/${kol.image}`, 400)}
                  alt={kol.name}
                  className="w-full aspect-[3/4] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg">{kol.name}</h3>
                    <Badge variant="secondary" className="mt-2 bg-purple-500/20">
                      {kol.category}
                    </Badge>
                    <p className="text-sm text-gray-300 mt-1">{kol.followers} followers</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Left side KOLs */}
          <div className="space-y-6 order-2">
            {kols.slice(0, 2).map((kol, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={getOptimizedImageUrl(`https://images.unsplash.com/${kol.image}`, 400)}
                  alt={kol.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg">{kol.name}</h3>
                    <Badge variant="secondary" className="mt-2 bg-purple-500/20">
                      {kol.category}
                    </Badge>
                    <p className="text-sm text-gray-300 mt-1">{kol.followers} followers</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right side KOLs */}
          <div className="space-y-6 order-4">
            {kols.slice(3).map((kol, index) => (
              <div
                key={index}
                className="relative group rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={getOptimizedImageUrl(`https://images.unsplash.com/${kol.image}`, 400)}
                  alt={kol.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg">{kol.name}</h3>
                    <Badge variant="secondary" className="mt-2 bg-purple-500/20">
                      {kol.category}
                    </Badge>
                    <p className="text-sm text-gray-300 mt-1">{kol.followers} followers</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};