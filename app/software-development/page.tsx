"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { Code, Server, Shield, Layers, CheckCircle2, ArrowRight } from "lucide-react";

export default function SoftwareDevelopmentPage() {
  const { openModal } = useContext(ModalContext);

  const capabilities = [
    { title: "Custom SaaS Product Engineering", desc: "Full-cycle multi-tenant web application architecture with Next.js, Node.js, Python, PostgreSQL, and Redis." },
    { title: "High-Performance API Architecture", desc: "Robust, documented REST & GraphQL backend services engineered for zero downtime and microsecond latency." },
    { title: "Client Portals & Internal Dashboards", desc: "Private, authenticated administrative portals with role-based permissions and granular access security." },
    { title: "Database Architecture & Optimization", desc: "Scalable relational schema design, query indexing, replication, and real-time state synchronization." },
    { title: "Payment & Fintech Rails Integration", desc: "Custom checkout systems, subscription recurrence billing, and webhooks for Stripe, PayPal, and Wise." },
    { title: "Autonomous Agent Tooling", desc: "Model-context protocol (MCP) servers, LLM tool definitions, vector retrieval (RAG), and agentic workflows." },
  ];

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Code className="w-3.5 h-3.5" />
          <span>FULL-STACK ENTERPRISE ENGINEERING</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Custom Software Development
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          We engineer scalable digital products, secure cloud applications, and automated software infrastructure that gives modern businesses a lasting competitive edge.
        </p>
        <div>
          <button
            onClick={() => openModal("tech-ai", "Custom Software Development")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Request Software Consultation
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
            Engineering Capabilities
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            What We Build
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((c, i) => (
            <div key={i} className="p-6 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-600/20 text-red-500 flex items-center justify-center">
                <Code className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white">{c.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
