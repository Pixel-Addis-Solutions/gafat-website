'use client'
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="py-20 lg:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-10 leading-tight">
            Our Services
          </h2>
          <p className="text-lg text-center text-gray-600 mb-16 lg:w-2/3 mx-auto font-light">
            Providing exceptional, reliable, and fully compliant pharmaceutical services, tailored for healthcare institutions and professionals.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Service Item 1 */}
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="text-primary text-7xl">
              📦
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Pharmaceutical Imports</h3>
            <p className="text-gray-600 opacity-80 text-base">
              Sourcing high-quality pharmaceutical products globally, ensuring access to top-tier healthcare.
            </p>
          </div>

          {/* Service Item 2 */}
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="text-primary text-7xl">
              🏥
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Wholesale Distribution</h3>
            <p className="text-gray-600 opacity-80 text-base">
              Delivering pharmaceutical products to hospitals and healthcare institutions with reliability and timeliness.
            </p>
          </div>

          {/* Service Item 3 */}
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="text-primary text-7xl">
              🔬
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Regulatory Compliance</h3>
            <p className="text-gray-600 opacity-80 text-base">
              Ensuring that all products comply with the highest international standards for the safety of patients and professionals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
