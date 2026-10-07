"use client";

import React from "react";
import { PackageItem } from "@/data/packages";
import SpotlightGlassCard from "@/components/SpotlightGlassCard";
import { Check, Clock, Sparkles, ArrowRight } from "lucide-react";

interface PackageCardProps {
  pkg: PackageItem;
  onSelect?: (pkg: PackageItem) => void;
}

export default function PackageCard({ pkg, onSelect }: PackageCardProps) {
  const isPopular = pkg.popular;

  return (
    <SpotlightGlassCard
      glowColor={isPopular ? "rgba(239, 68, 68, 0.45)" : "rgba(220, 38, 38, 0.28)"}
      className={`flex flex-col justify-between p-6 sm:p-7 ${
        isPopular
          ? "border-red-500/80 shadow-glow-lg ring-1 ring-red-500/30 scale-[1.02]"
          : "border-red-950/40"
      }`}
    >
      {/* Floating Shiny Badge */}
      {pkg.badge && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-red-600 via-red-500 to-red-700 text-white text-[10px] font-black uppercase tracking-widest shadow-glow flex items-center gap-1.5 border border-red-300/40 z-20">
          <Sparkles className="w-3 h-3 animate-pulse" />
          <span>{pkg.badge}</span>
        </div>
      )}

      {/* Header */}
      <div>
        <div className="flex items-baseline justify-between mb-2">
          <h3 className="text-xl font-extrabold text-white tracking-wide group-hover:text-red-400 transition-colors">
            {pkg.name}
          </h3>
          {pkg.processingTime && (
            <span className="flex items-center gap-1 text-[11px] text-gray-300 bg-white/5 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10 group-hover:border-red-500/30 transition-colors">
              <Clock className="w-3 h-3 text-red-400" />
              <span>{pkg.processingTime}</span>
            </span>
          )}
        </div>

        <p className="text-xs text-gray-400 min-h-[32px] mb-6 leading-relaxed">
          {pkg.description}
        </p>

        {/* Pricing with glowing highlight */}
        <div className="flex items-baseline gap-1.5 pb-6 border-b border-red-950/40 mb-6">
          <span className="text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-sm group-hover:text-white transition-colors">
            {pkg.price}
          </span>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            {pkg.currency}
          </span>
        </div>

        {/* Features Checklist with glass bullets */}
        <div className="space-y-3 mb-8">
          <p className="text-[11px] font-extrabold text-red-400 uppercase tracking-wider">
            Included in Setup:
          </p>
          <ul className="space-y-2.5">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300">
                <div className="w-4 h-4 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center flex-shrink-0 mt-0.5 text-red-400 group-hover:bg-red-600/30 group-hover:border-red-400 transition-all">
                  <Check className="w-2.5 h-2.5" />
                </div>
                <span className="leading-tight">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* High-Impact CTA Button */}
      <button
        onClick={() => onSelect && onSelect(pkg)}
        className={`w-full py-3.5 px-4 rounded-xl font-black text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden ${
          isPopular
            ? "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-glow hover:shadow-glow-lg"
            : "bg-white/5 hover:bg-red-600 text-gray-200 hover:text-white border border-red-900/40 hover:border-red-500 shadow-sm"
        }`}
      >
        <span>Get Started</span>
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
      </button>
    </SpotlightGlassCard>
  );
}
