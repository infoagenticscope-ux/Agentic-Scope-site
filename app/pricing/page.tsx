"use client";

import React, { useContext, useState } from "react";
import { ModalContext } from "@/components/ClientShell";
import { ukLtdPackages, ukAddressPackages, usaLlcPackages, usaAddons, webDevPackages } from "@/data/packages";
import { bankingAndPaymentProviders } from "@/data/providers";
import PackageCard from "@/components/PackageCard";
import { Building2, Flag, MapPin, Landmark, Globe, Layers, ArrowRight } from "lucide-react";

export default function PricingPage() {
  const { openModal } = useContext(ModalContext);
  const [selectedTab, setSelectedTab] = useState<"all" | "uk" | "usa" | "address" | "banking" | "tech">("all");

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Layers className="w-3.5 h-3.5" />
          <span>CENTRALIZED PRICING CATALOG</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Transparent, Fixed Pricing
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Clear fee structures across all our business formation, registered office address, tax compliance, banking, and technology services.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 flex-wrap pt-2">
          {[
            { id: "all", label: "Complete Catalog" },
            { id: "uk", label: "UK LTD" },
            { id: "usa", label: "USA LLC" },
            { id: "address", label: "UK Addresses" },
            { id: "banking", label: "Banking & Gateways" },
            { id: "tech", label: "Web Development" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                selectedTab === tab.id
                  ? "bg-red-600 text-white shadow-glow-sm"
                  : "bg-[#14141C] text-gray-400 hover:text-white border border-red-950/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* UK LTD Formation */}
        {(selectedTab === "all" || selectedTab === "uk") && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Building2 className="w-6 h-6 text-red-500" />
              UK Limited Company Formation Packages
            </h2>
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
        )}

        {/* USA LLC Formation */}
        {(selectedTab === "all" || selectedTab === "usa") && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Flag className="w-6 h-6 text-red-500" />
              USA LLC Formation Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
              {usaLlcPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onSelect={() => openModal("usa-llc", `${pkg.name} (${pkg.price})`)}
                />
              ))}
            </div>

            {/* USA Addons */}
            <div className="pt-6 space-y-4">
              <h3 className="text-lg font-bold text-gray-300">USA Compliance & Add-ons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {usaAddons.map((addon) => (
                  <div key={addon.id} className="p-5 rounded-2xl bg-[#0D0D12] border border-red-950/40 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-sm font-bold text-white">{addon.name}</h4>
                        <span className="text-base font-extrabold text-red-400">{addon.price}</span>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed mb-4">{addon.description}</p>
                    </div>
                    <button
                      onClick={() => openModal("usa-llc", `${addon.name} (${addon.price})`)}
                      className="w-full py-2 rounded-xl bg-white/5 hover:bg-red-600/20 text-xs font-bold text-white border border-red-950/40"
                    >
                      Get Started
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* UK Addresses */}
        {(selectedTab === "all" || selectedTab === "address") && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <MapPin className="w-6 h-6 text-red-500" />
              UK Address Services (Annual)
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ukAddressPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onSelect={() => openModal("uk-address", `${pkg.name} (${pkg.price})`)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Banking and Gateways */}
        {(selectedTab === "all" || selectedTab === "banking") && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Landmark className="w-6 h-6 text-red-500" />
              Banking & Payment Gateways Assistance
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {bankingAndPaymentProviders.map((prov) => (
                <div key={prov.id} className="p-5 rounded-2xl bg-[#0D0D12] border border-red-950/40 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-sm font-bold text-white">{prov.name}</h4>
                      <span className="text-base font-extrabold text-red-400">{prov.price}</span>
                    </div>
                    <p className="text-xs text-gray-400 leading-relaxed line-clamp-2 mb-4">{prov.description}</p>
                  </div>
                  <button
                    onClick={() => openModal("banking", `${prov.name} (${prov.price})`)}
                    className="w-full py-2 rounded-xl bg-white/5 hover:bg-red-600/20 text-xs font-bold text-white border border-red-950/40"
                  >
                    Select {prov.name}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Web Development */}
        {(selectedTab === "all" || selectedTab === "tech") && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2">
              <Globe className="w-6 h-6 text-red-500" />
              Web Development Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webDevPackages.map((pkg) => (
                <PackageCard
                  key={pkg.id}
                  pkg={pkg}
                  onSelect={() => openModal("tech-ai", `${pkg.name} (${pkg.price})`)}
                />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
