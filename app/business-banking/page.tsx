"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ModalContext } from "@/components/ClientShell";
import { bankingAndPaymentProviders } from "@/data/providers";
import { siteConfig } from "@/data/site";
import {
  Landmark,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  CreditCard,
  ArrowRight,
  Globe2,
} from "lucide-react";

export default function BusinessBankingPage() {
  const { openModal } = useContext(ModalContext);

  const bankingProviders = bankingAndPaymentProviders.filter(
    (p) => p.category === "bank" || p.category === "fintech-card"
  );

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-5xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Landmark className="w-3.5 h-3.5" />
          <span>MULTI-CURRENCY CORPORATE TREASURY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Global Business Banking Solutions
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Assistance opening high-tier international business accounts for non-resident UK LTD and US LLC companies with Wise Business, Tide, Airwallex, Payoneer, and WorldFirst.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => openModal("banking", "Wise Business (£70)")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Start Banking Application
          </button>
          <Link
            href="/payment-gateways"
            className="px-6 py-3.5 rounded-xl bg-[#14141C] border border-red-900/40 text-gray-200 hover:text-white font-bold text-xs"
          >
            Payment Gateways (Stripe / PayPal)
          </Link>
        </div>
      </section>

      {/* Providers Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
            Supported Financial Rails
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Available Banking Providers
          </h2>
          <p className="text-xs text-gray-400">
            Assisted onboarding, documentation readiness, and underwriting compliance support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bankingProviders.map((prov) => (
            <div
              key={prov.id}
              className="p-6 rounded-3xl bg-[#0D0D12] border border-red-950/40 hover:border-red-600/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20 text-red-500 flex items-center justify-center font-bold text-sm">
                      <Landmark className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{prov.name}</h3>
                      <span className="text-[10px] text-gray-400">{prov.category.toUpperCase()}</span>
                    </div>
                  </div>
                  <span className="text-sm font-extrabold text-white px-2.5 py-1 rounded-lg bg-[#14141C] border border-red-950/40">
                    {prov.price}
                  </span>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {prov.description}
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-[#14141C] border border-red-950/30">
                    <strong className="text-red-400 block text-[11px] mb-0.5">Best For:</strong>
                    <span className="text-gray-300 text-[11px]">{prov.useCase}</span>
                  </div>

                  <div className="p-2.5 rounded-xl bg-[#14141C] border border-red-950/30">
                    <strong className="text-gray-400 block text-[11px] mb-0.5">Eligibility:</strong>
                    <span className="text-gray-400 text-[11px]">{prov.eligibility}</span>
                  </div>
                </div>

                <ul className="space-y-1 text-[11px] text-gray-300 pt-1">
                  {prov.features.slice(0, 3).map((f, i) => (
                    <li key={i} className="flex items-center gap-1.5 truncate">
                      <span className="w-1 h-1 rounded-full bg-red-500" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-5 mt-4 border-t border-red-950/30">
                <button
                  onClick={() => openModal("banking", `${prov.name} (${prov.price})`)}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-red-600/20 border border-red-950/40 hover:border-red-600/50 text-xs font-bold text-gray-200 hover:text-white transition flex items-center justify-center gap-1.5"
                >
                  <span>Apply for {prov.name} ({prov.price})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mandatory Regulatory Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/40 flex items-start gap-3 text-xs text-gray-400">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Important Banking Disclaimer: </strong>
            Agentic Scope does not provide banking or deposit services directly. We assist founders with entity structuring, application preparation, and documentation alignment. Opening and ongoing maintenance of business bank accounts is strictly subject to provider approval and independent compliance checks by each financial institution.
          </p>
        </div>
      </section>
    </div>
  );
}
