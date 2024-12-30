import { ArrowRight, Briefcase, Users2, ChartBar, Target } from "lucide-react";

const steps = [
  {
    title: "Client Onboarding",
    description: "Seamlessly add and organize client profiles with our intuitive interface.",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI-Powered Matching",
    description: "Let our AI find the perfect influencers for each campaign.",
    icon: Target,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Campaign Management",
    description: "Coordinate multiple campaigns and influencers in real-time.",
    icon: Users2,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Performance Analytics",
    description: "Generate comprehensive reports with actionable insights.",
    icon: ChartBar,
    color: "from-orange-500 to-red-500",
  },
];

export const AgencyWorkflow = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Streamlined Workflow
          </h2>
          <p className="text-gray-300 text-lg">
            A simple yet powerful process designed for agency success
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-purple-900/50 to-black p-8 rounded-xl border border-purple-500/20 h-full hover:border-purple-500/40 transition-all duration-300">
                <div className={`inline-flex p-4 rounded-lg bg-gradient-to-r ${step.color} bg-opacity-20 mb-6`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <span className="absolute top-4 right-4 text-4xl font-bold text-purple-500/20 group-hover:text-purple-500/30 transition-colors">
                  {index + 1}
                </span>
                {index < steps.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-purple-400 hidden lg:block" />
                )}
                <h3 className="text-xl font-semibold text-white mb-3">
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