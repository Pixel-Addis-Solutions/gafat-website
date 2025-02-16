import Clients from "@/components/Clients";;
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Service from "@/components/Service";;
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "East Gafat Engineering Group | Global Trading & Sustainable Solutions",
  description: "East Gafat Engineering Group is a trusted global trading company delivering high-quality products and sustainable solutions across industries like mining, construction, agriculture, and healthcare. We ensure reliability, innovation, and excellence in everything we do.",
  keywords: "global trading company, high-quality products, sustainable solutions, mining, construction, agriculture, healthcare, trusted supplier, innovation, excellence",
  // Open Graph Meta Tags for Social Media Sharing
  openGraph: {
    title: "East Gafat Engineering Group | Global Trading & Sustainable Solutions",
    description: "Delivering high-quality products and sustainable solutions across industries. Partner with us for innovative, reliable, and ethical services.",
    images: ["/images/logo/logo.png"],  // Update with the path to a suitable image
    url: "https://eastgafat.com",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "East Gafat Engineering Group | Global Trading & Sustainable Solutions",
    description: "Trusted global trading company delivering high-quality products and sustainable solutions.",
    images: ["/images/logo/logo.png"],  // Update with the path to a suitable image
  },
};

export default function Home() {

  return (
    <main>
      <Hero />
      <Features />
      <Service/>
      <Clients />
      <Contact />
    </main>
  );
}
