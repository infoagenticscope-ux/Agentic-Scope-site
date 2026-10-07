"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { webDevPackages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { Globe, Sparkles, CheckCircle2, Zap } from "lucide-react";

export default function WebDevelopmentPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-5xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Globe className="w-3.5 h-3.5" />
          <span>CONVERSION-FIRST DIGITAL PLATFORMS</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          High-Converting Web Development
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Lightning-fast corporate websites, conversion landing pages, and interactive React/Next.js platforms built to command enterprise authority and convert global visitors.
        </p>
        <div>
          <button
            onClick={() => openModal("tech-ai", "React Standard (£60)")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Start Website Project (£40+)
          </button>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
            Fixed Scope Packages
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Web Development Packages
          </h2>
          <p className="text-xs text-gray-400">
            Transparent pricing with free hosting setup, responsive design, and post-launch support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {webDevPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={() => openModal("tech-ai", `${pkg.name} (${pkg.price})`)}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
