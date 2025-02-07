import {  Factory, Globe, Hammer, Leaf, Package, Pickaxe, ShieldCheck, Star, Truck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "East Gafat Engineering Group | Global Trading & Sustainable Solutions",
  description: "East Gafat Engineering Group is a trusted global trading company delivering high-quality products and sustainable solutions across industries like mining, construction, agriculture, and healthcare. We ensure reliability, innovation, and excellence in everything we do.",
  keywords: "global trading company, high-quality products, sustainable solutions, mining, construction, agriculture, healthcare, trusted supplier, innovation, excellence",
  // Open Graph Meta Tags for Social Media Sharing
  openGraph: {
    title: "East Gafat Engineering Group | Global Trading & Sustainable Solutions",
    description: "Delivering high-quality products and sustainable solutions across industries. Partner with us for innovative, reliable, and ethical services.",
    images: ["/images/logo/logo.png"],  // Update with the path to a suitable image
    url: "https://eastgafat.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "East Gafat Engineering Group | Global Trading & Sustainable Solutions",
    description: "Trusted global trading company delivering high-quality products and sustainable solutions.",
    images: ["/images/logo/logo.png"],  // Update with the path to a suitable image
  },
};

const Services = () => {
  const services = [
    {
      icon: <Pickaxe className="w-10 h-10 text-primary" />,
      title: "Mining",
      description: "Responsible extraction and supply of essential minerals and resources.",
    },
    {
      icon: <Leaf className="w-10 h-10 text-primary" />, 
      title: "Agriculture",
      description: "Sustainable sourcing and distribution of agricultural products to global markets.",
    },
    {
      icon: <Globe className="w-10 h-10 text-primary" />,
      title: "Export",
      description: "Global export of high-quality products across various industries.",
    },
    {
      icon: <Package className="w-10 h-10 text-primary" />,
      title: "Medical Supply",
      description: "We provide high-quality medical products and equipment from trusted global suppliers.",
    },
    {
      icon: <Factory className="w-10 h-10 text-primary" />,
      title: "Manufacturing & Textile",
      description: "Innovative manufacturing solutions, including textile production for various industries.",
    },
    {
      icon: <Hammer className="w-10 h-10 text-primary" />,
      title: "Construction Materials",
      description: "Supplying high-quality marble, granite, paint, and other construction essentials.",
    },
  ];

  return (
    <section className="bg-white pt-[120px] md:pt-[130px] lg:pt-[130px] pb-4 lg:pb-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        <p className="text-lg text-gray-600 mt-2">We deliver quality and excellence in pharmaceutical imports and distribution.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{service.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
