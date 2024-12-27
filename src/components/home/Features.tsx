import { Calendar, Search, DollarSign, Users } from "lucide-react";

const features = [
  {
    name: "Smart KOL Search",
    description: "Find the perfect influencers for your brand with our advanced search and filtering system.",
    icon: Search,
  },
  {
    name: "Campaign Management",
    description: "Easily create, manage, and track your influencer marketing campaigns in one place.",
    icon: Calendar,
  },
  {
    name: "ROI Tracking",
    description: "Monitor campaign performance and measure your return on investment in real-time.",
    icon: DollarSign,
  },
  {
    name: "Collaboration Tools",
    description: "Streamline communication between brands and KOLs with built-in messaging and file sharing.",
    icon: Users,
  },
];

export const Features = () => {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to succeed
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Powerful tools to help you manage your influencer marketing campaigns effectively
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="flex flex-col items-start transition-all duration-300 hover:transform hover:scale-105"
                style={{
                  animation: `fade-up 0.5s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <div className="rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 p-[1px]">
                  <div className="rounded-2xl bg-black p-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <dt className="mt-4 font-semibold text-white">{feature.name}</dt>
                <dd className="mt-2 leading-7 text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};