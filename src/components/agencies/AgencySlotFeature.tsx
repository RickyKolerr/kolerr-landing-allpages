import { Button } from "@/components/ui/button";

export const AgencySlotFeature = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Simplify Client Campaigns with SLOTs
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Easily manage influencer collaborations for multiple clients using the SLOT feature.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                "Centralized SLOT management for all clients",
                "AI suggestions for filling slots per campaign",
                "Invite influencers or approve AI-recommended matches",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-gray-300">
                  <svg
                    className="w-5 h-5 text-purple-400 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90"
            >
              Learn More About SLOTs
            </Button>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg"
              alt="SLOT Management Interface"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};