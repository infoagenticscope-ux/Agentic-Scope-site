"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { siteConfig } from "@/data/site";
import { ShieldCheck, Sparkles, ArrowRight, MessageCircle, Zap, Globe2 } from "lucide-react";

interface InnerPromoBannerProps {
  headline?: string;
  subheadline?: string;
  badge?: string;
  serviceTarget?: string;
}

export default function InnerPromoBanner({
  headline = "Launch Your International Company in 3–5 Business Days",
  subheadline = "Official registry incorporation, mandatory biometric ID verification, prestige address, and multi-currency business banking guidance.",
  badge = "2026 NON-RESIDENT SPECIALIST DESK",
  serviceTarget = "uk-ltd",
}: InnerPromoBannerProps) {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="relative w-full rounded-3xl overflow-hidden backdrop-blur-2xl border border-red-500/40 p-6 sm:p-10 shadow-glow-lg transition-all group">
      
      {/* Background Gradient & Animated Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#200A11] via-[#120B10] to-[#0D0911] opacity-95 -z-10" />
      <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-red-600/20 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute -left-20 -top-20 w-80 h-80 bg-red-800/15 rounded-full blur-[90px] pointer-events-none -z-10" />

      {/* Shining Light Sweep Effect on Hover */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden">
        <div
          className="w-[200%] h-full absolute -top-full -left-full group-hover:translate-x-[200%] group-hover:translate-y-[200%] transition-transform duration-1200 ease-out"
          style={{
            background:
              "linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.12) 48%, rgba(239, 68, 68, 0.28) 52%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        {/* Content */}
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-600/20 border border-red-500/40 text-red-300 text-[10px] font-black tracking-widest uppercase shadow-glow-sm">
            <Sparkles className="w-3 h-3 text-red-400 animate-pulse" />
            <span>{badge}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-tight">
            {headline}
          </h3>

          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-normal">
            {subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1 text-[11px] text-gray-400">
            <span className="flex items-center gap-1.5 text-gray-300">
              <ShieldCheck className="w-4 h-4 text-red-500" />
              <span>Companies House & IRS Compliant</span>
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Globe2 className="w-4 h-4 text-red-500" />
              <span>Zero Domestic Residency Needed</span>
            </span>
            <span className="flex items-center gap-1.5 text-gray-300">
              <Zap className="w-4 h-4 text-red-500" />
              <span>Multi-Currency Stripe & Banking</span>
            </span>
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
          <button
            onClick={() => openModal(serviceTarget)}
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-xs uppercase tracking-wider shadow-glow hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <span>Start Your Setup</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/50 font-bold text-xs flex items-center justify-center gap-2 transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-[#25D366]" />
            <span>Consult on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
}
