"use client";

import React, { useState } from "react";
import { allServices } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import { Layers } from "lucide-react";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");

  const categories = [
    { id: "ALL", label: "All Services" },
    { id: "FORMATION", label: "Company Formation" },
    { id: "COMPLIANCE", label: "Compliance & Taxes" },
    { id: "BANKING", label: "Banking & Payments" },
    { id: "TECHNOLOGY", label: "AI & Technology" },
  ];

  const filteredServices =
    activeCategory === "ALL"
      ? allServices
      : allServices.filter((s) => s.category === activeCategory);

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Layers className="w-3.5 h-3.5" />
          <span>GLOBAL BUSINESS SERVICES ECOSYSTEM</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          All Services & Solutions
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Explore our end-to-end solutions covering UK company formation, US LLC registration, legal addresses, tax filings, international banking, payment gateways, and autonomous AI systems.
        </p>

        {/* Categories */}
        <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
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
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>
      </section>
    </div>
  );
}
