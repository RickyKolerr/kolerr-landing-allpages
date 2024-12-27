import { Users, Bell, UserCheck } from "lucide-react";

export const AgencyCollaboration = () => {
  const features = [
    {
      icon: Users,
      title: "Role-Based Access",
      description: "Assign specific roles and permissions to team members",
    },
    {
      icon: Bell,
      title: "Real-Time Notifications",
      description: "Stay updated on campaign progress and team actions",
    },
    {
      icon: UserCheck,
      title: "Task Management",
      description: "Track and assign tasks across your team efficiently",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Collaborate Smarter with Your Team
          </h2>
          <p className="text-gray-300 text-lg">
            Advanced tools to streamline your agency's workflow
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-gradient-to-br from-purple-900/50 to-black p-6 rounded-xl border border-purple-500/20"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-500/20 rounded-lg">
                  <feature.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {feature.title}
                </h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};