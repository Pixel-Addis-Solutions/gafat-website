"use client";

import { useState } from "react";
import { FaTelegramPlane, FaTiktok } from "react-icons/fa";
import { motion } from "framer-motion";

export default function SocialMediaButtons() {
  const [isHoveredTelegram, setIsHoveredTelegram] = useState(false);
  const [isHoveredTikTok, setIsHoveredTikTok] = useState(false);

  const openTelegram = () => {
    window.open("https://t.me/YourTelegramCommunity", "_blank");
  };

  const openTikTok = () => {
    window.open("https://www.tiktok.com/@YourTikTokProfile", "_blank");
  };

  return (
    <div className="fixed bottom-8 right-8 z-[999] flex items-center justify-end space-x-4">
      {/* Telegram Button */}
      <motion.div
        onClick={openTelegram}
        onMouseEnter={() => setIsHoveredTelegram(true)}
        onMouseLeave={() => setIsHoveredTelegram(false)}
        whileTap={{ scale: 0.95 }}
        className="flex items-center rounded-full bg-blue-500 text-white shadow-lg transition-all duration-300 hover:bg-blue-600"
        style={{
          width: isHoveredTelegram ? "190px" : "40px", // Expand width on hover
          height: "40px",
          padding: isHoveredTelegram ? "0 16px" : "0 12px",
          justifyContent: isHoveredTelegram ? "space-between" : "center", // Ensures proper spacing
        }}
      >
        <motion.div
          className="flex items-center justify-center w-10 h-10"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <FaTelegramPlane size={22} />
        </motion.div>

        {isHoveredTelegram && (
          <motion.span
            className="whitespace-nowrap text-sm font-medium ml-3"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Join Our Telegram
          </motion.span>
        )}
      </motion.div>

      {/* TikTok Button */}
      <motion.div
        onClick={openTikTok}
        onMouseEnter={() => setIsHoveredTikTok(true)}
        onMouseLeave={() => setIsHoveredTikTok(false)}
        whileTap={{ scale: 0.95 }}
        className="flex items-center rounded-full bg-black text-white shadow-lg transition-all duration-300 hover:bg-gray-800"
        style={{
          width: isHoveredTikTok ? "190px" : "40px", // Expand width on hover
          height: "40px",
          padding: isHoveredTikTok ? "0 16px" : "0 12px",
          justifyContent: isHoveredTikTok ? "space-between" : "center", // Ensures proper spacing
        }}
      >
       

        {isHoveredTikTok && (
          <motion.span
            className="whitespace-nowrap text-sm font-medium ml-3"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            exit={{ opacity: 0, width: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            Follow Us on TikTok
          </motion.span>
        )}
      </motion.div>
    </div>
  );
}
