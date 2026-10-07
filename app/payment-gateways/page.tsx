"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ModalContext } from "@/components/ClientShell";
import { bankingAndPaymentProviders } from "@/data/providers";
import { CreditCard, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export default function PaymentGatewaysPage() {
  const { openModal } = useContext(ModalContext);

  const gateways = bankingAndPaymentProviders.filter(
    (p) => p.category === "payment-gateway"
  );

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-5xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <CreditCard className="w-3.5 h-3.5" />
          <span>GLOBAL MERCHANT CARD PROCESSING</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Payment Gateway Setup & Verification
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Accept Visa, Mastercard, American Express, Apple Pay, and local European payment methods across 135+ currencies with Stripe, PayPal, and Mollie for your UK LTD or US LLC.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => openModal("banking", "Stripe Setup (£20)")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Setup Stripe Gateway (£20)
          </button>
          <button
            onClick={() => openModal("banking", "PayPal Business (£20)")}
            className="px-6 py-3.5 rounded-xl bg-[#14141C] border border-red-900/40 text-gray-200 hover:text-white font-bold text-xs"
          >
            Setup PayPal Business (£20)
          </button>
        </div>
      </section>

      {/* Gateway Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gateways.map((gw) => (
            <div
              key={gw.id}
              className="p-7 rounded-3xl bg-[#0D0D12] border border-red-950/40 hover:border-red-600/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-white">{gw.name}</h3>
                  <span className="text-sm font-extrabold text-white px-3 py-1 rounded-xl bg-[#14141C] border border-red-950/40">
                    {gw.price}
                  </span>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {gw.description}
                </p>

                <div className="p-3 rounded-xl bg-[#14141C] border border-red-950/30 text-xs">
                  <strong className="text-red-400 block text-[11px] mb-1">Use Case:</strong>
                  <span className="text-gray-300">{gw.useCase}</span>
                </div>

                <ul className="space-y-1.5 text-xs text-gray-300">
                  {gw.features.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      <span className="text-[11px]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-red-950/30">
                <button
                  onClick={() => openModal("banking", `${gw.name} (${gw.price})`)}
                  className="w-full py-3 rounded-xl bg-red-600/20 hover:bg-red-600 border border-red-600/40 text-xs font-bold text-white transition flex items-center justify-center gap-1.5"
                >
                  <span>Select {gw.name} ({gw.price})</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Underwriting Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/40 flex items-start gap-3 text-xs text-gray-400">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Payment Gateway Disclaimer: </strong>
            Merchant account approvals, processing limits, and holdback reserves are determined solely by Stripe, PayPal, or Mollie underwriting algorithms and compliance reviews. Agentic Scope guarantees compliant business formation, documentation, and technical integration, but cannot guarantee unconditional merchant approval.
          </p>
        </div>
      </section>
    </div>
  );
}
