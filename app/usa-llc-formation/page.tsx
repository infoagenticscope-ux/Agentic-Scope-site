"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ModalContext } from "@/components/ClientShell";
import { usaLlcPackages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { siteConfig } from "@/data/site";
import {
  Flag,
  CheckCircle2,
  ShieldCheck,
  FileText,
  Clock,
  ArrowRight,
  MessageCircle,
  AlertCircle,
  Scale,
  Sparkles,
} from "lucide-react";

export default function USALlcFormationPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-20">
      
      {/* Hero */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold tracking-wide">
            <Flag className="w-3.5 h-3.5" />
            <span>US LIMITED LIABILITY COMPANY REGISTRATION</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            USA LLC Formation <br />
            <span className="text-gradient-red">For Non-US Residents Worldwide</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base text-gray-300 leading-relaxed">
            Form a fully compliant US LLC in Wyoming, Delaware, Florida, or Texas with zero US residency or SSN required. Includes state filing, Articles of Organization, federal EIN from the IRS, Operating Agreement, and Registered Agent representation.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openModal("usa-llc", "Silver ($299)")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-glow"
            >
              Start US LLC Formation ($199)
            </button>
            <Link
              href="/wyoming-vs-delaware"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#14141C] border border-red-900/40 text-gray-200 hover:text-white font-bold text-xs"
            >
              Wyoming vs Delaware Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
            US LLC Pricing Tiers
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Transparent US LLC Formation Packages
          </h2>
          <p className="text-xs text-gray-400">
            Form your US entity with complete legal documentation, EIN from the IRS, and client portal support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {usaLlcPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={() => openModal("usa-llc", `${pkg.name} (${pkg.price})`)}
            />
          ))}
        </div>
      </section>

      {/* State Selection Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider">
                Jurisdiction Advisory
              </span>
              <h3 className="text-2xl font-bold text-white">
                Which State Is Best For Your Business?
              </h3>
            </div>
            <Link
              href="/wyoming-vs-delaware"
              className="text-xs font-semibold text-red-500 hover:text-red-400 flex items-center gap-1"
            >
              <span>Read in-depth comparison</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#14141C] border border-red-900/30 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-white">Wyoming LLC</h4>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30">
                  Recommended for Global Commerce
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                Best for international e-commerce sellers, remote agencies, freelancers, and bootstrapped software founders. Low annual franchise tax ($62), strong member privacy, and zero state income tax.
              </p>
              <ul className="space-y-1.5 text-xs text-gray-300 pt-2">
                <li className="flex items-center gap-2">✓ $62/yr lowest maintenance fee</li>
                <li className="flex items-center gap-2">✓ Member names not on public registry</li>
                <li className="flex items-center gap-2">✓ Top choice for Amazon, Shopify & Stripe</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#14141C] border border-red-900/30 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="text-lg font-bold text-white">Delaware LLC</h4>
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  Venture Capital Standard
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                The gold standard for high-growth tech startups intending to raise external capital from US angel investors or venture funds. Features the Court of Chancery with centuries of corporate law precedent.
              </p>
              <ul className="space-y-1.5 text-xs text-gray-300 pt-2">
                <li className="flex items-center gap-2">✓ Universal investor familiarity</li>
                <li className="flex items-center gap-2">✓ Specialized business court of law</li>
                <li className="flex items-center gap-2">✓ $300/yr minimum annual franchise tax</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/40 flex items-start gap-3 text-xs text-gray-400">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Regulatory Disclaimer: </strong>
            Information is provided for general business guidance and does not constitute legal, tax or financial advice. Filing fees, state franchise requirements, and beneficial ownership compliance are subject to applicable federal and state laws.
          </p>
        </div>
      </section>

    </div>
  );
}
