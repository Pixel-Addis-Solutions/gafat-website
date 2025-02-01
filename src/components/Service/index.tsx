'use client'
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#B8860B]">
            Our Services
          </h2>
          <p className="text-base text-gray-400 max-w-lg mx-auto mt-3">
            Premium pharmaceutical solutions, ensuring excellence in healthcare distribution and compliance.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Service Card 1 */}
          <div className="p-6 border border-gray-700 rounded-lg bg-black/20 transition-all duration-300 hover:bg-white/10">
            <div className="text-5xl text-[#FFD700] mb-4">📦</div>
            <h3 className="text-xl font-medium">Pharmaceutical Imports</h3>
            <p className="text-gray-400 mt-1 text-sm">
              Sourcing world-class pharmaceutical products for superior healthcare.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="p-6 border border-gray-700 rounded-lg bg-black/20 transition-all duration-300 hover:bg-white/10">
            <div className="text-5xl text-[#FFD700] mb-4">🏥</div>
            <h3 className="text-xl font-medium">Wholesale Distribution</h3>
            <p className="text-gray-400 mt-1 text-sm">
              Efficient delivery of pharmaceutical products to hospitals and institutions.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="p-6 border border-gray-700 rounded-lg bg-black/20 transition-all duration-300 hover:bg-white/10">
            <div className="text-5xl text-[#FFD700] mb-4">🔬</div>
            <h3 className="text-xl font-medium">Regulatory Compliance</h3>
            <p className="text-gray-400 mt-1 text-sm">
              Ensuring adherence to global pharmaceutical safety standards.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
