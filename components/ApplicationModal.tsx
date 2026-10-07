"use client";

import React, { useState, useEffect } from "react";
import { X, Send, MessageCircle, CheckCircle, Sparkles } from "lucide-react";
import { siteConfig } from "@/data/site";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultPackage?: string;
}

export default function ApplicationModal({
  isOpen,
  onClose,
  defaultService = "uk-ltd",
  defaultPackage = "",
}: ApplicationModalProps) {
  const [serviceType, setServiceType] = useState(defaultService);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "",
    businessType: "E-Commerce",
    notes: "",
    // UK specifics
    ukCompanyName: "",
    ukPackage: defaultPackage || "Silver (£170)",
    directorNationality: "",
    // USA specifics
    usaLlcName: "",
    usaState: "Wyoming",
    usaPackage: defaultPackage || "Silver ($299)",
    needEin: "Yes",
    // Tech specifics
    techRequirement: "Autonomous AI Agent",
    budgetRange: "$500 - $2,500",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (defaultService) {
      setServiceType(defaultService);
    }
    if (defaultPackage) {
      if (defaultService.includes("usa")) {
        setFormData((prev) => ({ ...prev, usaPackage: defaultPackage }));
      } else if (defaultService.includes("uk")) {
        setFormData((prev) => ({ ...prev, ukPackage: defaultPackage }));
      }
    }
  }, [defaultService, defaultPackage]);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct prefilled WhatsApp message
    let message = `*New Service Application - Agentic Scope*\n`;
    message += `*Name:* ${formData.fullName}\n`;
    message += `*Email:* ${formData.email}\n`;
    message += `*WhatsApp:* ${formData.whatsapp}\n`;
    message += `*Country:* ${formData.country}\n`;
    message += `*Service:* ${serviceType}\n`;

    if (serviceType.includes("uk")) {
      message += `*Proposed UK Name:* ${formData.ukCompanyName}\n`;
      message += `*Selected Package:* ${formData.ukPackage}\n`;
      message += `*Nationality:* ${formData.directorNationality}\n`;
    } else if (serviceType.includes("usa")) {
      message += `*Proposed LLC Name:* ${formData.usaLlcName}\n`;
      message += `*State:* ${formData.usaState}\n`;
      message += `*Package:* ${formData.usaPackage}\n`;
      message += `*EIN Needed:* ${formData.needEin}\n`;
    } else if (serviceType.includes("tech") || serviceType.includes("ai")) {
      message += `*Requirement:* ${formData.techRequirement}\n`;
      message += `*Budget Range:* ${formData.budgetRange}\n`;
    }

    if (formData.notes) {
      message += `*Notes:* ${formData.notes}\n`;
    }

    const encoded = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/923218420985?text=${encoded}`;
    
    setSubmitted(true);
    setTimeout(() => {
      window.open(whatsappLink, "_blank");
    }, 800);
  };

  const handleDirectSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0D0D12] border border-red-900/40 p-6 sm:p-8 shadow-2xl shadow-red-950/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-red-600/20 border border-red-500 flex items-center justify-center text-red-500 shadow-glow">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Application Received</h3>
            <p className="text-sm text-gray-300 max-w-md mx-auto">
              Thank you, <strong className="text-white">{formData.fullName || "valued founder"}</strong>. Our business formation and technology team has received your application. We are preparing your setup roadmap now.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm hover:opacity-90 shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat Instantly on WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-3 rounded-xl border border-gray-700 hover:border-gray-500 text-gray-300 text-sm font-medium"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/10 border border-red-500/20 text-red-400 text-xs font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Agentic Scope Onboarding</span>
              </div>
              <h2 className="text-2xl font-extrabold text-white">
                Launch Your Global Business
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-1">
                Complete your details below. We review all applications and initiate official processing within 24 hours.
              </p>
            </div>

            {/* Service Selection Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6 p-1.5 bg-[#14141C] rounded-2xl border border-red-950/40">
              {[
                { id: "uk-ltd", label: "UK LTD" },
                { id: "usa-llc", label: "USA LLC" },
                { id: "banking", label: "Banking" },
                { id: "tech-ai", label: "AI & Tech" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setServiceType(tab.id)}
                  className={`py-2 px-3 text-xs font-bold rounded-xl transition-all ${
                    serviceType === tab.id
                      ? "bg-red-600 text-white shadow-glow-sm"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
              
              {/* General Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Alexander Vance"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141C] border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="alex@enterprise.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141C] border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    placeholder="+92 300 1234567"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141C] border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                    Country of Residence *
                  </label>
                  <input
                    type="text"
                    required
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="e.g. Pakistan, UAE, UK, etc."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141C] border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition"
                  />
                </div>
              </div>

              {/* Conditional: UK LTD Fields */}
              {serviceType === "uk-ltd" && (
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-900/30 space-y-3 animate-in fade-in">
                  <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    UK Company Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">
                        Proposed Company Name
                      </label>
                      <input
                        type="text"
                        name="ukCompanyName"
                        value={formData.ukCompanyName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Global Solutions Ltd"
                        className="w-full px-3 py-2 rounded-lg bg-[#14141C] border border-gray-800 text-white text-xs focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">
                        Package Choice
                      </label>
                      <select
                        name="ukPackage"
                        value={formData.ukPackage}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg bg-[#14141C] border border-gray-800 text-white text-xs focus:outline-none focus:border-red-600"
                      >
                        <option value="Starter (£140)">Starter — £140</option>
                        <option value="Silver (£170)">Silver (Most Popular) — £170</option>
                        <option value="Gold (£180)">Gold (Director Privacy) — £180</option>
                        <option value="Platinum (£200)">Platinum VIP — £200</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Conditional: USA LLC Fields */}
              {serviceType === "usa-llc" && (
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-900/30 space-y-3 animate-in fade-in">
                  <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    USA LLC Details
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">
                        State
                      </label>
                      <select
                        name="usaState"
                        value={formData.usaState}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg bg-[#14141C] border border-gray-800 text-white text-xs focus:outline-none focus:border-red-600"
                      >
                        <option value="Wyoming">Wyoming (Best Privacy/Cost)</option>
                        <option value="Delaware">Delaware (VC/Tech Standard)</option>
                        <option value="Florida">Florida</option>
                        <option value="Texas">Texas</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">
                        Proposed LLC Name
                      </label>
                      <input
                        type="text"
                        name="usaLlcName"
                        value={formData.usaLlcName}
                        onChange={handleChange}
                        placeholder="e.g. Apex Ventures LLC"
                        className="w-full px-3 py-2 rounded-lg bg-[#14141C] border border-gray-800 text-white text-xs focus:outline-none focus:border-red-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">
                        Package
                      </label>
                      <select
                        name="usaPackage"
                        value={formData.usaPackage}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg bg-[#14141C] border border-gray-800 text-white text-xs focus:outline-none focus:border-red-600"
                      >
                        <option value="Starter ($199)">Starter — $199</option>
                        <option value="Silver ($299)">Silver (Registered Agent) — $299</option>
                        <option value="Gold ($499)">Gold (VIP + ITIN) — $499</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Conditional: Tech & AI Fields */}
              {serviceType === "tech-ai" && (
                <div className="p-4 rounded-2xl bg-red-950/20 border border-red-900/30 space-y-3 animate-in fade-in">
                  <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider">
                    AI & Technology Requirements
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">
                        Solution Type
                      </label>
                      <select
                        name="techRequirement"
                        value={formData.techRequirement}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg bg-[#14141C] border border-gray-800 text-white text-xs focus:outline-none focus:border-red-600"
                      >
                        <option value="Autonomous AI Agent">Autonomous AI Sales/Support Agent</option>
                        <option value="WhatsApp AI Automation">WhatsApp AI Assistant System</option>
                        <option value="Business CRM & ERP">Business Operating System (CRM/ERP)</option>
                        <option value="Custom Software Development">Full-Stack Custom Software</option>
                        <option value="Modern Web Development">Next.js Corporate Website</option>
                        <option value="3D Interactive Web">3D & Interactive Web Experience</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-300 mb-1">
                        Estimated Budget
                      </label>
                      <select
                        name="budgetRange"
                        value={formData.budgetRange}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg bg-[#14141C] border border-gray-800 text-white text-xs focus:outline-none focus:border-red-600"
                      >
                        <option value="Under $500">Under $500</option>
                        <option value="$500 - $1,500">$500 – $1,500</option>
                        <option value="$1,500 - $5,000">$1,500 – $5,000</option>
                        <option value="$5,000+">$5,000+ Enterprise</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Message / Details */}
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1.5">
                  Business Description & Notes
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Share any specific goals, timelines, or questions regarding your setup..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141C] border border-gray-800 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 transition resize-none"
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-bold text-sm shadow-glow transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Submit & Connect on WhatsApp</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectSubmit}
                  className="px-5 py-3 rounded-xl border border-gray-800 hover:border-gray-700 bg-white/5 text-gray-300 hover:text-white font-semibold text-xs transition"
                >
                  Submit Silently
                </button>
              </div>

              <p className="text-[10px] text-gray-500 text-center">
                Strict privacy guarantee. Your information is never sold or shared with unassociated third parties.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
