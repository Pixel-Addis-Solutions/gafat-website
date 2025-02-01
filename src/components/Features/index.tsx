'use client'

import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { } from "framer-motion";

const Features = () => {
  return (
    <section className="pb-8 pt-8 lg:pb-10 lg:pt-8">
      <div className="container">
        <div>
          <p className="text-3xl font-semibold text-primary text-center">Our Pharmaceutical Products</p>
          <p className="text-center text-gray-600 mt-2 lg:w-2/3 mx-auto">
            Offering a broad range of pharmaceutical products sourced from trusted manufacturers, adhering to international safety and quality standards.
          </p>
        </div>
        <div
          className="-mx-4 mt-12 flex flex-wrap lg:mt-10"
        >
          {featuresData.map((feature, i) => (
            <SingleFeature key={i} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
