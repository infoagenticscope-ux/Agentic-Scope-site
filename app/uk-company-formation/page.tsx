"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ModalContext } from "@/components/ClientShell";
import { ukLtdPackages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { siteConfig } from "@/data/site";
import {
  Building2,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Clock,
  ArrowRight,
  MessageCircle,
  AlertCircle,
  HelpCircle,
  Globe,
  Sparkles,
  Lock,
} from "lucide-react";

export default function UKCompanyFormationPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-20">
      
      {/* Hero */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold tracking-wide">
            <Building2 className="w-3.5 h-3.5" />
            <span>OFFICIAL COMPANIES HOUSE REGISTRATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            UK LTD Company Formation <br />
            <span className="text-gradient-red">For Non-Residents Worldwide</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base text-gray-300 leading-relaxed">
            Form your UK Limited Company 100% remotely with official Companies House registration, Certificate of Incorporation, Memorandum & Articles, UTR tax registration, and prestige London address options.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openModal("uk-ltd", "Silver (£170)")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-xs uppercase tracking-wider shadow-glow"
            >
              Start UK LTD Formation
            </button>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold text-xs flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366]" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
            Fixed & Transparent Pricing
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Choose Your UK LTD Package
          </h2>
          <p className="text-xs text-gray-400">
            Government incorporation fee included in every package. No hidden renewal surprises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ukLtdPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={() => openModal("uk-ltd", `${pkg.name} (${pkg.price})`)}
            />
          ))}
        </div>
      </section>

      {/* What's Included & Value Proposition */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-10">
          <div className="max-w-3xl space-y-3">
            <h3 className="text-2xl font-bold text-white">
              The Complete UK Corporate Setup
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              When you incorporate through Agentic Scope, you receive an authorized corporate entity ready for international business operations, merchant billing, and commercial contracts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#14141C] border border-red-950/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Statutory Company Documents</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Official Digital Certificate of Incorporation with Companies House seal, Memorandum & Articles of Association, and official share certificates issued to your named shareholders.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#14141C] border border-red-950/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Authentication & UTR</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                We secure your Companies House Authentication Code for direct portal filings and guide the automatic issuance of your HMRC Unique Taxpayer Reference (UTR) for Corporation Tax.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#14141C] border border-red-950/30 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Mandatory ID Verification</h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Fully compliant with the UK Economic Crime & Corporate Transparency Act 2026. Biometric passport identity verification processed smoothly for international directors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Non-Resident Founder Journey */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
            Application Journey
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            4 Simple Steps to Your UK Company
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: "Step 01",
              title: "Choose Package & Name",
              desc: "Select Starter, Silver, Gold, or Platinum and provide your preferred business name.",
            },
            {
              step: "Step 02",
              title: "Submit Director Details",
              desc: "Provide passport copy and address information through our secure portal.",
            },
            {
              step: "Step 03",
              title: "Companies House Filing",
              desc: "Our specialists review all articles and submit directly to Companies House.",
            },
            {
              step: "Step 04",
              title: "Delivery & Banking",
              desc: "Receive digital company kit within 3–5 business days and start your banking applications.",
            },
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#0F0F16] border border-red-950/40 relative">
              <span className="text-xs font-mono font-bold text-red-500 block mb-2">{item.step}</span>
              <h4 className="text-sm font-bold text-white mb-2">{item.title}</h4>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Disclaimer Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/40 flex items-start gap-3 text-xs text-gray-400">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Compliance Disclaimer: </strong>
            Agentic Scope is a registered formation agent and corporate service provider. We are not a law firm or financial institution. Banking and payment gateway accounts are subject to provider compliance checks. Requirements are subject to applicable laws and regulatory updates.
          </p>
        </div>
      </section>

    </div>
  );
}
