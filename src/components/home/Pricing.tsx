import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "0",
    yearlyPrice: "0",
    description: "Perfect for trying out our platform",
    features: [
      { name: "AI Searches", value: "5/month" },
      { name: "Active Slots", value: "0" },
      { name: "Advanced Filtering", included: false },
      { name: "Data Analytics", value: "Basic" },
      { name: "Project Tracking", included: false },
      { name: "Priority Support", included: false },
      { name: "Team Collaboration", included: false },
    ],
  },
  {
    name: "Basic",
    price: "8",
    yearlyPrice: "82",
    description: "For individuals starting with influencer marketing",
    features: [
      { name: "AI Searches", value: "50/month" },
      { name: "Active Slots", value: "3 slots" },
      { name: "Advanced Filtering", included: true },
      { name: "Data Analytics", value: "Basic" },
      { name: "Project Tracking", included: false },
      { name: "Priority Support", included: false },
      { name: "Team Collaboration", included: false },
    ],
  },
  {
    name: "Standard",
    price: "15",
    yearlyPrice: "153",
    description: "For growing brands and creators",
    features: [
      { name: "AI Searches", value: "150/month" },
      { name: "Active Slots", value: "6 slots" },
      { name: "Advanced Filtering", included: true },
      { name: "Data Analytics", value: "Standard" },
      { name: "Project Tracking", included: true },
      { name: "Priority Support", included: false },
      { name: "Team Collaboration", included: false },
    ],
  },
  {
    name: "Pro",
    price: "30",
    yearlyPrice: "306",
    description: "For professional marketers and agencies",
    features: [
      { name: "AI Searches", value: "Unlimited" },
      { name: "Active Slots", value: "15 slots" },
      { name: "Advanced Filtering", included: true },
      { name: "Data Analytics", value: "Advanced" },
      { name: "Project Tracking", included: true },
      { name: "Priority Support", included: true },
      { name: "Team Collaboration", included: false },
    ],
  },
  {
    name: "Enterprise",
    price: "80",
    yearlyPrice: "816",
    description: "For large organizations and teams",
    features: [
      { name: "AI Searches", value: "Unlimited" },
      { name: "Active Slots", value: "Unlimited" },
      { name: "Advanced Filtering", included: true },
      { name: "Data Analytics", value: "Premium" },
      { name: "Project Tracking", included: true },
      { name: "Priority Support", value: "Dedicated" },
      { name: "Team Collaboration", included: true },
    ],
  },
];

const searchPacks = [
  { name: "Single Search", searches: 1, price: "0.25" },
  { name: "Search Pack", searches: 10, price: "2.20" },
  { name: "Search Pack", searches: 50, price: "9.00" },
  { name: "Search Pack", searches: 100, price: "17.00" },
];

export const Pricing = () => {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
            Pricing
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Choose your perfect plan
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Simple, transparent pricing for everyone. All plans include access to our core features.
          </p>
        </div>

        {/* Monthly Plans */}
        <div className="mx-auto mt-16 grid max-w-lg gap-8 grid-cols-1 lg:max-w-none lg:grid-cols-5">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className="flex flex-col justify-between rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 xl:p-10 transition-all duration-300 hover:bg-white/10"
              style={{
                animation: `fade-up 0.5s ease-out forwards`,
                animationDelay: `${index * 0.2}s`,
                opacity: 0,
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg font-semibold leading-8 text-white">{plan.name}</h3>
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-300">{plan.description}</p>
                <div className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-white">${plan.price}</span>
                  <span className="text-sm font-semibold leading-6 text-gray-300">/month</span>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  ${plan.yearlyPrice}/year (save 15%)
                </div>
                <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                  {plan.features.map((feature) => (
                    <li key={feature.name} className="flex gap-x-3 items-center">
                      {feature.included !== undefined ? (
                        feature.included ? (
                          <Check className="h-6 w-5 flex-none text-cyan-400" />
                        ) : (
                          <X className="h-6 w-5 flex-none text-gray-500" />
                        )
                      ) : (
                        <Check className="h-6 w-5 flex-none text-cyan-400" />
                      )}
                      <span>
                        {feature.name}
                        {feature.value && `: ${feature.value}`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <Button className="mt-8 w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90 transition-all duration-300 transform hover:scale-105">
                Get started
              </Button>
            </div>
          ))}
        </div>

        {/* Pay-Per-Search Plans */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Pay-Per-Search Plans (International)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {searchPacks.map((pack, index) => (
              <div
                key={`${pack.name}-${pack.searches}`}
                className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 text-center transition-all duration-300 hover:bg-white/10"
                style={{
                  animation: `fade-up 0.5s ease-out forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                }}
              >
                <h4 className="text-lg font-semibold text-white mb-2">
                  {pack.searches > 1 ? `${pack.searches} Searches` : "Single Search"}
                </h4>
                <p className="text-3xl font-bold text-white mb-4">${pack.price}</p>
                <Button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 hover:opacity-90">
                  Purchase
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};