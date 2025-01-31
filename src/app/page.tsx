import About from "@/components/About";
import HomeBlogSection from "@/components/Blog/HomeBlogSection";
import CallToAction from "@/components/CallToAction";
import Clients from "@/components/Clients";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import News from "@/components/News";
import Service from "@/components/Service";
import Team from "@/components/Team";
import TelegramCallToActionSection from "@/components/TelegramCallToAction";
import Testimonials from "@/components/Testimonials";
import { getAllPosts } from "@/utils/markdown";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliable Pharmaceutical Import & Supply | High-Quality Medicines & Healthcare",
  description: "Partner with a trusted pharmaceutical import company providing high-quality, certified medicines and healthcare products to pharmacies, hospitals, and healthcare providers. Contact us today for reliable supply solutions.",
};

export default function Home() {
  const posts = getAllPosts(["title", "date", "excerpt", "coverImage", "slug"]);

  return (
    <main>
      <ScrollUp />
      <Hero />
      <Features />
      <Service/>
      {/* <Clients /> */}
      <Faq />
      <Testimonials />
      <News/>
      <TelegramCallToActionSection/>
      <Contact />
    </main>
  );
}
