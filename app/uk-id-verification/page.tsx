"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { Fingerprint, CheckCircle2, ShieldAlert, ArrowRight, FileCheck, Smartphone } from "lucide-react";

export default function UKIdVerificationPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Fingerprint className="w-3.5 h-3.5" />
          <span>ECONOMIC CRIME ACT COMPLIANCE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Companies House ID Verification
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Authorized biometric identity verification for all UK company directors, PSCs, and officers. Secure, 100% digital, and completed within minutes.
        </p>
        <div>
          <button
            onClick={() => openModal("uk-ltd", "UK ID Verification")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Start ID Verification Process
          </button>
        </div>
      </section>

      {/* Explanatory Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-[#0D0D12] border border-red-950/40 space-y-3">
            <h3 className="text-base font-bold text-white">Why It Is Mandatory</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Under the UK Economic Crime and Corporate Transparency Act, anyone setting up, running, owning or controlling a UK company must verify their identity. Unverified individuals cannot legally be appointed as directors.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0D0D12] border border-red-950/40 space-y-3">
            <h3 className="text-base font-bold text-white">Required Documents</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Valid international biometric passport or national identity document, along with a quick smartphone facial liveness scan. No physical paperwork or embassy visits required.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0D0D12] border border-red-950/40 space-y-3">
            <h3 className="text-base font-bold text-white">How Agentic Scope Helps</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              ID verification is automatically included in all our UK LTD formation packages. We guide you through the authorized digital channel with zero friction and guaranteed compliance.
            </p>
          </div>
        </div>

        {/* Workflow */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#12121A] border border-red-900/30 space-y-8">
          <h2 className="text-2xl font-bold text-white text-center">
            How The Verification Workflow Operates
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Document Upload",
                desc: "Upload a clean color photo of your international passport photo page.",
              },
              {
                step: "02",
                title: "Biometric Liveness",
                desc: "Complete a 30-second automated selfie scan from any mobile device.",
              },
              {
                step: "03",
                title: "Data Verification",
                desc: "Our automated system checks cryptographic chips and security watermarks.",
              },
              {
                step: "04",
                title: "Companies House Match",
                desc: "Your verified personal code is attached directly to your company filing.",
              },
            ].map((s, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#08080A] border border-red-950/40">
                <span className="text-lg font-bold font-mono text-red-500 block mb-2">{s.step}</span>
                <h4 className="text-sm font-bold text-white mb-1">{s.title}</h4>
                <p className="text-xs text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
