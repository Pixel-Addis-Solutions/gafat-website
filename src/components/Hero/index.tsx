"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/hero/back.png",
  "/images/hero/back1.png",
  "/images/hero/back2.png",
];


const Hero = () => {
  return (
    <section id="home" className="h-screen relative overflow-hidden">
      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => `
            <span class="${className} custom-dot"></span>
          `,
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-60"></div>
              <div className="container relative z-10 flex h-full items-center justify-center text-center">
                <div className="max-w-[800px]">
                  <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl lg:text-5xl">
                  Your Trusted Partner in Pharmaceutical, Mining, Agriculture, Manufacturing & Textile Distribution
                  </h1>
                  <p className="mx-auto mb-9 max-w-[700px] text-lg font-light text-white sm:text-xl">
                  Delivering high-quality products and solutions across pharmaceuticals, mining, agriculture, manufacturing, and textiles with reliability and excellence.
                  
                  </p>
                  <div className="flex justify-center gap-5">
                    <Link
                      href="/contact"
                      className="flex items-center gap-4 rounded-md bg-primary px-7 py-[14px] text-base font-medium text-white shadow-xl transition hover:bg-white hover:text-dark"
                    >
                      Contact Us
                    </Link>
                    <Link
                      href="/about"
                      className="flex items-center gap-4 rounded-md bg-white/[0.12] px-6 py-[14px] text-base font-medium text-white transition hover:bg-white hover:text-dark"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Pagination */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          border: 2px solid #CB8E3C; /* Border for inactive dots */
          background: transparent;
          opacity: 1;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          background: #CB8E3C; /* Active dot color */
          border: none;
        }
      `}</style>
    </section>
  );
};

export default Hero;
