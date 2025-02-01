import Clients from "@/components/Clients";;
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import TelegramCallToActionSection from "@/components/TelegramCallToAction";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliable Pharmaceutical Import & Supply | High-Quality Medicines & Healthcare",
  description: "Partner with a trusted pharmaceutical import company providing high-quality, certified medicines and healthcare products to pharmacies, hospitals, and healthcare providers. Contact us today for reliable supply solutions.",
};

export default function Home() {

  return (
    <main>
      <Hero />
      <Features />
      <Service/>
      <Clients />
      {/* <Faq /> */}
      <Testimonials />
      {/* <News/> */}
      <TelegramCallToActionSection/>
      <Contact />
    </main>
  );
}
