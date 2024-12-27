import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Add Client Profiles",
    description: "Create a profile for each client to keep campaigns organized.",
  },
  {
    title: "Match KOLs for Campaigns",
    description: "Find influencers for your clients' campaigns with precision.",
  },
  {
    title: "Manage Slots and Campaigns",
    description: "Coordinate with multiple influencers across clients in real time.",
  },
  {
    title: "Analyze and Report",
    description: "Generate detailed, white-labeled reports for clients.",
  },
];

export const AgencyWorkflow = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-gray-300 text-lg">
            A streamlined process designed for agency workflows
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-900/50 to-black p-6 rounded-xl border border-purple-500/20 h-full">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-purple-400">
                    {index + 1}
                  </span>
                  {index < steps.length - 1 && (
                    <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-purple-400 hidden md:block" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};