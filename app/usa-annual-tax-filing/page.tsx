"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { Calculator, AlertCircle, CheckCircle2, Clock } from "lucide-react";

export default function UsaAnnualTaxFilingPage() {
  const { openModal } = useContext(ModalContext);

  const workflowSteps = [
    { step: "01", title: "Information Gathering", desc: "Submit LLC operating agreement, EIN confirmation, and financial summary." },
    { step: "02", title: "Form Preparation", desc: "Our tax specialists prepare IRS Form 5472 and pro-forma Form 1120." },
    { step: "03", title: "Client Review", desc: "You review and electronically sign the complete informational tax returns." },
    { step: "04", title: "IRS Submission", desc: "Filing dispatched to the IRS with tracking and official confirmation proof." },
  ];

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Calculator className="w-3.5 h-3.5" />
          <span>IRS FORM 5472 & 1120 PRO-FORMA</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          USA Annual Tax Filing ($99)
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Compliant federal and state tax filings for foreign-owned single-member US LLCs. Avoid the IRS $25,000 late filing penalty. Turnaround: 5–10 business days.
        </p>
        <div>
          <button
            onClick={() => openModal("usa-llc", "USA Annual Tax Filing ($99)")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            File USA Taxes Now ($99)
          </button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-7 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-4">
            <h3 className="text-lg font-bold text-white">Mandatory Foreign-Owned LLC Rules</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Under federal tax regulations (26 CFR § 1.6038A-2), any foreign-owned single-member LLC (disregarded entity) is required to file Form 5472 and a pro-forma Form 1120 to report all reportable transactions between the LLC and its foreign owner.
            </p>
            <div className="p-3 rounded-xl bg-red-950/30 border border-red-900/40 text-xs text-red-400 font-semibold">
              Warning: The IRS imposes an automatic statutory penalty of $25,000 for failure to file or filing past the statutory deadline.
            </div>
          </div>

          <div className="p-7 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-3">
            <h3 className="text-lg font-bold text-white">Required Documents</h3>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-center gap-2">✓ LLC formation details & EIN confirmation notice</li>
              <li className="flex items-center gap-2">✓ Owner/member identity & residential address</li>
              <li className="flex items-center gap-2">✓ Summary of capital contributions & distributions</li>
              <li className="flex items-center gap-2">✓ Bank statement summaries for the calendar year</li>
              <li className="flex items-center gap-2">✓ Prior year filings (if previously filed)</li>
            </ul>
          </div>
        </div>

        {/* Workflow */}
        <div className="p-8 rounded-3xl bg-[#12121A] border border-red-900/30 space-y-6">
          <h3 className="text-xl font-bold text-white text-center">Filing Workflow</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {workflowSteps.map((step, i) => (
              <div key={i} className="p-4 rounded-2xl bg-[#08080A] border border-red-950/40">
                <span className="text-xs font-mono font-bold text-red-500 block mb-1">{step.step}</span>
                <h4 className="text-sm font-bold text-white mb-1">{step.title}</h4>
                <p className="text-[11px] text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/40 flex items-start gap-3 text-xs text-gray-400">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Disclaimer: </strong>
            Information is provided for general business guidance and does not constitute formal legal, tax or CPA advice. Final tax filing obligations and liabilities depend on the client's actual commercial activities and US tax treaties.
          </p>
        </div>
      </section>
    </div>
  );
}
