import Image from "next/image";

const About = () => {
  return (
    <section className="pt-[120px] md:pt-[130px] lg:pt-[130px] pb-4 lg:pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-medium">About Us</h1>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Delivering premium healthcare solutions with integrity, innovation, and excellence.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <Image src="/images/hero/back.png" alt="About Us" width={600} height={400} className="rounded-xl shadow-lg border border-gray-700" />
          </div>
          <div>
            <h2 className="text-2xl font-medium text-gold mb-4">Who We Are</h2>
            <p className="mb-6 leading-relaxed">
              As a leading pharmaceutical importer, we provide high-quality medicines with a commitment to safety, innovation, and customer care.
            </p>
            <h2 className="text-2xl font-medium text-gold mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Trusted supplier of premium pharmaceuticals</li>
              <li>Adherence to global healthcare standards</li>
              <li>Efficient and timely distribution network</li>
              <li>Unmatched customer support and expertise</li>
            </ul>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-medium text-center mb-10">Our Commitment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Our Mission", text: "To enhance healthcare accessibility by offering innovative, high-quality pharmaceutical products while maintaining the highest safety standards." },
              { title: "Our Vision", text: "To be Ethiopia’s most trusted pharmaceutical importer, ensuring safe and affordable medication for all." },
              { title: "Our Core Values", text: "Integrity, Quality, Innovation, and Customer-Centric Excellence." },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl shadow-lg border text-center">
                <h3 className="text-xl font-semibold text-gray-800 mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
