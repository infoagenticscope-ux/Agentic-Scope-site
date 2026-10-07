"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { Scale, CheckCircle2, AlertCircle } from "lucide-react";

export default function BoiReportPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Scale className="w-3.5 h-3.5" />
          <span>FINCEN CORPORATE TRANSPARENCY ACT</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          FinCEN BOI Report Filing ($99)
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Beneficial Ownership Information (BOI) reporting electronically prepared and filed with the U.S. Financial Crimes Enforcement Network (FinCEN). Fast, accurate, and fully compliant.
        </p>
        <div>
          <button
            onClick={() => openModal("usa-llc", "BOI Report Filing ($99)")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            File BOI Report Now ($99)
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-8 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-4">
          <h2 className="text-xl font-bold text-white">Who Must File BOI?</h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Under the Corporate Transparency Act (CTA), all domestic reporting companies (including newly formed and existing LLCs and corporations) must report information about their beneficial owners—individuals who ultimately own or control at least 25% of the company or exercise substantial control.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-[#14141C] border border-red-950/30 text-xs text-gray-300">
              <strong className="text-white block mb-1">Electronic Submission</strong>
              Filed directly through the official FinCEN BOSS secure portal.
            </div>
            <div className="p-4 rounded-xl bg-[#14141C] border border-red-950/30 text-xs text-gray-300">
              <strong className="text-white block mb-1">Official Transcript Proof</strong>
              Receive an official FinCEN Submission Confirmation receipt.
            </div>
            <div className="p-4 rounded-xl bg-[#14141C] border border-red-950/30 text-xs text-gray-300">
              <strong className="text-white block mb-1">Included in Gold Tier</strong>
              BOI filing is already included in our US LLC Gold package.
            </div>
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/40 flex items-start gap-3 text-xs text-gray-400">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Important Regulatory Notice: </strong>
            Requirements are subject to applicable federal laws and ongoing regulatory updates by FinCEN. Non-compliance can carry civil fines of up to $500 per day and criminal penalties.
          </p>
        </div>
      </section>
    </div>
  );
}
