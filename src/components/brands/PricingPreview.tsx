import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$99",
    features: ["5 Active Campaigns", "Basic Analytics", "Email Support"],
    popular: false
  },
  {
    name: "Pro",
    price: "$199",
    features: ["15 Active Campaigns", "Advanced Analytics", "Priority Support", "Custom Reports"],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Unlimited Campaigns", "Custom Solutions", "Dedicated Manager", "API Access"],
    popular: false
  }
];

export const PricingPreview = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Choose Your Plan
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-xl ${
                plan.popular 
                  ? "bg-gradient-to-br from-purple-600 to-pink-600 border-2 border-purple-400" 
                  : "bg-gray-900 border border-gray-800"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-white mb-6">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button 
                className={`w-full ${
                  plan.popular 
                    ? "bg-white text-purple-600 hover:bg-gray-100" 
                    : "bg-purple-600 text-white hover:bg-purple-700"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};