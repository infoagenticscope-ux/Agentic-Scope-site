"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/data/site";
import { mainNavItems } from "@/data/navigation";
import { 
  ChevronDown, 
  Menu, 
  X, 
  MessageCircle, 
  ArrowRight,
  Sparkles
} from "lucide-react";

import AnnouncementBanner from "./AnnouncementBanner";

interface NavbarProps {
  onOpenModal?: (serviceId?: string) => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);

  const toggleDropdown = (title: string) => {
    setActiveDropdown(activeDropdown === title ? null : title);
  };

  const toggleMobileAccordion = (title: string) => {
    setMobileAccordion(mobileAccordion === title ? null : title);
  };

  return (
    <div className="sticky top-0 z-50 w-full">
      <AnnouncementBanner />
      <header className="w-full border-b border-red-950/40 bg-[#08080A]/90 backdrop-blur-xl transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-red-600/40 shadow-glow-sm transition-transform duration-300 group-hover:scale-105 group-hover:shadow-glow">
              <Image 
                src="/logo.png" 
                alt="Agentic Scope Logo" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white flex items-center gap-1.5">
                AGENTIC <span className="text-red-600">SCOPE</span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-gray-400 font-medium tracking-tight -mt-1 hidden xs:block">
                Automate Your Business Smoothly
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {mainNavItems.map((item) => {
              const hasDropdown = item.children && item.children.length > 0;

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.title}
                    href={item.href || "#"}
                    className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.title}
                  </Link>
                );
              }

              const isOpen = activeDropdown === item.title;

              return (
                <div 
                  key={item.title} 
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    onClick={() => toggleDropdown(item.title)}
                    className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors group"
                    aria-expanded={isOpen}
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-200 group-hover:text-red-500 ${isOpen ? "rotate-180 text-red-500" : ""}`} />
                  </button>

                  {/* Dropdown Menu */}
                  {isOpen && (
                    <div className="absolute left-0 mt-1 w-80 xl:w-96 rounded-2xl bg-[#0D0D12] border border-red-900/30 p-3 shadow-2xl shadow-red-950/30 backdrop-blur-2xl animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                      <div className="grid gap-1">
                        {item.children?.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.href}
                            onClick={() => setActiveDropdown(null)}
                            className="p-2.5 rounded-xl hover:bg-red-950/20 hover:border-red-800/30 border border-transparent transition-all group/item"
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-gray-200 group-hover/item:text-red-400 transition-colors">
                                {sub.title}
                              </span>
                              {sub.badge && (
                                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/30">
                                  {sub.badge}
                                </span>
                              )}
                            </div>
                            {sub.description && (
                              <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">
                                {sub.description}
                              </p>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-xl border border-red-900/40 bg-red-950/20 text-gray-300 hover:text-white hover:border-red-600/60 transition-all hover:shadow-glow-sm"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 text-red-500 animate-pulse" />
              <span>+92 321 8420985</span>
            </a>

            <button
              onClick={() => onOpenModal ? onOpenModal() : window.location.assign("/contact")}
              className="flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-glow hover:shadow-glow-lg transition-all hover:scale-[1.02]"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenModal ? onOpenModal() : window.location.assign("/contact")}
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-red-600 text-white sm:hidden"
            >
              Start
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-20 bottom-0 bg-[#08080A]/95 backdrop-blur-2xl border-b border-red-950/40 overflow-y-auto z-40 p-5 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-2">
            {mainNavItems.map((item) => {
              const hasDropdown = item.children && item.children.length > 0;

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.title}
                    href={item.href || "#"}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-4 py-3 text-base font-semibold text-gray-200 hover:text-red-400 rounded-xl hover:bg-white/5 border border-transparent"
                  >
                    {item.title}
                  </Link>
                );
              }

              const isAccordionOpen = mobileAccordion === item.title;

              return (
                <div key={item.title} className="rounded-xl border border-red-950/30 overflow-hidden bg-[#0F0F14]/60">
                  <button
                    onClick={() => toggleMobileAccordion(item.title)}
                    className="w-full flex items-center justify-between px-4 py-3.5 text-base font-semibold text-gray-200 hover:text-white"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isAccordionOpen ? "rotate-180 text-red-500" : ""}`} />
                  </button>

                  {isAccordionOpen && (
                    <div className="px-3 pb-3 pt-1 border-t border-red-950/30 flex flex-col gap-1 bg-[#08080A]/60">
                      {item.children?.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="px-3 py-2 rounded-lg text-sm text-gray-300 hover:text-red-400 hover:bg-red-950/20 flex items-center justify-between"
                        >
                          <span>{sub.title}</span>
                          {sub.badge && (
                            <span className="text-[9px] px-2 py-0.5 rounded bg-red-600/20 text-red-400">
                              {sub.badge}
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Mobile Contact Button */}
            <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-red-950/40">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366]/20 border border-[#25D366]/40 text-[#25D366] font-semibold text-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp: {siteConfig.phoneFormatted}</span>
              </a>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenModal) onOpenModal();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-sm shadow-glow text-center"
              >
                Start Your Business
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  </div>
  );
}
