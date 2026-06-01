"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const phoneNumber = "2347079989263"; // 

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 text-white shadow-lg transition hover:bg-green-600"
    >
      <MessageCircle size={20} />
      <span className="hidden sm:inline font-medium">
        WhatsApp
      </span>
    </a>
  );
}