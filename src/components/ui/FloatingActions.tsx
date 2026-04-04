"use client";

import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-40">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918218503127"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform animate-bounce hover:animate-none"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle size={32} />
      </a>

      {/* Mobile Call Button - Visible on Mobile only */}
      <a
        href="tel:+918218503127"
        className="md:hidden w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Call Now"
      >
        <Phone size={28} />
      </a>
    </div>
  );
}
