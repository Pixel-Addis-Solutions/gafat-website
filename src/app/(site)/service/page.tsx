import { Factory, Globe, Hammer, Leaf, Package, Pickaxe, ShieldCheck, Star, Truck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "East Gafat Engineering Group | Global Trading & Sustainable Solutions",
  description: "East Gafat Engineering Group is a trusted global trading company delivering high-quality products and sustainable solutions across industries like mining, construction, agriculture, and healthcare. We ensure reliability, innovation, and excellence in everything we do.",
  keywords: "global trading company, high-quality products, sustainable solutions, mining, construction, agriculture, healthcare, trusted supplier, innovation, excellence",
  openGraph: {
    title: "East Gafat Engineering Group | Global Trading & Sustainable Solutions",
    description: "Delivering high-quality products and sustainable solutions across industries. Partner with us for innovative, reliable, and ethical services.",
    images: ["/images/logo/logo.png"],  
    url: "https://eastgafat.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "East Gafat Engineering Group | Global Trading & Sustainable Solutions",
    description: "Trusted global trading company delivering high-quality products and sustainable solutions.",
    images: ["/images/logo/logo.png"],  
  },
};

const Services = () => {
  const services = [
    {
      icon: <Pickaxe className="w-12 h-12 text-primary transition-transform transform hover:scale-110" />,
      title: "Mining",
      description: "Exploring Resource, Modeling, Mine planning and Exploitation of mineral resources",
    },
    {
      icon: <Leaf className="w-12 h-12 text-primary transition-transform transform hover:scale-110" />,
      title: "Farming",
      description: "Sustainable sourcing and distribution of agricultural products to global markets.",
    },
    {
      icon: <Factory className="w-12 h-12 text-primary transition-transform transform hover:scale-110" />,
      title: "Manufacturing ",
      description: "Innovative manufacturing solutions, including textile production for various industries.",
    },
    {
      icon: <Hammer className="w-12 h-12 text-primary transition-transform transform hover:scale-110" />,
      title: "Construction Materials",
      description: "Supplying high-quality marble, granite, paint, and other construction essentials.",
    },
    {
      icon: <Globe className="w-12 h-12 text-primary transition-transform transform hover:scale-110" />,
      title: "Export & Import Trade",
      description: "Global export of high-quality products across various industries.",
    },
    {
      icon: <Package className="w-12 h-12 text-primary transition-transform transform hover:scale-110" />,
      title: "Medical Supply",
      description: "We provide high-quality medical products and equipment from trusted global suppliers.",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-white to-[#F1E1A6] pt-[120px] md:pt-[130px] lg:pt-[130px] pb-4 lg:pb-8 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">Our Services</h2>
        <p className="text-lg mt-2 text-gray-700 opacity-80">Delivering excellence and innovation across industries like mining, construction, healthcare, and more.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-500 hover:scale-105 transform transition-all ease-in-out">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
