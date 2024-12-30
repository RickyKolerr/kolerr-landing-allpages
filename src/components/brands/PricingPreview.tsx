import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { plans } from "@/config/pricing";

const displayPlans = plans.slice(1, 4); // Show only Basic, Standard, and Pro plans

export const PricingPreview = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
          Choose Your Plan
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {displayPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative p-6 rounded-xl ${
                index === 1
                  ? "bg-gradient-to-br from-purple-600 to-pink-600 border-2 border-purple-400"
                  : "bg-gray-900 border border-gray-800"
              }`}
            >
              {index === 1 && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
              <p className="text-3xl font-bold text-white mb-2">${plan.price}</p>
              <p className="text-sm text-gray-400 mb-6">${plan.yearlyPrice}/year (save 15%)</p>
              <p className="text-gray-300 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-green-500" />
                    {feature.name}: {feature.value || (feature.included ? "Yes" : "No")}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  index === 1
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