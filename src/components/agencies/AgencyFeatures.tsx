import { Folders, Users2, FileBarChart } from "lucide-react";

const features = [
  {
    title: "Multi-Brand Management",
    description: "Organize campaigns for multiple clients with ease.",
    icon: Folders,
  },
  {
    title: "Team Collaboration Tools",
    description: "Assign tasks, monitor progress, and collaborate with your team effortlessly.",
    icon: Users2,
  },
  {
    title: "White-Labeled Reporting",
    description: "Deliver custom reports with your branding for client presentations.",
    icon: FileBarChart,
  },
];

export const AgencyFeatures = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Agency-Specific Advantages
          </h2>
          <p className="text-gray-300 text-lg">
            Powerful tools designed specifically for agency workflows
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="relative bg-gradient-to-br from-purple-900/50 to-black rounded-xl p-6 border border-purple-500/20"
              style={{
                animation: "fade-up 0.5s ease-out forwards",
                animationDelay: `${index * 0.2}s`,
                opacity: 0,
              }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};