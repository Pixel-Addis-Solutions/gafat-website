import Clients from "@/components/Clients";;
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import TelegramCallToActionSection from "@/components/TelegramCallToAction";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "East Gafat",
  description: "Trusted global trading company committed to delivering high-quality products and sustainable solutions across industries, ensuring reliability, innovation, and excellence."}

export default function Home() {

  return (
    <main>
      <Hero />
      <Features />
      <Service/>
      <Clients />
      <Testimonials />
      <TelegramCallToActionSection/>
      <Contact />
    </main>
  );
}
