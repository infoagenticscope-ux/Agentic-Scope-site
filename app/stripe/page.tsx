"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { Zap, CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";

export default function StripePage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Zap className="w-3.5 h-3.5" />
          <span>GLOBAL PAYMENT INFRASTRUCTURE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Stripe Setup & Guidance (£20)
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Connect your verified UK LTD or US LLC to a fully operational Stripe account. Accept credit cards globally, configure Stripe Radar fraud prevention, and automate payouts to your business bank.
        </p>
        <div>
          <button
            onClick={() => openModal("banking", "Stripe Setup (£20)")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Get Stripe Setup (£20)
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-8 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-6">
          <h2 className="text-xl font-bold text-white">What Is Included In Our Stripe Service</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/30 space-y-2">
              <h3 className="text-sm font-bold text-white">Documentation Alignment</h3>
              <p className="text-xs text-gray-400">
                Aligning your company number, registered office address, UTR/EIN, and director identity to match Stripe underwriting requirements.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/30 space-y-2">
              <h3 className="text-sm font-bold text-white">Bank Payout Connection</h3>
              <p className="text-xs text-gray-400">
                Connecting multi-currency payout routing numbers from Wise, Tide, Payoneer, or Mercury directly into your Stripe Dashboard.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/30 space-y-2">
              <h3 className="text-sm font-bold text-white">E-Commerce Web Integration</h3>
              <p className="text-xs text-gray-400">
                Guidance integrating Stripe Checkout, Payment Links, Shopify gateway, and WooCommerce webhooks.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/30 space-y-2">
              <h3 className="text-sm font-bold text-white">Radar AI Fraud Shield</h3>
              <p className="text-xs text-gray-400">
                Configuring 3D Secure 2.0 (3DS) rules to block high-risk cards and minimize dispute chargebacks.
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/40 flex items-start gap-3 text-xs text-gray-400">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Underwriting Disclaimer: </strong>
            Stripe operates as an independent licensed financial infrastructure provider. Account activation and risk reviews are determined by Stripe. Agentic Scope does not guarantee approval.
          </p>
        </div>
      </section>
    </div>
  );
}
