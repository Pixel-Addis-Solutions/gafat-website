'use client'
import { motion } from "framer-motion";
import { useGetServicesQuery } from "@/store/app-api";
import { Building, Factory, Globe, Hammer, Leaf, Package, Pickaxe, ShieldCheck, Star, Truck } from "lucide-react";
const services = [

  {
    icon: <Pickaxe className="w-10 h-10 text-primary" />,
    title: "Mining",
    description: "Exploring Resource, Modeling, Mine planning and Exploitation mineral resources",
  },
  {
    icon: <Leaf className="w-10 h-10 text-primary" />, 
    title: "Farming",
    description: "Sustainable sourcing and distribution of agricultural products to global markets.",
  },
  {
    icon: <Factory className="w-10 h-10 text-primary" />,
    title: "Manufacturing",
    description: "Innovative manufacturing solutions, including textile production for various industries.",
  },
  {
    icon: <Hammer className="w-10 h-10 text-primary" />,
    title: "Construction Materials",
    description: "Supplying high-quality marble, granite, paint, and other construction essentials.",
  },
  {
    icon: <Globe className="w-10 h-10 text-primary" />,
    title: "Export & Import Trade",
    description: "Global export of high-quality products across various industries.",
  },
  {
    icon: <Package className="w-10 h-10 text-primary" />,
    title: "Medical Supply",
    description: "We provide high-quality medical products and equipment from trusted global suppliers.",
  },
  
 
  
 
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
          Facilities
          </h2>
          <p className="text-base text-gray-400 max-w-lg mx-auto mt-3">
          We mine valuables, we supply healthies, we farm organics, we manufacture soften &amp; asset imputes,
and, we trade all to the globe.
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
