export const plans = [
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

export const searchPacks = [
  { name: "Single Search", searches: 1, price: "0.25" },
  { name: "Search Pack", searches: 10, price: "2.20" },
  { name: "Search Pack", searches: 50, price: "9.00" },
  { name: "Search Pack", searches: 100, price: "17.00" },
];