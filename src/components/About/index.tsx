import Image from "next/image";

const About = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
        <p className="text-lg text-center text-gray-600 mb-12">
          Committed to delivering high-quality pharmaceuticals and healthcare solutions with integrity and excellence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="about-us-image.jpg" alt="About Us" className="rounded-lg shadow-lg"/>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
            <p className="text-gray-600 mb-4">
              We are a leading pharmaceutical import company dedicated to ensuring access to high-quality medications. Our focus on safety, innovation, and customer care helps us deliver trusted healthcare solutions across Ethiopia.
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Reliable supplier of high-quality pharmaceuticals</li>
              <li>Strict compliance with global healthcare standards</li>
              <li>Timely and efficient delivery</li>
              <li>Customer-focused services with expert support</li>
            </ul>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Our Commitment</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Mission</h3>
              <p className="text-gray-600">
                To improve healthcare access by providing innovative and high-quality pharmaceutical products, maintaining international safety standards, and fostering long-term partnerships with healthcare providers.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Vision</h3>
              <p className="text-gray-600">
                To be Ethiopia’s most trusted pharmaceutical import company, ensuring that every individual has access to safe, effective, and affordable medication.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-3">Our Core Values</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li><strong>Integrity:</strong> We uphold ethical practices in everything we do.</li>
                <li><strong>Quality:</strong> We ensure strict compliance with pharmaceutical standards.</li>
                <li><strong>Innovation:</strong> We continuously seek better healthcare solutions.</li>
                <li><strong>Customer-Centric:</strong> We prioritize customer needs and satisfaction.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="contact.html" className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
