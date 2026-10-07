"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { Database, Users, TrendingUp, CheckCircle2, Shield, ArrowRight } from "lucide-react";

export default function CrmErpPage() {
  const { openModal } = useContext(ModalContext);

  const modules = [
    { title: "Lead & Pipeline Management", desc: "Track prospect stages from first contact through qualification, proposal, and closed revenue." },
    { title: "Client Profiles & Relationships", desc: "Centralized dossier with historical orders, communications, uploaded contracts, and billing notes." },
    { title: "Sales & Invoicing Automation", desc: "Generate professional branded invoices, track payment status, and automate overdue reminders." },
    { title: "Team & Task Coordination", desc: "Role-based access control, task assignment, sprint boards, and internal team audit logging." },
    { title: "Omnichannel Communication", desc: "Consolidated inbox for WhatsApp, email, and live website chats linked directly to client records." },
    { title: "Executive Business Analytics", desc: "Real-time graphs for Monthly Recurring Revenue (MRR), churn, customer lifetime value, and cash flow." },
  ];

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Database className="w-3.5 h-3.5" />
          <span>ALL-IN-ONE BUSINESS OPERATING PLATFORMS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Business CRM & ERP Systems
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Tailored, high-security business operating dashboards unifying sales pipelines, client relationships, task delegation, and financial analytics into one intuitive command center.
        </p>
        <div>
          <button
            onClick={() => openModal("tech-ai", "Custom CRM / ERP Platform")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Request Custom Architecture
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
            Modular Capabilities
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Core Operational Modules
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20 text-red-500 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">{m.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
