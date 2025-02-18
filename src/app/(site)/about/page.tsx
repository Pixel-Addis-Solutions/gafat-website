import About from "@/components/About";
import Clients from "@/components/Clients";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "East Gafat Engineering Group | Global Trading & Sustainable Solutions",
  icons: "/favicon.ico",
  description: "East Gafat Engineering Group is a global leader in providing sustainable, high-quality products and services across industries, committed to innovation and trusted partnerships",
  keywords: "global trading company, high-quality products, sustainable solutions, mining, construction, agriculture, healthcare, trusted supplier, innovation, excellence",
  // Open Graph Meta Tags for Social Media Sharing
  openGraph: {
    title: "East Gafat Engineering Group | Global Trading & Sustainable Solutions",
    description: "East Gafat Engineering Group is a global leader in providing sustainable, high-quality products and services across industries, committed to innovation and trusted partnerships.",
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

const AboutPage = () => {
  return (
    <main>
      <About />
      <Clients/>
    </main>
  );
};

export default AboutPage;
