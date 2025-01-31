import { Package, ShieldCheck, Truck, Star } from "lucide-react";

const services = [
  {
    icon: <Package className="w-10 h-10 text-blue-600" />,
    title: "Pharmaceutical Import",
    description: "We provide high-quality pharmaceutical products from trusted global suppliers.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-blue-600" />,
    title: "Quality Assurance",
    description: "Ensuring all our products meet international safety and quality standards.",
  },
  {
    icon: <Truck className="w-10 h-10 text-blue-600" />,
    title: "Efficient Distribution",
    description: "Fast and reliable delivery to pharmacies, hospitals, and healthcare providers.",
  },
  {
    icon: <Star className="w-10 h-10 text-blue-600" />,
    title: "Regulatory Compliance",
    description: "We handle all regulatory approvals to ensure seamless product importation.",
  },
];

const Services = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        <p className="text-lg text-gray-600 mt-2">We deliver quality and excellence in pharmaceutical imports and distribution.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
