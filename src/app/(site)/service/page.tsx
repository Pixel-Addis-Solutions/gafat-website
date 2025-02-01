'use client'
import { useGetServicesQuery } from "@/store/app-api";

const Services = () => {
  const { data: services = []} = useGetServicesQuery();

  return (
    <section className="bg-white pt-[120px] md:pt-[130px] lg:pt-[130px] pb-4 lg:pb-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Our Services</h2>
        <p className="text-lg text-gray-600 mt-2">We deliver quality and excellence in pharmaceutical imports and distribution.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img src={service.image} className="flex justify-center"></img>
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
