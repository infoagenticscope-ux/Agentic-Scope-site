"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { ModalContext } from "@/components/ClientShell";
import { siteConfig } from "@/data/site";
import { ShieldCheck, Sparkles, Globe, Cpu, Users, ArrowRight } from "lucide-react";

export default function AboutPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-20">
      
      {/* Hero */}
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ABOUT AGENTIC SCOPE</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Architecting The Future of <br />
          <span className="text-gradient-red">Global Business & Automation</span>
        </h1>

        <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
          {siteConfig.tagline}. We bridge the gap between statutory corporate establishment (UK LTD & US LLC) and cutting-edge autonomous AI technology.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center font-bold">
              <Globe className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white">Our Mission</h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              To dismantle the geographic and bureaucratic barriers preventing talented founders worldwide from participating in the global dollar and pound economy. We equip non-resident entrepreneurs with legally bulletproof corporate entities, global banking rails, and automated software architecture to scale without borders.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center font-bold">
              <Cpu className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-white">Our Vision</h2>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              We envision an interconnected commercial ecosystem where setting up an international business takes days instead of months, and where mundane customer inquiries, lead qualification, and invoicing workflows are autonomously handled by intelligent AI agents.
            </p>
          </div>
        </div>

        {/* Pillars */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#12121A] border border-red-900/30 space-y-8">
          <h2 className="text-2xl font-bold text-white text-center">Our Core Operating Standards</h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white">1. Absolute Transparency</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                No hidden state surcharges or surprise recurring invoices. Every statutory fee and service scope is documented in advance.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white">2. Deterministic Precision</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Corporate filings, tax disclosures, and software codebases are executed with mathematical accuracy and strict compliance audits.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white">3. End-to-End Synergy</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We combine legal company incorporation, registered office mailrooms, international Stripe gateways, and bespoke AI agents under one roof.
              </p>
            </div>
          </div>
        </div>

        {/* Direct CTA */}
        <div className="p-8 rounded-3xl bg-gradient-to-r from-red-950/60 to-[#0A0A0E] border border-red-700/50 text-center space-y-4">
          <h3 className="text-xl font-bold text-white">Ready to partner with Agentic Scope?</h3>
          <p className="text-xs text-gray-300 max-w-lg mx-auto">
            Contact our advisory team directly on WhatsApp or submit your onboarding application today.
          </p>
          <div className="flex justify-center gap-3 pt-2">
            <button
              onClick={() => openModal("uk-ltd")}
              className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase shadow-glow"
            >
              Start Your Business
            </button>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold text-xs"
            >
              WhatsApp: {siteConfig.phoneFormatted}
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
