import Image from "next/image";

const About = () => {
  return (
    <section className="pb-4 pt-[120px] md:pt-[130px] lg:pb-8 lg:pt-[130px]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Title Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-medium">About Us</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg">
            East Gafat Engineering Group is a global leader in providing
            sustainable, high-quality products and services across industries,
            committed to innovation and trusted partnerships.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          
            <Image
              src="/images/hero/who.jpg"
              alt="About Us"
              width={600}
              height={350}
              className="rounded-xl border border-gray-700 shadow-lg"
            />
      
      
          <div>
          <h2 className="text-gold mb-4 text-2xl font-medium">Who We Are</h2>
            <p className="mb-6 leading-relaxed">
              East Gafat Engineering Group (EGEG), is a diversified umbrella
              company overseeing multiple business divisions across corporate
              segments. East Gafat Mining and Trading PLC, one of the section
              companies that leads the “mining, agriculture, medical supply,
              manufacturing, and export trade” backbones section of the
              business.
            </p>
            <ul className="list-disc space-y-3">
              <li>
                Mining, (EGEG). is operating resource exploration, evaluating
                and exploitation, mainly Gold, Coal, Dimensional stone, Iron
                ore, and Gemstones.
              </li>
              <li>
                Agriculture/farming investment sector, East Gafat Mining and
                Trading PLC, plays a dynamic role in farming Sugarcane grain,
                oilseeds, cereals, vegetables, and fruits.
              </li>
              <li>
                The medical supply division ensures access to essential
                healthcare products, including pharmaceuticals, disposable
                medical items, dental supplies, and advanced medical equipment,
                improving healthcare infrastructure.
              </li>
              <li>
                The manufacturing arm produces high-quality clothing, paints,
                tiles, and ceramics, fostering local production and innovation.
              </li>
              <li>
                Export and Import Trade; EGEG: East Gafat Mining and Trading
                PLC. Exports agricultural products, minerals, textiles, and
                manufactured goods, connects local Ethiopian products to the
                global marketplace. Equivalents, to meet local demand, we import
                essential medical supplies, industrial equipment, and
                specialized products, ensuring high-quality healthcare items and
                goods.
              </li>
            </ul>
            <p className="my-6 leading-relaxed">
              With a commitment to excellence, sustainability, and innovation,
              East Gafat Engineering Group (EGEG), sectoral East Gafat Mining
              and Trading PLC continues to expand the investment sector to
              impact positively across industries, to contribute community
              healthcare and economic development.
            </p>
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
                text: "Driving sustainable development for stakeholders, client and customer satisfaction in delivering excellent provision across: Mining, Trading, Medical supply, Farming, and Manufacturing.  ",
              },
              {
                title: "Our Vision",
                text: "Leading innovation, global trade, and being practicable across multiple sectors.",
              },
              {
                title: "Our Core Values",
                text: "Integrity & Transparency: conducting the business with honesty, accountability, and ethical responsibility, ensuring trust in every partnership, client, and customer.",
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
