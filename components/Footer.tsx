import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { MessageCircle, Mail, Shield, CheckCircle2, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#050507] border-t border-red-950/50 text-gray-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 pb-12 border-b border-red-950/40">
          
          {/* Brand Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-red-600/50 shadow-glow-sm">
                <Image 
                  src="/logo.png" 
                  alt="Agentic Scope Logo" 
                  fill 
                  className="object-cover" 
                />
              </div>
              <div>
                <span className="font-extrabold text-xl tracking-wider text-white">
                  AGENTIC <span className="text-red-600">SCOPE</span>
                </span>
                <p className="text-xs text-gray-400 font-medium">
                  {siteConfig.tagline}
                </p>
              </div>
            </Link>

            <p className="text-sm text-gray-400 leading-relaxed pr-4">
              Empowering global entrepreneurs with seamless UK company incorporation, US LLC formation, international banking architecture, and next-generation autonomous AI technology systems.
            </p>

            {/* Direct Contact Links */}
            <div className="flex flex-col gap-2.5 pt-2">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-xs text-gray-300 hover:text-white group transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center text-[#25D366]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span>WhatsApp: <strong className="text-white group-hover:text-red-400">{siteConfig.phoneFormatted}</strong></span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2.5 text-xs text-gray-300 hover:text-white group transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-red-600/20 border border-red-600/40 flex items-center justify-center text-red-500">
                  <Mail className="w-4 h-4" />
                </div>
                <span>Email: <strong className="text-white group-hover:text-red-400">{siteConfig.email}</strong></span>
              </a>
            </div>
          </div>

          {/* Column 1: Company Formation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-red-500">
              Company Formation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/uk-company-formation" className="hover:text-white transition-colors">
                  UK LTD Formation
                </Link>
              </li>
              <li>
                <Link href="/uk-company-formation/packages" className="hover:text-white transition-colors">
                  UK LTD Packages
                </Link>
              </li>
              <li>
                <Link href="/usa-llc-formation" className="hover:text-white transition-colors">
                  USA LLC Formation
                </Link>
              </li>
              <li>
                <Link href="/usa-llc-formation/packages" className="hover:text-white transition-colors">
                  USA LLC Packages
                </Link>
              </li>
              <li>
                <Link href="/wyoming-vs-delaware" className="hover:text-white transition-colors">
                  Wyoming vs Delaware
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Compliance & Legal Services */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-red-500">
              Compliance & Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/uk-id-verification" className="hover:text-white transition-colors">
                  UK ID Verification
                </Link>
              </li>
              <li>
                <Link href="/uk-registered-office" className="hover:text-white transition-colors">
                  Registered Office Address
                </Link>
              </li>
              <li>
                <Link href="/uk-business-address" className="hover:text-white transition-colors">
                  Business Service Address
                </Link>
              </li>
              <li>
                <Link href="/uk-director-service-address" className="hover:text-white transition-colors">
                  Director Service Address
                </Link>
              </li>
              <li>
                <Link href="/ein-number" className="hover:text-white transition-colors">
                  EIN Registration
                </Link>
              </li>
              <li>
                <Link href="/itin" className="hover:text-white transition-colors">
                  ITIN Assistance
                </Link>
              </li>
              <li>
                <Link href="/boi-report" className="hover:text-white transition-colors">
                  BOI Reporting (FinCEN)
                </Link>
              </li>
              <li>
                <Link href="/usa-annual-tax-filing" className="hover:text-white transition-colors">
                  USA Annual Tax Filing
                </Link>
              </li>
              <li>
                <Link href="/uk-company-compliance" className="hover:text-white transition-colors">
                  UK Company Compliance
                </Link>
              </li>
              <li>
                <Link href="/uk-company-changes" className="hover:text-white transition-colors">
                  UK Company Changes
                </Link>
              </li>
              <li>
                <Link href="/utr-registration" className="hover:text-white transition-colors">
                  UTR Registration
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Banking & Technology */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-red-500">
              Banking & Tech
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/business-banking" className="hover:text-white transition-colors">
                  Business Banking
                </Link>
              </li>
              <li>
                <Link href="/payment-gateways" className="hover:text-white transition-colors">
                  Payment Gateway Setup
                </Link>
              </li>
              <li>
                <Link href="/stripe" className="hover:text-white transition-colors">
                  Stripe Setup
                </Link>
              </li>
              <li>
                <Link href="/paypal" className="hover:text-white transition-colors">
                  PayPal Business
                </Link>
              </li>
              <li>
                <Link href="/ai-agents" className="hover:text-white transition-colors">
                  Autonomous AI Agents
                </Link>
              </li>
              <li>
                <Link href="/business-automation" className="hover:text-white transition-colors">
                  Business Automation
                </Link>
              </li>
              <li>
                <Link href="/crm-erp" className="hover:text-white transition-colors">
                  Business CRM & ERP
                </Link>
              </li>
              <li>
                <Link href="/software-development" className="hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link href="/web-development" className="hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/interactive-web" className="hover:text-white transition-colors">
                  3D & Interactive Web
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Platform & Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider text-red-500">
              Company & Insights
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing Catalog
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Agentic Scope
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  Knowledge Base & FAQs
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-white transition-colors">
                  Insights & Research
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>

            <div className="pt-4">
              <div className="p-3 rounded-xl bg-red-950/20 border border-red-900/30 text-[11px] text-gray-400 space-y-1">
                <span className="text-red-400 font-semibold flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" /> High-Trust 2026
                </span>
                <p>Enterprise formation, zero-hassle filing, global execution.</p>
              </div>
            </div>
          </div>

        </div>

        {/* Disclaimer Notice */}
        <div className="py-6 text-[11px] text-gray-500 leading-relaxed border-b border-red-950/40">
          <p>
            <strong className="text-gray-400">Legal Disclaimer: </strong>
            {siteConfig.disclaimer}
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{siteConfig.copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-white transition-colors">
              Support
            </Link>
            <Link href="/pricing" className="hover:text-white transition-colors">
              Transparent Pricing
            </Link>
            <a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-red-400 text-gray-400 flex items-center gap-1">
              <span>Direct WhatsApp: {siteConfig.phoneFormatted}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
