import { Star } from "lucide-react";

const stories = [
  {
    name: "Sarah Johnson",
    company: "TechStart Inc.",
    image: "/customer1.png",
    quote: "The AI matchmaking saved us countless hours in finding the right influencers.",
    metrics: "150% ROI increase"
  },
  {
    name: "Michael Chen",
    company: "Global Brands Co.",
    image: "/customer2.png",
    quote: "SLOT feature revolutionized how we manage our campaigns.",
    metrics: "3x engagement rate"
  },
  {
    name: "Emma Davis",
    company: "Fashion Forward",
    image: "/customer3.png",
    quote: "The analytics provided insights we never had access to before.",
    metrics: "200k+ reach"
  }
];

export const CustomerStories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Trusted by Leading Brands
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div
              key={story.name}
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="text-white font-semibold">{story.name}</h3>
                  <p className="text-gray-400 text-sm">{story.company}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">{story.quote}</p>
              <p className="text-purple-400 font-semibold">{story.metrics}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};