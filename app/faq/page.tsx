"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import FAQAccordion from "@/components/FAQAccordion";
import { HelpCircle, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site";

export default function FAQPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>KNOWLEDGE BASE & SUPPORT</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Frequently Asked Questions
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Detailed answers on UK LTD incorporation, US LLC setup, EIN tax numbers, international banking eligibility, and autonomous AI automation.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FAQAccordion />
      </section>

      <section className="max-w-2xl mx-auto px-4 text-center space-y-3">
        <h3 className="text-lg font-bold text-white">Have a question not listed here?</h3>
        <p className="text-xs text-gray-400">
          Our specialists are available to answer your specific requirements on WhatsApp.
        </p>
        <div className="pt-2">
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow-lg hover:opacity-90"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Chat Directly on WhatsApp ({siteConfig.phoneFormatted})</span>
          </a>
        </div>
      </section>
    </div>
  );
}
