"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModalContext } from "@/components/ClientShell";
import { siteConfig } from "@/data/site";
import { allServices } from "@/data/services";
import { ukLtdPackages, usaLlcPackages } from "@/data/packages";
import { blogPosts } from "@/data/blog";
import ServiceCard from "@/components/ServiceCard";
import PackageCard from "@/components/PackageCard";
import FAQAccordion from "@/components/FAQAccordion";
import HeroNetworkAnimation from "@/components/HeroNetworkAnimation";
import InnerPromoBanner from "@/components/InnerPromoBanner";
import SpotlightGlassCard from "@/components/SpotlightGlassCard";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Building2,
  Flag,
  Landmark,
  Bot,
  Cpu,
  Globe2,
  CheckCircle2,
  Zap,
  ArrowUpRight,
  TrendingUp,
  Layers,
  ChevronRight,
} from "lucide-react";

export default function HomePage() {
  const { openModal } = useContext(ModalContext);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = [
    { id: "ALL", label: "All Ecosystem" },
    { id: "FORMATION", label: "Company Formation" },
    { id: "COMPLIANCE", label: "Legal & Compliance" },
    { id: "BANKING", label: "Banking & Payments" },
    { id: "TECHNOLOGY", label: "AI & Software" },
  ];

  const filteredServices =
    activeCategory === "ALL"
      ? allServices
      : allServices.filter((s) => s.category === activeCategory);

  return (
    <div className="w-full space-y-24 sm:space-y-32 pb-24 overflow-hidden">
      
      {/* ========================================================
          HERO SECTION
          ======================================================== */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-8 sm:pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30">
        
        {/* Background Network Animation & Glow */}
        <HeroNetworkAnimation />
        <div className="absolute inset-0 bg-radial-hero pointer-events-none" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[130px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold tracking-wide shadow-glow-sm">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>GLOBAL BUSINESS FORMATION & AI AUTOMATION 2026</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
            Build Your Business. <br />
            <span className="text-gradient-red">Automate Everything.</span> <br />
            Scale Globally.
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            {siteConfig.heroSubheading}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <button
              onClick={() => openModal("uk-ltd")}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-glow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>Start Your Business</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <Link
              href="/services"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-[#12121A] hover:bg-[#1A1A24] text-gray-200 hover:text-white border border-red-900/40 hover:border-red-600/50 font-bold text-sm tracking-wide transition-all flex items-center justify-center gap-2"
            >
              <span>Explore Solutions</span>
              <Layers className="w-4 h-4 text-red-500" />
            </Link>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl bg-[#25D366]/15 hover:bg-[#25D366]/25 text-[#25D366] border border-[#25D366]/40 font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366]" />
              <span>Talk on WhatsApp</span>
            </a>
          </div>

          {/* Trust Highlights */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto border-t border-red-950/40 text-left">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">100% Remote</p>
                <p className="text-[10px] text-gray-400">Zero Travel Needed</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Building2 className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">Companies House</p>
                <p className="text-[10px] text-gray-400">Direct UK Registry</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Flag className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">US LLC & EIN</p>
                <p className="text-[10px] text-gray-400">Official IRS Filing</p>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Bot className="w-5 h-5 text-red-500 flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-white">AI Automation</p>
                <p className="text-[10px] text-gray-400">Autonomous Scaling</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          FUTURISTIC GLASS METRICS TICKER BAR (Inner Banner)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 sm:-mt-16 relative z-20">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0D0D14]/85 backdrop-blur-2xl border border-red-500/40 shadow-glow flex flex-wrap items-center justify-around gap-4 text-center shine-sweep">
          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-black text-white">99.8%</span>
            <span className="text-[11px] text-gray-400 text-left font-medium leading-tight">
              On-Time Statutory <br />
              <strong className="text-red-400">Incorporation</strong>
            </span>
          </div>

          <div className="hidden sm:block w-px h-8 bg-red-900/40" />

          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-black text-white">135+</span>
            <span className="text-[11px] text-gray-400 text-left font-medium leading-tight">
              Currencies Supported <br />
              <strong className="text-red-400">Via Stripe & Wise</strong>
            </span>
          </div>

          <div className="hidden md:block w-px h-8 bg-red-900/40" />

          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-black text-white">24/7</span>
            <span className="text-[11px] text-gray-400 text-left font-medium leading-tight">
              Autonomous AI <br />
              <strong className="text-red-400">Operations Agents</strong>
            </span>
          </div>

          <div className="hidden lg:block w-px h-8 bg-red-900/40" />

          <div className="flex items-center gap-3">
            <span className="text-2xl sm:text-3xl font-black text-white">100%</span>
            <span className="text-[11px] text-gray-400 text-left font-medium leading-tight">
              Remote Processing <br />
              <strong className="text-red-400">Zero Travel Needed</strong>
            </span>
          </div>
        </div>
      </section>


      {/* ========================================================
          GLOBAL BUSINESS SECTION (Launch from anywhere)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#120B0F] via-[#0E0E14] to-[#140C10] border border-red-950/60 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-red-400 uppercase tracking-widest">
                <Globe2 className="w-4 h-4 text-red-500" />
                <span>Borderless Entrepreneurship</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Launch Your Business From Anywhere.
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Whether you are operating from Pakistan, India, the UAE, Bangladesh, Morocco, the United Kingdom, or the United States, Agentic Scope provides the complete statutory and digital infrastructure to own a legal UK Limited Company or US LLC, secure international banking rails, and accept global payments smoothly.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-3">
                {[
                  "Non-Resident Friendly",
                  "ID Verification Included",
                  "No US/UK SSN Required",
                  "Direct Stripe & PayPal Access",
                  "Multi-Currency Bank Rails",
                  "Full Annual Compliance",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="p-5 rounded-2xl bg-[#08080A]/80 border border-red-900/30">
                <span className="text-xs font-bold text-white block mb-1">
                  Supported Global Markets
                </span>
                <p className="text-xs text-gray-400">
                  Engineered specifically for non-resident founders across:
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Pakistan", "India", "UAE", "Bangladesh", "Morocco", "Nigeria", "United States", "United Kingdom", "Worldwide"].map((c) => (
                    <span key={c} className="text-xs px-2.5 py-1 rounded-lg bg-red-950/40 border border-red-900/40 text-gray-200 font-medium">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-red-600/10 border border-red-500/30 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-white">Need personal consultation?</p>
                  <p className="text-[11px] text-gray-400">Speak directly with our team on WhatsApp</p>
                </div>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-red-600 text-white text-xs font-bold hover:bg-red-500 transition shadow-glow-sm flex items-center gap-1.5"
                >
                  <span>Chat Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================
          INNER PROMO BANNER 01 (Fast-Track Corporate Setup)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InnerPromoBanner
          headline="Fast-Track UK LTD & US LLC Incorporation"
          subheadline="Submit your company name and passport scan in 5 minutes. Official Companies House & IRS filing conducted with full statutory compliance, biometric verification, and dedicated bank account guidance."
          badge="2026 INSTANT ONBOARDING DESK"
          serviceTarget="uk-ltd"
        />
      </section>


      {/* ========================================================
          SERVICES GRID
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Unified Platform Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Everything Required To Operate Globally
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            From your primary corporate entity and tax registration to automated AI agents and enterprise web applications.
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 flex-wrap pt-4">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                  activeCategory === c.id
                    ? "bg-red-600 text-white shadow-glow-sm"
                    : "bg-[#14141C] text-gray-400 hover:text-white border border-red-950/40"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

      </section>


      {/* ========================================================
          AI & BUSINESS AUTOMATION SHOWCASE
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-b from-[#130E14] via-[#0D0D12] to-[#0A0A0E] border border-red-900/50 p-8 sm:p-14 shadow-2xl space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest flex items-center gap-1.5">
              <Bot className="w-4 h-4" /> Agentic Scope Technology Lab
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Build Smarter. Automate More. Grow Faster.
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              We deploy custom AI Agents, WhatsApp automated customer operations, and centralized CRM/ERP architectures that work continuously to capture leads, answer questions, and execute transactions.
            </p>
          </div>

          {/* Animated Workflow Visualization: Trigger -> Agent -> Decision -> Action -> Result */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#08080A]/90 border border-red-950/60 shadow-inner">
            <p className="text-xs font-bold text-red-400 uppercase tracking-wider mb-6 text-center">
              Autonomous Agent Execution Pipeline
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
              
              {/* Step 1 */}
              <div className="p-4 rounded-xl bg-[#14141C] border border-red-950/40 text-center space-y-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Input</span>
                <h4 className="text-sm font-bold text-white">01. Customer Trigger</h4>
                <p className="text-[11px] text-gray-400">Incoming message on WhatsApp, Web Chat or API event.</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-red-500">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>

              {/* Step 2 */}
              <div className="p-4 rounded-xl bg-red-950/30 border border-red-700/50 text-center space-y-2 shadow-glow-sm">
                <span className="text-[10px] font-bold text-red-400 uppercase">Reasoning</span>
                <h4 className="text-sm font-bold text-white">02. AI Agent Core</h4>
                <p className="text-[11px] text-gray-300">Understands user intent, validates business rules & retrieves inventory.</p>
              </div>

              {/* Arrow */}
              <div className="hidden md:flex justify-center text-red-500">
                <ArrowRight className="w-5 h-5 animate-pulse" />
              </div>

              {/* Step 3 */}
              <div className="p-4 rounded-xl bg-[#14141C] border border-red-950/40 text-center space-y-2">
                <span className="text-[10px] font-bold text-gray-400 uppercase">Output</span>
                <h4 className="text-sm font-bold text-white">03. Automated Action</h4>
                <p className="text-[11px] text-gray-400">Updates CRM, sends Stripe payment link, or books appointment.</p>
              </div>

            </div>
          </div>

          {/* AI Services quick buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <Link
              href="/ai-agents"
              className="p-5 rounded-2xl bg-[#0F0F16] border border-red-950/40 hover:border-red-600/50 transition-all group"
            >
              <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors flex items-center justify-between">
                <span>Autonomous AI Agents</span>
                <ChevronRight className="w-4 h-4 text-red-500" />
              </h3>
              <p className="text-xs text-gray-400 mt-1">24/7 autonomous sales and customer support agents.</p>
            </Link>

            <Link
              href="/business-automation"
              className="p-5 rounded-2xl bg-[#0F0F16] border border-red-950/40 hover:border-red-600/50 transition-all group"
            >
              <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors flex items-center justify-between">
                <span>WhatsApp AI Automation</span>
                <ChevronRight className="w-4 h-4 text-red-500" />
              </h3>
              <p className="text-xs text-gray-400 mt-1">Direct integration with WhatsApp Cloud API for rapid conversion.</p>
            </Link>

            <Link
              href="/crm-erp"
              className="p-5 rounded-2xl bg-[#0F0F16] border border-red-950/40 hover:border-red-600/50 transition-all group"
            >
              <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors flex items-center justify-between">
                <span>Business CRM & ERP</span>
                <ChevronRight className="w-4 h-4 text-red-500" />
              </h3>
              <p className="text-xs text-gray-400 mt-1">Tailored operating platforms to manage deals, tasks and billing.</p>
            </Link>
          </div>

        </div>
      </section>

      {/* ========================================================
          INNER PROMO BANNER 02 (AI Automation & Tech Suite)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <InnerPromoBanner
          headline="Transform Repetitive Operations Into Autonomous Revenue Engines"
          subheadline="Deploy custom AI sales representatives, WhatsApp Cloud API auto-responders, and central CRM systems that qualify prospects and close deals 24/7 without human delay."
          badge="AGENTIC AUTOMATION SUITE"
          serviceTarget="tech-ai"
        />
      </section>


      {/* ========================================================
          PACKAGES SHOWCASE (UK LTD & US LLC)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5" />
            <span>Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Popular Company Formation Packages
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Fully-managed incorporation with all statutory registry fees, digital certificates, and client portal support included.
          </p>
        </div>

        {/* UK LTD Packages */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-red-950/40 pb-3">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
              UK Limited Company Formation Packages
            </h3>
            <Link href="/uk-company-formation/packages" className="text-xs font-semibold text-red-500 hover:text-red-400 flex items-center gap-1">
              <span>View details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ukLtdPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelect={() => openModal("uk-ltd", `${pkg.name} (${pkg.price})`)}
              />
            ))}
          </div>
        </div>

        {/* USA LLC Packages */}
        <div className="space-y-6 pt-8">
          <div className="flex items-center justify-between border-b border-red-950/40 pb-3">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
              USA LLC Formation Packages (Wyoming / Delaware / Florida / Texas)
            </h3>
            <Link href="/usa-llc-formation/packages" className="text-xs font-semibold text-red-500 hover:text-red-400 flex items-center gap-1">
              <span>View details</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {usaLlcPackages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                onSelect={() => openModal("usa-llc", `${pkg.name} (${pkg.price})`)}
              />
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================
          HOW IT WORKS (Unified Process)
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 uppercase tracking-wider">
            <Zap className="w-3.5 h-3.5" />
            <span>Process Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            How Agentic Scope Works
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            A frictionless, high-speed 5-stage workflow designed for international speed and precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: "01",
              title: "Choose Your Service",
              desc: "Select UK LTD, USA LLC, Banking Setup, or AI Automation according to your growth roadmap.",
            },
            {
              step: "02",
              title: "Submit Information",
              desc: "Provide company name options, passport scan, and required director details through our secure portal.",
            },
            {
              step: "03",
              title: "Verification & Filing",
              desc: "Our team handles official ID verification, registry submissions, and IRS Form SS-4 filing.",
            },
            {
              step: "04",
              title: "Receive Setup",
              desc: "Download official certificate of incorporation, EIN notice, shares certificates, and access details.",
            },
            {
              step: "05",
              title: "Ongoing Scale",
              desc: "Annual compliance maintenance, tax filing, and continuous autonomous software upgrades.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-[#0D0D12] border border-red-950/40 relative hover:border-red-600/50 transition-all duration-300"
            >
              <span className="text-2xl font-black text-red-600/60 block mb-2 font-mono">
                {item.step}
              </span>
              <h3 className="text-sm font-bold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* ========================================================
          WHY AGENTIC SCOPE
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0C0C12] border border-red-950/50 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
              Core Advantages
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Why Global Entrepreneurs Rely on Agentic Scope
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "One Unified Ecosystem",
                desc: "No need to juggle separate formation agents, accountants, and freelance developers. We handle legal setup + digital engineering.",
              },
              {
                title: "Formation + Technology",
                desc: "We don't just register your company; we connect your Stripe account, build your web platform, and deploy AI assistants.",
              },
              {
                title: "Modern Digital Infrastructure",
                desc: "High-security digital document delivery, automatic scan-and-email mailrooms, and real-time status notifications.",
              },
              {
                title: "AI-Powered Automation",
                desc: "State-of-the-art autonomous agents engineered to streamline sales and customer interactions around the clock.",
              },
              {
                title: "Transparent Pricing",
                desc: "No hidden surprise invoices. All statutory fees, addresses, and services are clearly stated upfront.",
              },
              {
                title: "Human Dedicated Support",
                desc: "Direct access to our specialists via WhatsApp (+92 321 8420985) and email for rapid assistance.",
              },
            ].map((adv, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#14141C] border border-red-950/30 space-y-2">
                <div className="w-7 h-7 rounded-lg bg-red-600/20 text-red-500 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <h3 className="text-sm font-bold text-white">{adv.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ========================================================
          INSIGHTS & RESEARCH
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-red-500 uppercase tracking-wider mb-2">
              <TrendingUp className="w-3.5 h-3.5" />
              <span>Knowledge Base & Research</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              Latest Business Insights
            </h2>
          </div>
          <Link
            href="/insights"
            className="text-xs font-semibold text-red-500 hover:text-red-400 flex items-center gap-1"
          >
            <span>View all articles</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group p-6 rounded-3xl bg-[#0D0D12] border border-red-950/40 hover:border-red-600/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-red-950/40 text-red-400 border border-red-900/40 font-medium text-[11px]">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-5 border-t border-red-950/30 mt-6 flex items-center justify-between text-xs font-semibold text-red-500">
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>


      {/* ========================================================
          FREQUENTLY ASKED QUESTIONS
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
            Common Inquiries
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-gray-400">
            Clear, transparent answers about non-resident company formation, tax compliance, and tech integration.
          </p>
        </div>

        <FAQAccordion />
      </section>


      {/* ========================================================
          FINAL HIGH-CONVERSION CTA
          ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-red-950 via-[#160B0E] to-[#0A0A0E] border-2 border-red-700/60 p-8 sm:p-16 text-center space-y-6 shadow-glow-lg overflow-hidden">
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              Ready to Launch & <br />
              <span className="text-red-500">Automate Your Business?</span>
            </h2>
            <p className="text-sm text-gray-300 leading-relaxed">
              Join forward-thinking international entrepreneurs who have streamlined their global setup and operations with Agentic Scope.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                onClick={() => openModal("uk-ltd")}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-glow hover:scale-105 transition-all flex items-center justify-center gap-2"
              >
                <span>Get Started Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Chat: {siteConfig.phoneFormatted}</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
