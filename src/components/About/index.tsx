import Image from "next/image";

const About = () => {
  return (
    <section className="pb-4 pt-[120px] md:pt-[130px] lg:pb-8 lg:pt-[130px]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-medium">About Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            Group is a global leader in providing sustainable, high-quality
            products and services across industries, committed to innovation and
            trusted partnerships.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div>
            <Image
              src="/images/hero/back.png"
              alt="About Us"
              width={600}
              height={400}
              className="rounded-xl border border-gray-700 shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-gold mb-4 text-2xl font-medium">Who We Are</h2>
            <p className="mb-6 leading-relaxed">
              e- GAFAT TRADING is a dynamic and innovative company committed to
              providing top-quality products and services across a variety of
              industries. From mining to medical supplies and construction
              materials, we pride ourselves on offering sustainable solutions
              that meet global demands with reliability and integrity.
            </p>
            <h2 className="text-gold mb-4 text-2xl font-medium">
              Why Choose Us?
            </h2>
            <ul className="list-inside list-disc space-y-2">
              <li>
                Sustainability: We prioritize ethical sourcing and
                environmentally responsible practices in every aspect of our
                operations.
              </li>
              <li>
                Global Reach: Our services span worldwide, ensuring products are
                delivered where they are needed most.
              </li>
              <li>
                Quality Assurance: We adhere to the highest safety and industry
                standards, ensuring excellence in all our products.
              </li>
              <li>
                Innovation: Our diverse expertise drives innovation, helping
                industries grow and adapt to changing global needs.
              </li>
              <li>
                Trusted Partnerships: We build long-term relationships with
                clients by delivering value, transparency, and dedication.
              </li>
            </ul>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="mt-20">
          <h2 className="mb-10 text-center text-3xl font-medium">
            Our Commitment
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Our Mission",
                text: "To deliver innovative, high-quality, and sustainable solutions that empower industries and enhance global communities.",
              },
              {
                title: "Our Vision",
                text: "To be a globally recognized leader in providing reliable, ethical, and cutting-edge products and services across diverse industries.",
              },
              {
                title: "Our Core Values",
                text: "We uphold integrity, sustainability, innovation, excellence, and customer commitment in everything we do.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-xl border bg-gray-50 p-6 text-center shadow-lg"
              >
                <h3 className="mt-4 text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
