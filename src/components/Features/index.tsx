'use client'

import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";
import { } from "framer-motion";

const Features = () => {
  return (
    <section className="pb-8 pt-8 lg:pb-10 lg:pt-8">
      <div className="container">
        <div>
          <p className="text-3xl font-semibold text-primary text-center">Our Key Industries</p>
          <p className="text-center text-gray-600 mt-2 lg:w-2/3 mx-auto">
            We specialize in a wide range of Industries including pharmaceutical products, manufacturing, textile, agriculture, mining, and more. Our solutions are designed to optimize global trade and enhance sustainability across various industries.
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
