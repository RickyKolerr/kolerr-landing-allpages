import { Star } from "lucide-react";

const stories = [
  {
    name: "David Wilson",
    company: "TechGrowth Inc.",
    image: "/customer1.png",
    quote: "The AI-powered SEO recommendations helped us achieve top rankings.",
    metrics: "250% organic traffic increase"
  },
  {
    name: "Lisa Chen",
    company: "Digital Solutions Co.",
    image: "/customer2.png",
    quote: "Comprehensive SEO analytics transformed our online presence.",
    metrics: "5x keyword rankings"
  },
  {
    name: "Mark Davis",
    company: "E-commerce Plus",
    image: "/customer3.png",
    quote: "The technical SEO insights were game-changing for our platform.",
    metrics: "300% ROI"
  }
];

export const CustomerStories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Success Stories
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
              <p className="text-blue-400 font-semibold">{story.metrics}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};