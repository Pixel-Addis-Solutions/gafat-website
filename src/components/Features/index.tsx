'use client'

import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section className="pb-8 pt-8 lg:pb-10 lg:pt-8">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-3xl font-semibold text-primary text-center">Our Pharmaceutical Products</p>
          <p className="text-center text-gray-600 mt-2 lg:w-2/3 mx-auto">
            Offering a broad range of pharmaceutical products sourced from trusted manufacturers, adhering to international safety and quality standards.
          </p>
        </motion.div>
        <motion.div
          className="-mx-4 mt-12 flex flex-wrap lg:mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
