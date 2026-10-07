"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { DollarSign, CheckCircle2, AlertCircle } from "lucide-react";

export default function PayPalPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <DollarSign className="w-3.5 h-3.5" />
          <span>GLOBAL CONSUMER WALLET</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          PayPal Business Setup (£20)
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Establish an authentic verified PayPal Business account under your UK LTD or US LLC to tap into 400M+ active global consumers and enhance checkout conversions.
        </p>
        <div>
          <button
            onClick={() => openModal("banking", "PayPal Business (£20)")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Get PayPal Business Setup (£20)
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-8 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-4">
          <h2 className="text-xl font-bold text-white">Why PayPal Business Matters</h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            International buyers in the US, UK, and Europe trust PayPal for customer protection. Integrating PayPal Business into your Shopify, WooCommerce, or custom store frequently increases conversions by 15%–28% for cross-border traffic.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-[#14141C] border border-red-950/30 text-xs text-gray-300">
              <strong className="text-white block mb-1">Corporate Entity Verification</strong>
              Connects directly to your UK LTD or US LLC documents.
            </div>
            <div className="p-4 rounded-xl bg-[#14141C] border border-red-950/30 text-xs text-gray-300">
              <strong className="text-white block mb-1">Multi-Currency Balances</strong>
              Hold, convert, and withdraw in USD, GBP, EUR, and more.
            </div>
            <div className="p-4 rounded-xl bg-[#14141C] border border-red-950/30 text-xs text-gray-300">
              <strong className="text-white block mb-1">Seller Protection</strong>
              Guidance complying with PayPal buyer and seller protection terms.
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/40 flex items-start gap-3 text-xs text-gray-400">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Compliance Disclaimer: </strong>
            Approval of PayPal accounts and merchant terms are governed solely by PayPal Pte. Ltd. and PayPal Inc. We do not provide financial guarantees.
          </p>
        </div>
      </section>
    </div>
  );
}
