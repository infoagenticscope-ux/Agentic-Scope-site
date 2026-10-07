"use client";

import React from "react";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-full bg-[#0D0D12]/90 border border-red-900/40 text-xs font-medium text-gray-200 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap backdrop-blur-md">
        <span>Chat with us on WhatsApp <strong className="text-red-400">{siteConfig.phoneFormatted}</strong></span>
      </div>

      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Agentic Scope on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-[#25D366] to-[#128C7E] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 ring-4 ring-[#25D366]/20 hover:ring-[#25D366]/50"
      >
        {/* Pulsing radar ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping -z-10" />

        <MessageCircle className="w-7 h-7 fill-white text-white" />

        {/* Online Indicator Badge */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-red-600 border-2 border-[#08080A] ring-1 ring-white/50" />
      </a>
    </div>
  );
}
