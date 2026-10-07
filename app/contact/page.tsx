"use client";

import React, { useState } from "react";
import { siteConfig } from "@/data/site";
import { MessageCircle, Mail, Send, CheckCircle2, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "UK Company Formation",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = `*Contact Inquiry - Agentic Scope*\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone}\n*Service:* ${formData.service}\n*Message:* ${formData.message}`;
    const encoded = encodeURIComponent(msg);
    setTimeout(() => {
      window.open(`https://wa.me/923218420985?text=${encoded}`, "_blank");
    }, 600);
  };

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>DIRECT SPECIALIST SUPPORT</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Contact Agentic Scope
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Connect with our corporate formation advisors and AI systems engineers. We respond rapidly via official WhatsApp and secure email channels.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Direct channels (5 cols) */}
          <div className="md:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-4">
              <h3 className="text-lg font-bold text-white">Direct Communication</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We operate digital-first with continuous responsiveness across global timezones.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-[#25D366]/20 border border-white/5 hover:border-[#25D366]/40 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block font-medium">WhatsApp Priority</span>
                    <strong className="text-sm text-white group-hover:text-[#25D366] transition">
                      {siteConfig.phoneFormatted}
                    </strong>
                  </div>
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/5 hover:bg-red-600/20 border border-white/5 hover:border-red-600/40 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-500 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 block font-medium">Email Dispatch</span>
                    <strong className="text-sm text-white group-hover:text-red-400 transition">
                      {siteConfig.email}
                    </strong>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-red-950/20 border border-red-900/40 space-y-2">
              <span className="text-xs font-bold text-red-400 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Global Response Standard
              </span>
              <p className="text-xs text-gray-300 leading-relaxed">
                WhatsApp inquiries typically receive a direct advisor response within minutes during operating hours (Mon–Sat 9AM–9PM PKT).
              </p>
            </div>
          </div>

          {/* Contact Form (7 cols) */}
          <div className="md:col-span-7 p-8 rounded-3xl bg-[#0D0D12] border border-red-950/40">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 mx-auto rounded-full bg-red-600/20 text-red-500 flex items-center justify-center shadow-glow">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white">Inquiry Forwarded</h3>
                <p className="text-xs text-gray-300 max-w-sm mx-auto">
                  Your message has been formatted and opened in WhatsApp. Our advisor will confirm your requirements shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-2">Send Direct Inquiry</h3>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141C] border border-gray-800 text-white text-xs focus:outline-none focus:border-red-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@enterprise.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141C] border border-gray-800 text-white text-xs focus:outline-none focus:border-red-600"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">WhatsApp Phone *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+92 300 1234567"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141C] border border-gray-800 text-white text-xs focus:outline-none focus:border-red-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Service Category</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141C] border border-gray-800 text-white text-xs focus:outline-none focus:border-red-600"
                  >
                    <option value="UK Company Formation">UK Company Formation (LTD)</option>
                    <option value="USA LLC Formation">USA LLC Formation (Wyoming / Delaware)</option>
                    <option value="EIN / ITIN Registration">EIN / ITIN Registration</option>
                    <option value="UK Address Services">UK Registered Office Address</option>
                    <option value="Banking & Stripe Setup">Business Banking & Stripe Setup</option>
                    <option value="Autonomous AI Agents">Autonomous AI Agents</option>
                    <option value="Web & Software Development">Web & Custom Software Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 mb-1">Message</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your business model, questions or timeline..."
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#14141C] border border-gray-800 text-white text-xs focus:outline-none focus:border-red-600 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 text-white font-bold text-xs uppercase shadow-glow transition flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message via WhatsApp</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
