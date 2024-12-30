import { Star, Quote } from "lucide-react";

const stories = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechStart Inc.",
    image: "/customer1.png",
    quote: "The AI matchmaking saved us countless hours in finding the right influencers for our tech products.",
    metrics: "150% ROI increase",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Brand Manager",
    company: "Global Brands Co.",
    image: "/customer2.png",
    quote: "SLOT feature revolutionized how we manage our influencer campaigns across multiple time zones.",
    metrics: "3x engagement rate",
    rating: 5
  },
  {
    name: "Emma Davis",
    role: "Social Media Lead",
    company: "Fashion Forward",
    image: "/customer3.png",
    quote: "The real-time analytics provided insights we never had access to before. Game-changing!",
    metrics: "200k+ reach",
    rating: 5
  }
];

export const CustomerStories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            See how leading brands are transforming their influencer marketing
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={story.name}
              className="relative group"
              style={{
                animation: "fade-up 0.5s ease-out forwards",
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800 transition-all duration-300 hover:scale-105">
                <Quote className="w-10 h-10 text-purple-500 mb-4 opacity-50" />
                
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-12 h-12 rounded-full border-2 border-purple-500"
                  />
                  <div>
                    <h3 className="text-white font-semibold">{story.name}</h3>
                    <p className="text-gray-400 text-sm">{story.role}</p>
                    <p className="text-purple-400 text-sm">{story.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(story.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>

                <p className="text-gray-300 mb-4 italic">&ldquo;{story.quote}&rdquo;</p>
                
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-purple-400 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    {story.metrics}
                  </p>
                </div>
              </div>

              {/* Decorative gradient border */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};