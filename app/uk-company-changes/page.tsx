"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { RefreshCw, CheckCircle2 } from "lucide-react";

export default function UKCompanyChangesPage() {
  const { openModal } = useContext(ModalContext);

  const changesList = [
    { title: "Company Name Change (NM01)", code: "NM01", desc: "Update your official registered company name on the Companies House registry with new Certificate of Incorporation." },
    { title: "Registered Office Change (AD01)", code: "AD01", desc: "Update the statutory registered legal address of your UK company within 24 hours." },
    { title: "Director Appointment / Resignation", code: "AP01 / TM01", desc: "Formally appoint a new director or file the termination of appointment of an existing officer." },
    { title: "Shareholder & PSC Updates (PSC01-08)", code: "PSC Forms", desc: "Update Persons with Significant Control (PSC) notifications and share transfer documentation." },
    { title: "SIC Code Revision", code: "SIC Update", desc: "Update your Standard Industrial Classification codes to reflect changes in your business trade category." },
  ];

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <RefreshCw className="w-3.5 h-3.5" />
          <span>STATUTORY REGISTRY UPDATES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          UK Company Changes & Filings
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Need to change your company name, replace a director, transfer shares, or update your registered office? Agentic Scope prepares and files all official Companies House forms smoothly.
        </p>
        <div>
          <button
            onClick={() => openModal("uk-compliance", "Company Changes")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow"
          >
            Request Company Change
          </button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {changesList.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#0D0D12] border border-red-950/40 space-y-2">
              <span className="text-[10px] font-mono font-bold text-red-400 px-2 py-0.5 rounded bg-red-950/40 border border-red-900/40">
                {item.code}
              </span>
              <h3 className="text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
