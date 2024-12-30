export const Brands = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-12">
          Trusted by Leading Brands
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {[
            "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
            "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
            "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
            "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
            "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
            "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
          ].map((image, index) => (
            <div
              key={index}
              className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden group"
            >
              <img
                src={image}
                alt={`Brand ${index + 1}`}
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};