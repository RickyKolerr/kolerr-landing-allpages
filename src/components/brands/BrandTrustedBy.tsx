import { motion } from "framer-motion";

export const BrandTrustedBy = () => {
  const brands = [
    "Nike", "Adidas", "Puma", "Under Armour", "New Balance",
    "Reebok", "Asics", "Fila", "Converse", "Vans"
  ];

  return (
    <section className="py-12 bg-black/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <p className="text-center text-gray-400 mb-8">
          Trusted by leading brands worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-gray-500 text-xl font-bold hover:text-purple-400 transition-colors cursor-pointer"
            >
              {brand}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};