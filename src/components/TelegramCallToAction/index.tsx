import { Send } from "lucide-react"; // Importing Send icon for Telegram

const TelegramCallToActionSection = () => {
  return (
    <section className="bg-primary py-16 text-white text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-semibold mb-4">Join Our Telegram Community</h2>
        <p className="text-lg mb-6">
          Be the first to know about our latest updates, news, offers, and much more. Connect with like-minded people and stay informed.
        </p>
        <a 
          href="https://t.me/eastgafat_group" 
          className="bg-white text-primary py-3 px-8 rounded-full font-semibold shadow-md hover:bg-gray-100 transition"
        >
          Join Now
        </a>
      </div>
    </section>
  );
};

export default TelegramCallToActionSection;
