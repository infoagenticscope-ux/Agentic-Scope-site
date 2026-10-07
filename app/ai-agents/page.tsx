"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ModalContext } from "@/components/ClientShell";
import { siteConfig } from "@/data/site";
import {
  Bot,
  Sparkles,
  ArrowRight,
  Zap,
  MessageSquare,
  Users,
  Database,
  CheckCircle2,
  Cpu,
  Workflow,
  ShieldCheck,
} from "lucide-react";

export default function AiAgentsPage() {
  const { openModal } = useContext(ModalContext);

  const agentTypes = [
    {
      title: "Autonomous Sales Agent",
      role: "24/7 Revenue Generation",
      desc: "Engages high-intent prospects, pitches product tiers, handles price objections, and collects payments via Stripe or PayPal links.",
      capabilities: ["Product recommendation", "Live pricing quotes", "Direct checkout generation", "CRM pipeline advancement"],
    },
    {
      title: "Customer Support Agent",
      role: "Instant Resolution",
      desc: "Answers complex technical questions, queries knowledge bases via Vector RAG, checks order statuses, and resolves 80%+ of inquiries without humans.",
      capabilities: ["Multi-language comprehension", "Knowledge base retrieval", "Ticket dispatch & escalation", "Customer sentiment analysis"],
    },
    {
      title: "Lead Qualification Agent",
      role: "B2B Filter & Router",
      desc: "Discovers prospect budget, timeline, authority, and company size before booking appointments directly on your calendar.",
      capabilities: ["BANT qualification scoring", "Google Calendar integration", "Automated email reminders", "Spam & competitor filtering"],
    },
    {
      title: "WhatsApp Operations Agent",
      role: "Mobile Omnichannel Lead Hub",
      desc: "Operates directly on the WhatsApp Cloud API with instant 2-second reply times, voice-note transcription, and document sharing.",
      capabilities: ["WhatsApp Cloud API connected", "PDF document sharing", "Catalog browsing", "Direct agent handoff"],
    },
    {
      title: "Operations & Task Agent",
      role: "Internal Workflow Co-Pilot",
      desc: "Monitors database events, sends team Slack/Telegram alerts, generates invoices upon milestone completion, and coordinates deliverables.",
      capabilities: ["Cross-tool webhook execution", "Automated invoice creation", "Data enrichment", "Document parsing (OCR)"],
    },
    {
      title: "Data & Analytics Agent",
      role: "Autonomous Intelligence",
      desc: "Queries internal databases via natural language, generates executive KPI reports, and flags revenue churn anomalies before they happen.",
      capabilities: ["Natural language SQL queries", "Daily revenue summaries", "Anomaly detection alerts", "Cohort retention graphs"],
    },
  ];

  return (
    <div className="w-full pb-24 space-y-20">
      
      {/* Hero */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-5xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold tracking-wide">
          <Bot className="w-3.5 h-3.5" />
          <span>AUTONOMOUS BUSINESS REASONING 2026</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
          Autonomous AI Agents <br />
          <span className="text-gradient-red">Engineered For Real Business Growth</span>
        </h1>

        <p className="max-w-2xl mx-auto text-base text-gray-300 leading-relaxed">
          Deploy intelligent AI agents capable of reasoning, executing tool APIs, qualifying leads, and closing sales autonomously 24 hours a day across WhatsApp, Web, and Enterprise Dashboards.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => openModal("tech-ai", "Custom AI Agent System")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Deploy AI Agent System
          </button>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-bold text-xs flex items-center justify-center gap-2"
          >
            <span>Live Demo on WhatsApp</span>
          </a>
        </div>
      </section>

      {/* Pipeline Diagram */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0D0D12] border border-red-900/50 space-y-8 shadow-2xl">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
              Execution Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              The Autonomous Agent Decision Loop
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
            <div className="p-5 rounded-2xl bg-[#14141C] border border-red-950/40 text-center space-y-2">
              <span className="text-xs font-mono font-bold text-gray-400">STAGE 01</span>
              <h4 className="text-sm font-bold text-white">Trigger Event</h4>
              <p className="text-[11px] text-gray-400">Prospect writes on WhatsApp, website widget, or submits form.</p>
            </div>

            <div className="hidden md:flex justify-center text-red-500">
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </div>

            <div className="p-5 rounded-2xl bg-red-950/30 border border-red-600/50 text-center space-y-2 shadow-glow-sm">
              <span className="text-xs font-mono font-bold text-red-400">STAGE 02</span>
              <h4 className="text-sm font-bold text-white">Cognitive Decision</h4>
              <p className="text-[11px] text-gray-300">Agent reasons over business rules, checks pricing DB, and decides tool call.</p>
            </div>

            <div className="hidden md:flex justify-center text-red-500">
              <ArrowRight className="w-5 h-5 animate-pulse" />
            </div>

            <div className="p-5 rounded-2xl bg-[#14141C] border border-red-950/40 text-center space-y-2">
              <span className="text-xs font-mono font-bold text-gray-400">STAGE 03</span>
              <h4 className="text-sm font-bold text-white">Autonomous Action</h4>
              <p className="text-[11px] text-gray-400">Schedules call on Google Calendar, sends payment link, and updates CRM.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Roster */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
            Specialized Roles
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Available Enterprise Agent Types
          </h2>
          <p className="text-xs text-gray-400">
            Engineered with strict enterprise guardrails to never hallucinate or make unauthorized commitments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agentTypes.map((agent, i) => (
            <div
              key={i}
              className="p-7 rounded-3xl bg-[#0D0D12] border border-red-950/40 hover:border-red-600/50 transition-all flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-white">{agent.title}</h3>
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30">
                    {agent.role}
                  </span>
                </div>

                <p className="text-xs text-gray-400 leading-relaxed">
                  {agent.desc}
                </p>

                <div className="space-y-1.5 pt-2">
                  <strong className="text-[11px] font-bold text-gray-300 block uppercase tracking-wider">
                    Core Capabilities:
                  </strong>
                  {agent.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-red-950/30">
                <button
                  onClick={() => openModal("tech-ai", agent.title)}
                  className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-red-600/20 text-xs font-bold text-white border border-red-950/40 hover:border-red-600/50 transition"
                >
                  Configure This Agent
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
