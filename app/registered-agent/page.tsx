"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { UserCheck, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function RegisteredAgentPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <UserCheck className="w-3.5 h-3.5" />
          <span>STATUTORY STATE LEGAL REPRESENTATION</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          US Registered Agent Service
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Maintain an official physical address and authorized agent in Wyoming, Delaware, Florida, or Texas to receive legal process notices and state compliance letters during normal business hours.
        </p>
        <div>
          <button
            onClick={() => openModal("usa-llc", "Registered Agent Service")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Get Registered Agent Service
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="p-8 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-4">
          <h2 className="text-xl font-bold text-white">Why US Law Mandates a Registered Agent</h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Every state requires LLCs to maintain a continuous in-state registered agent with a physical street address (P.O. Boxes prohibited). The agent is responsible for receiving official service of process (lawsuits), state tax notifications, and Secretary of State annual report reminders.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-4 rounded-xl bg-[#14141C] border border-red-950/30 text-xs text-gray-300">
              <strong className="text-white block mb-1">State Compliant</strong>
              Full physical coverage in Wyoming, Delaware, Florida, and Texas.
            </div>
            <div className="p-4 rounded-xl bg-[#14141C] border border-red-950/30 text-xs text-gray-300">
              <strong className="text-white block mb-1">Immediate Digital Scans</strong>
              All received court or state notices scanned and emailed within hours.
            </div>
            <div className="p-4 rounded-xl bg-[#14141C] border border-red-950/30 text-xs text-gray-300">
              <strong className="text-white block mb-1">Included in Silver & Gold</strong>
              1 full year of Registered Agent is included in our Silver and Gold tiers.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
