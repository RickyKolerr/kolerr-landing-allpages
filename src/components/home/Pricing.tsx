import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Fit Plan",
    price: "299",
    description: "Perfect for growing brands starting with influencer marketing.",
    features: [
      "Up to 10 active campaigns",
      "Basic analytics",
      "Email support",
      "KOL discovery tools",
    ],
  },
  {
    name: "Pay-per-Search",
    price: "499",
    description: "For established brands looking to scale their influencer marketing.",
    features: [
      "Unlimited campaigns",
      "Advanced analytics",
      "Priority support",
      "Custom KOL matching",
    ],
  },
];

export const Pricing = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-kolerr-primary">Pricing</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the plan that best fits your needs. All plans include access to our core features.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 transition-all duration-300 hover:shadow-xl hover:ring-kolerr-primary/50"
              style={{
                animation: `fade-up 0.5s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0,
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-gray-900">
                    {plan.name}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    ${plan.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-600">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check className="h-6 w-5 flex-none text-kolerr-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <Button
                className="mt-8 w-full bg-kolerr-primary hover:bg-kolerr-secondary transition-all duration-300 transform hover:scale-105"
              >
                Get started today
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};