import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {

  const phoneNumber = "919999999999"; // 👈 Replace with your number
  const message = "Assalamualaikum, I want to know more about your Jubbah collection.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <div className="relative flex items-center justify-center w-14 h-14 rounded-full shadow-lg 
      bg-[#25D366] hover:scale-110 transition duration-300">

        {/* WhatsApp Icon */}
        <FaWhatsapp className="text-white text-2xl" />

        {/* Pulse Effect */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-20 animate-ping"></span>
      </div>

      {/* Tooltip */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 
      bg-brand-primary text-white text-xs px-3 py-1 rounded-md opacity-0 
      group-hover:opacity-100 transition whitespace-nowrap shadow-md">
        Chat With Us
      </span>
    </a>
  );
};

export default WhatsAppButton;