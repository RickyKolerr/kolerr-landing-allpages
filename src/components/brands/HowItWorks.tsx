import { Target, Users, LineChart } from "lucide-react";

const steps = [
  {
    title: "Create a Campaign",
    description: "Set your campaign goals and budget.",
    icon: Target,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
  },
  {
    title: "Match with Influencers",
    description: "Our AI scans thousands of KOLs to find the perfect matches.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
  },
  {
    title: "Manage and Measure",
    description: "Launch and track performance in one intuitive dashboard.",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          How It Works
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative"
              style={{
                animation: "fade-up 0.5s ease-out forwards",
                animationDelay: `${index * 0.2}s`,
                opacity: 0
              }}
            >
              <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 border border-gray-700 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <step.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-gray-400 mb-4">{step.description}</p>
                <div className="relative rounded-lg overflow-hidden">
                  <img
                    src={step.image}
                    alt={step.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};