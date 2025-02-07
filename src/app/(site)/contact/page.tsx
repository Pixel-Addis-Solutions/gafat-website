import { MapPin, Phone, Send } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Premium Support",
  description: "Get in touch with us anytime, we're here to help.",
};

const ContactPage = () => {
  return (
    <section className="pb-12 px-6 max-w-6xl mx-auto pt-[120px] md:pt-[130px] lg:pt-[130px] pb-4 lg:pb-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Get in Touch</h2>
        <p className="text-lg text-gray-600 mt-3">We’re here to assist you. Reach out anytime.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h3>
          <p className="text-gray-600 mb-6">Feel free to contact us via Telegram or phone.</p>

          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-primary" />
              <span className="text-gray-700 text-lg font-medium">+251 911 576 379</span>
            </div>

            <div className="flex items-center space-x-4">
              <Send className="w-6 h-6 text-primary" />
              <a
                href="https://t.me/YourTelegramHandle"
                target="_blank"
                className="text-primary text-lg font-medium hover:underline"
              >
                Join Our Telegram Community
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="text-gray-700 text-lg font-medium">Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Embedded Map */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
        
          <iframe
            className="w-full h-72 md:h-80 rounded-2xl"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.7705242191273!2d38.78641738029596!3d8.993251368032624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b850070bdd3ed%3A0x41e19890a166badc!2sSelam%20City%20Mall%20%231%20%7C%20Bole!5e0!3m2!1sen!2set!4v1738784392660!5m2!1sen!2set"
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
