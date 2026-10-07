"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { Sparkles, MessageCircle, ArrowRight } from "lucide-react";

export default function AnnouncementBanner() {
  return (
    <div className="relative w-full bg-gradient-to-r from-[#180B0F] via-[#240A10] to-[#12080D] border-b border-red-800/40 text-xs py-2 px-4 overflow-hidden shadow-glow-sm">
      {/* Animated Subtle Shimmer Ray */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/10 to-transparent translate-x-[-100%] animate-[shineAnimation_4s_infinite]" />

      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-gray-300">
        
        {/* Left Indicator & Announcement */}
        <div className="flex items-center gap-2.5 truncate">
          <span className="flex h-2 w-2 relative flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
          </span>

          <span className="text-[11px] sm:text-xs font-semibold text-white tracking-wide truncate">
            <strong className="text-red-400 uppercase tracking-widest text-[10px] mr-1.5 px-1.5 py-0.5 rounded bg-red-950/60 border border-red-800/50">
              2026 LIVE
            </strong>
            Non-Resident Portal Active — Rapid UK LTD & US LLC Formation with Multi-Currency Banking & Stripe
          </span>
        </div>

        {/* Right WhatsApp Fast Action */}
        <div className="hidden md:flex items-center gap-3 flex-shrink-0">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[11px] font-bold text-gray-200 hover:text-white group transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366] fill-[#25D366]" />
            <span>Priority WhatsApp: <strong className="text-white group-hover:text-red-400">{siteConfig.phoneFormatted}</strong></span>
            <ArrowRight className="w-3 h-3 text-red-500 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
