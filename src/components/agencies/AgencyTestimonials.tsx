export const AgencyTestimonials = () => {
  const testimonials = [
    {
      quote: "This platform has revolutionized how we manage influencer campaigns for our clients.",
      author: "Sarah Johnson",
      role: "Marketing Director",
      company: "Digital First Agency",
    },
    {
      quote: "The SLOT feature saves us hours of work when coordinating multiple campaigns.",
      author: "Michael Chen",
      role: "Campaign Manager",
      company: "Global Media Partners",
    },
    {
      quote: "White-labeled reporting has made our client presentations much more professional.",
      author: "Emma Williams",
      role: "Account Executive",
      company: "Creative Solutions",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-900/20 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Loved by Top Agencies
          </h2>
          <p className="text-gray-300 text-lg">
            See what other agencies are saying about our platform
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-gradient-to-br from-purple-900/50 to-black p-6 rounded-xl border border-purple-500/20"
            >
              <blockquote className="text-gray-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-full" />
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};