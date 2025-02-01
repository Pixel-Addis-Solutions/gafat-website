import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegramPlane, FaTiktok, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="wow fadeInUp relative z-10 bg-primary pt-10" data-wow-delay=".15s">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between gap-8">
          {/* Logo and Social Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-4/12 xl:w-3/12">
            <div className="mb-10">
              <Link href="/" className="mb-6 inline-block">
                {/* <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={100}
                  height={30}
                  className="max-w-full"
                /> */}
                <p className="text-2xl font-semibold text-white">EAST GAFAT TRADING</p>
              </Link>
              <p className="mb-8 max-w-[270px] text-base text-white">
              We are a trusted pharmaceutical import company dedicated to delivering high-quality medical products and healthcare solutions with integrity and excellence.
              </p>
              <div className="flex items-center gap-4">
                <a
                  aria-label="social link"
                  href="/#"
                  className="text-white hover:text-white text-xl"
                >
                  <FaFacebook />
                </a>
                <a
                  aria-label="social link"
                  href="/#"
                  className="text-white hover:text-white text-xl"
                >
                  <FaInstagram />
                </a>
                <a
                  aria-label="social link"
                  href="/#"
                  className="text-white hover:text-white text-xl"
                >
                  <FaTwitter />
                </a>
                <a
                  aria-label="social link"
                  href="/#"
                  className="text-white hover:text-white text-xl"
                >
                  <FaTiktok />
                </a>
                <a
                  aria-label="social link"
                  href="/#"
                  className="text-white hover:text-white text-xl"
                >
                  <FaTelegramPlane />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-2/12">
            <h4 className="mb-4 text-lg font-medium text-white">Quick Links</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/">
                  <h4 className="text-lg font-medium text-white hover:text-white cursor-pointer">
                    Home
                  </h4>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <h4 className="text-lg font-medium text-white hover:text-white cursor-pointer">
                    About Us
                  </h4>
                </Link>
              </li>
              <li>
                <Link href="/service">
                  <h4 className="text-lg font-medium text-white hover:text-white cursor-pointer">
                    Service
                  </h4>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <h4 className="text-lg font-medium text-white hover:text-white cursor-pointer">
                    Contact
                  </h4>
                </Link>
              </li>
            </ul>
          </div>

          {/* Community Section */}
          <div className="w-full md:w-1/3 lg:w-4/12">
            <h4 className="mb-4 text-lg font-medium text-white">Community</h4>
            <p className="text-white mb-4">
              Join our Telegram community.
            </p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2 bg-white hover:bg-primary hover:text-white hover:border hover:border-2 hover:border-white rounded-lg text-primary flex items-center space-x-2">
                <FaTelegramPlane className="text-lg" />
                <span>Join Our Telegram</span>
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="border-t border-white border-opacity-40 py-8 mt-6 lg:mt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-between text-center md:flex-nowrap md:text-left">
            {/* Policies */}
            <div className="w-full mb-4 md:mb-0">
              <div className="flex justify-center md:justify-start gap-4">
                <Link href="/terms" className="text-base text-white hover:underline">
                  Privacy policy
                </Link>
              </div>
            </div>
            {/* Attribution */}
            <div className="w-full md:text-right">
              <p className="text-base text-white">
                Designed and Developed by{" "}
                <a
                  href="https://www.pixeladdis.com/"
                  rel="nofollow noopener noreferrer"
                  target="_blank"
                  className="text-white hover:underline"
                >
                  Pixel Addis Solutions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;