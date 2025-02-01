'use client'
import { motion } from "framer-motion";
import { useGetServicesQuery } from "@/store/app-api";
import { Package, ShieldCheck, Star, Truck } from "lucide-react";
const services = [
  {
    icon: <Package className="w-10 h-10 text-primary" />,
    title: "Pharmaceutical Import",
    description: "We provide high-quality pharmaceutical products from trusted global suppliers.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    title: "Quality Assurance",
    description: "Ensuring all our products meet international safety and quality standards.",
  },
  {
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: "Efficient Distribution",
    description: "Fast and reliable delivery to pharmacies, hospitals, and healthcare providers.",
  },
  // {
  //   icon: <Star className="w-10 h-10 text-primary" />,
  //   title: "Regulatory Compliance",
  //   description: "We handle all regulatory approvals to ensure seamless product importation.",
  // },
];

const Service = () => {
  // const { data: services = []} = useGetServicesQuery();
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
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
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-center p-6 border border-gray-700 rounded-lg bg-black/20 transition-all duration-300 hover:bg-white/10"
            >
              <div className="text-center text-5xl text-[#FFD700]">{service.icon}</div>
              <h3 className="text-xl font-medium">{service.title}</h3>
              <p className="text-gray-400 mt-1 text-sm">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
