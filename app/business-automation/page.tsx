"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { Cpu, MessageCircle, Zap, CheckCircle2, ArrowRight } from "lucide-react";

export default function BusinessAutomationPage() {
  const { openModal } = useContext(ModalContext);

  const workflows = [
    { title: "Instant Lead Auto-Response", desc: "Replies to prospects on WhatsApp and website forms within 2 seconds with personalized qualification questions." },
    { title: "Automated Calendar Scheduling", desc: "Cross-checks Google Calendar / Outlook in real-time and books high-ticket consultations without back-and-forth emails." },
    { title: "Payment Trigger & Delivery", desc: "Sends custom Stripe/PayPal payment links upon verbal agreement and dispatches digital onboarding assets upon receipt." },
    { title: "CRM Sync & Status Tracking", desc: "Automatically updates lead statuses, logs conversation transcripts, and alerts team Slack channels." },
    { title: "Smart Drip Follow-Ups", desc: "Executes non-invasive follow-up sequences across WhatsApp and Email until a prospect confirms or declines." },
    { title: "Automated Invoicing & Accounting", desc: "Generates PDF corporate invoices and synchronizes reconciliation into Xero, QuickBooks, or custom systems." },
  ];

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Cpu className="w-3.5 h-3.5" />
          <span>ZERO-FRICTION ENTERPRISE PIPELINES</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Business & WhatsApp AI Automation
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Eliminate repetitive administrative friction. Connect your customer acquisition channels to automated WhatsApp workflows, CRM pipelines, and invoicing systems.
        </p>
        <div>
          <button
            onClick={() => openModal("tech-ai", "Business Automation Pipeline")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Design Custom Automation
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
            Production Blueprints
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Example Automated Business Workflows
          </h2>
          <p className="text-xs text-gray-400">
            (Example architectural workflows tailored to your specific software stack)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workflows.map((wf, idx) => (
            <div key={idx} className="p-6 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20 text-red-500 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">{wf.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{wf.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
