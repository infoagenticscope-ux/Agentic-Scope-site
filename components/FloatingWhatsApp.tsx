"use client";

import React from "react";
import { siteConfig } from "@/data/site";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <div className="hidden sm:block mr-3 px-3.5 py-1.5 rounded-full bg-[#0D0D12]/95 border border-green-600/40 text-xs font-medium text-gray-200 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap backdrop-blur-md">
        <span>Chat with us on WhatsApp <strong className="text-[#25D366]">{siteConfig.phoneFormatted}</strong></span>
      </div>

      <a
        href={siteConfig.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Formation Scope Ltd on WhatsApp"
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ring-4 ring-[#25D366]/30 hover:ring-[#25D366]/60"
      >
        {/* Official WhatsApp Logo Icon */}
        <svg 
          viewBox="0 0 24 24" 
          width="32" 
          height="32" 
          fill="currentColor" 
          className="text-white drop-shadow-sm"
        >
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M18.403 5.638A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.2 4.488L3 21l4.661-1.222a8.964 8.964 0 0 0 4.39 1.144h.004c4.947 0 8.976-4.027 8.978-8.977 0-2.399-.934-4.655-2.63-6.307zM12.053 19.395c-1.341 0-2.657-.36-3.807-1.042l-.273-.162-2.827.741.755-2.756-.177-.282a7.448 7.448 0 0 1-1.144-3.917c.002-4.114 3.351-7.462 7.47-7.462 1.994 0 3.868.777 5.277 2.187a7.414 7.414 0 0 1 2.182 5.279c-.002 4.114-3.35 7.462-7.468 7.462zm4.095-5.592c-.225-.113-1.328-.655-1.533-.73-.205-.075-.354-.112-.504.113s-.58.73-.711.879-.262.169-.486.056c-.225-.113-.948-.349-1.806-1.114-.667-.595-1.117-1.33-1.248-1.555s-.014-.347.099-.459c.101-.1.225-.262.338-.393s.15-.225.225-.375.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.182-.438-.367-.378-.504-.385l-.429-.008c-.15 0-.394.056-.6.281s-.787.769-.787 1.875.806 2.175.918 2.325c.112.15 1.586 2.422 3.842 3.396.537.232.956.37 1.282.474.54.172 1.03.148 1.418.09.433-.064 1.328-.543 1.515-1.068.188-.526.188-.976.131-1.069-.056-.094-.206-.15-.431-.263z"
          />
        </svg>

        {/* Subtle Online Dot */}
        <span className="absolute top-1 right-1 w-3 h-3 rounded-full bg-emerald-300 border-2 border-[#25D366]" />
      </a>
    </div>
  );
}
