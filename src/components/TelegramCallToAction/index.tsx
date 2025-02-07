import { Send, MessageCircle } from "lucide-react"; // Importing icons for Telegram and WhatsApp

const CallToActionSection = () => {
  return (
    <section className="bg-primary py-16 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-lg mb-6">
          Be the first to know about our latest updates, news, offers, and much more. 
          Connect with like-minded people and stay informed.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* Telegram Button */}
          <a 
            href="https://t.me/eastgafat_group" 
            className="flex items-center bg-white text-primary py-3 px-8 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
          >
            <Send className="mr-2" size={20} /> Chat on Telegram
          </a>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/+251911576379" 
            className="flex items-center bg-green-500 text-white py-3 px-8 rounded-full font-semibold shadow-md hover:bg-green-600 transition"
          >
            <MessageCircle className="mr-2" size={20} /> Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
