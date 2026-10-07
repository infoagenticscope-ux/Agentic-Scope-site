"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { CreditCard, AlertCircle, CheckCircle2 } from "lucide-react";

export default function ItinPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <CreditCard className="w-3.5 h-3.5" />
          <span>INDIVIDUAL TAXPAYER IDENTIFIER</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          ITIN Application Assistance
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Individual Taxpayer Identification Number application assistance with IRS Form W-7 for foreign business owners, investors, and non-resident directors.
        </p>
        <div>
          <button
            onClick={() => openModal("usa-llc", "ITIN Application ($199)")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Apply for ITIN Assistance ($199)
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-[#0D0D12] border border-red-950/40 space-y-3">
            <h3 className="text-base font-bold text-white">What Is An ITIN?</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              An ITIN is a nine-digit tax processing number issued by the IRS for foreign nationals who have federal tax reporting requirements in the United States but are not eligible for a Social Security Number (SSN).
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0D0D12] border border-red-950/40 space-y-3">
            <h3 className="text-base font-bold text-white">Why Founders Obtain It</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              An ITIN allows you to open US personal credit cards (Amex, Chase), verify US PayPal accounts, file annual federal tax returns, and establish a long-term US financial reputation.
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/40 flex items-start gap-3 text-xs text-gray-400">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Regulatory Notice: </strong>
            Approval of ITIN applications is solely determined by the Internal Revenue Service based on the applicant's eligibility, tax status, and supporting documentation. Agentic Scope does not guarantee IRS approval.
          </p>
        </div>
      </section>
    </div>
  );
}
