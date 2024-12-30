import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { plans } from "@/config/pricing";

const agencyPlans = [
  {
    name: "Starter",
    description: "Manage up to 3 clients",
    price: plans[1].price, // Basic plan price
    features: [
      "3 client accounts",
      "Basic analytics",
      "Team collaboration",
      "Email support",
    ],
  },
  {
    name: "Professional",
    description: "Manage up to 10 clients",
    price: plans[3].price, // Pro plan price
    features: [
      "10 client accounts",
      "Advanced analytics",
      "Priority support",
      "White-label reports",
    ],
  },
  {
    name: "Enterprise",
    description: "Unlimited clients & custom features",
    price: "Custom",
    features: [
      "Unlimited clients",
      "Custom features",
      "Dedicated support",
      "API access",
    ],
  },
];

export const AgencyPricing = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Agency-Specific Plans
          </h2>
          <p className="text-gray-300 text-lg">
            Choose the perfect plan for your agency's needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {agencyPlans.map((plan) => (
            <div
              key={plan.name}
              className="bg-gradient-to-br from-purple-900/50 to-black p-8 rounded-xl border border-purple-500/20"
            >
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-gray-300 mb-4">{plan.description}</p>
              <div className="text-3xl font-bold text-white mb-6">
                {typeof plan.price === "string" ? plan.price : `$${plan.price}`}
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-purple-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};