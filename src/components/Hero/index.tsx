import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="h-screen relative overflow-hidden bg-hero bg-no-repeat bg-cover bg-center pt-[120px] md:pt-[130px] lg:pt-[130px]"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60"></div>

        <div className="container relative z-10">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4">
              <div
                className="hero-content mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Your Trusted Partner in Pharmaceutical Import & Wholesale Distribution
                </h1>
                <p className="mx-auto mb-9 max-w-[700px] text-lg font-light text-white sm:text-xl sm:leading-[1.5]">
                  Delivering high-quality medications and healthcare products to pharmacies, hospitals, and healthcare providers with reliability and excellence.
                </p>
                <ul className="mb-10 flex flex-wrap items-center justify-center gap-5">
                  <li>
                    <Link
                      href="/contact"
                      className="flex items-center gap-4 justify-center rounded-md bg-primary px-7 py-[14px] text-center text-base font-medium text-white shadow-xl transition duration-300 ease-in-out hover:bg-[#004D40]"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 16.92V19C22 20.1 21.1 21 20 21C10.61 21 3 13.39 3 4C3 2.9 3.9 2 5 2H7.09C7.56 2 7.99 2.22 8.22 2.59L10.3 6C10.65 6.55 10.57 7.25 10.14 7.72L8.29 9.71C9.63 12.44 11.55 14.37 14.29 15.71L16.28 13.86C16.75 13.43 17.45 13.35 18 13.7L21.41 15.78C21.78 16.01 22 16.44 22 16.92Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      target="_blank"
                      className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition duration-300 ease-in-out hover:bg-white hover:text-dark"
                    >
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9 18L15 12L9 6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Learn More
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
