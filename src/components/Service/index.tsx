'use client'
import { motion } from "framer-motion";

const Service = () => {
  return (
    <section className="bg-primary py-8 lg:py-6">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-6">Our Services</h2>
          <p className="text-lg text-center text-white mb-12 lg:w-2/3 mx-auto">
            Offering efficient, reliable, and compliant pharmaceutical services tailored to healthcare institutions and professionals.
          </p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Service Card 1 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center hover:bg-blue-50 transition-colors duration-300">
            <div className="text-blue-600 text-4xl mb-3">
              📦
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Pharmaceutical Imports</h3>
            <p className="text-gray-600 text-sm">
              Sourcing high-quality pharmaceutical products globally for enhanced healthcare access.
            </p>
          </div>
          {/* Service Card 2 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center hover:bg-blue-50 transition-colors duration-300">
            <div className="text-blue-600 text-4xl mb-3">
              🏥
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Wholesale Distribution</h3>
            <p className="text-gray-600 text-sm">
              Supplying pharmaceutical products to hospitals and healthcare institutions with reliability.
            </p>
          </div>
          {/* Service Card 3 */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md text-center hover:bg-blue-50 transition-colors duration-300">
            <div className="text-blue-600 text-4xl mb-3">
              🔬
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Regulatory Compliance</h3>
            <p className="text-gray-600 text-sm">
              Ensuring full compliance with international standards for the safety of patients and healthcare professionals.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
