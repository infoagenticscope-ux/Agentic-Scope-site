"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { FileText, Calendar, CheckCircle2 } from "lucide-react";

export default function UKAnnualFilingPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Calendar className="w-3.5 h-3.5" />
          <span>STATUTORY DEADLINE MANAGEMENT</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          UK Annual Accounts & Filings
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Ensure timely submission of your Confirmation Statement (CS01) and Annual Accounts with Companies House & HMRC. Zero penalties, guaranteed good standing.
        </p>
        <div>
          <button
            onClick={() => openModal("uk-compliance", "Annual Accounts Filing")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow"
          >
            File UK Annual Accounts
          </button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-7 rounded-2xl bg-[#0D0D12] border border-red-950/40 space-y-3">
            <h3 className="text-lg font-bold text-white">Confirmation Statement (CS01)</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Every UK company must confirm that the details held on the Companies House register are correct at least once every 12 months. We verify your directors, PSCs, registered office, and SIC codes to ensure timely digital lodgement.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0D0D12] border border-red-950/40 space-y-3">
            <h3 className="text-lg font-bold text-white">Annual Statutory Accounts</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Whether your company is active, trading, or dormant, annual financial statements must be prepared and delivered to Companies House within 9 months after your financial year end.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
