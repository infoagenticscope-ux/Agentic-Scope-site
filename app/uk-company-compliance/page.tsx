"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ModalContext } from "@/components/ClientShell";
import { FileCheck, RefreshCw, AlertTriangle, ArrowRight, ShieldCheck } from "lucide-react";

export default function UKCompanyCompliancePage() {
  const { openModal } = useContext(ModalContext);

  const complianceServices = [
    {
      title: "Confirmation Statement (CS01)",
      desc: "Mandatory annual verification of company officers, PSCs, share capital, and principal business activities.",
      href: "/uk-annual-filing",
    },
    {
      title: "Dormant & Micro-Entity Accounts",
      desc: "Annual balance sheet and profit & loss filing submitted to Companies House and HMRC on time.",
      href: "/uk-annual-filing",
    },
    {
      title: "Change Company Name (NM01)",
      desc: "Special resolution drafting and official filing to change your legal business title.",
      href: "/uk-company-changes",
    },
    {
      title: "Change Registered Address (AD01)",
      desc: "Immediate digital notification to Companies House updating the statutory legal domicile.",
      href: "/uk-company-changes",
    },
    {
      title: "Appoint or Resign Directors (AP01/TM01)",
      desc: "Drafting board minutes and filing statutory updates to add or remove company officers.",
      href: "/uk-company-changes",
    },
    {
      title: "HMRC UTR & Corporation Tax Activation",
      desc: "Retrieve and configure your Corporation Tax online gateway with HMRC.",
      href: "/utr-registration",
    },
  ];

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <FileCheck className="w-3.5 h-3.5" />
          <span>STATUTORY UK GOVERNANCE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          UK Company Compliance & Filings
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Keep your UK Limited Company in active good standing. Avoid penalty fines, enforcement notices, and compulsory strike-off with our full-lifecycle corporate secretarial services.
        </p>
        <div>
          <button
            onClick={() => openModal("uk-compliance", "Annual Compliance")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow"
          >
            Request Compliance Support
          </button>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {complianceServices.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#0D0D12] border border-red-950/40 hover:border-red-600/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
              <div className="pt-5 mt-4 border-t border-red-950/30">
                <Link
                  href={item.href}
                  className="text-xs font-semibold text-red-500 hover:text-red-400 flex items-center justify-between"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
