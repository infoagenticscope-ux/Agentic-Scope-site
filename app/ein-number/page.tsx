"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { Hash, CheckCircle2, Clock, FileCheck } from "lucide-react";

export default function EinNumberPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Hash className="w-3.5 h-3.5" />
          <span>IRS FEDERAL TAX IDENTIFIER</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          EIN Number Registration (IRS)
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Obtain your 9-digit Employer Identification Number (EIN) directly from the Internal Revenue Service. 100% compliant for non-US residents without Social Security Number (SSN).
        </p>
        <div>
          <button
            onClick={() => openModal("usa-llc", "EIN Registration ($30)")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Get EIN Registration ($30)
          </button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-[#0D0D12] border border-red-950/40 space-y-3">
            <h3 className="text-base font-bold text-white">What Is An EIN?</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              An Employer Identification Number (EIN) is a federal tax identification number assigned by the IRS to recognize your business entity for banking, taxation, and legal reporting.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D0D12] border border-red-950/40 space-y-3">
            <h3 className="text-base font-bold text-white">Why You Need It</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              US banks (Wise, Mercury, Relay) and payment processors (Stripe, PayPal) legally require an EIN to open corporate accounts. You also need it to hire US staff or file federal tax reports.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D0D12] border border-red-950/40 space-y-3">
            <h3 className="text-base font-bold text-white">No SSN / ITIN Needed</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Foreign founders do not need a US Social Security Number. We prepare IRS Form SS-4 marking you as a foreign responsible party and handle direct IRS processing.
            </p>
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-[#12121A] border border-red-900/30 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Included In All US LLC Packages
            </h3>
            <p className="text-xs text-gray-400">
              When you form your US LLC with Agentic Scope, federal EIN registration is already included at no extra charge.
            </p>
          </div>
          <button
            onClick={() => openModal("usa-llc", "Starter ($199)")}
            className="px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs whitespace-nowrap shadow-glow-sm"
          >
            Explore LLC Packages ($199)
          </button>
        </div>
      </section>
    </div>
  );
}
