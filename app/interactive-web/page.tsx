"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { webDevPackages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { Sparkles, Zap, Layers, CheckCircle2 } from "lucide-react";

export default function InteractiveWebPage() {
  const { openModal } = useContext(ModalContext);
  const pkg3d = webDevPackages.find((p) => p.id === "web-3d-animated") || webDevPackages[4];

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>CINEMATIC DIGITAL IMMERSION</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          3D & Interactive Web Experiences
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Elevate your enterprise presence with fluid scroll-driven storytelling, lightweight procedural 3D elements, and micro-interactions that leave an indelible impression on clients and investors.
        </p>
        <div>
          <button
            onClick={() => openModal("tech-ai", "3D & Interactive Website (£180)")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Commission 3D Website (£180)
          </button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Performant, High-Frame-Rate 3D</h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              We never burden your visitors with bloated 50MB WebGL models that stall mobile devices. Instead, we engineer featherweight shaders, GPU-accelerated canvas rendering, and optimized geometries maintaining silky 60+ FPS performance everywhere.
            </p>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-center gap-2">✓ Sub-second initial page load speeds</li>
              <li className="flex items-center gap-2">✓ Interactive spatial model display with camera controls</li>
              <li className="flex items-center gap-2">✓ Full mobile and low-power device optimization</li>
              <li className="flex items-center gap-2">✓ SEO-indexed HTML architecture beneath the 3D layer</li>
            </ul>
          </div>

          <div className="max-w-md mx-auto w-full">
            <PackageCard pkg={pkg3d} onSelect={() => openModal("tech-ai", `${pkg3d.name} (${pkg3d.price})`)} />
          </div>
        </div>
      </section>
    </div>
  );
}
