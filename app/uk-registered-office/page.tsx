"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ModalContext } from "@/components/ClientShell";
import { ukAddressPackages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { MapPin, Mail, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function UKRegisteredOfficePage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-20">
      
      {/* Hero */}
      <section className="relative pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold tracking-wide">
            <MapPin className="w-3.5 h-3.5" />
            <span>STATUTORY UK LEGAL ADDRESS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight">
            UK Registered Office Address <br />
            <span className="text-gradient-red">Official Compliance & Mailroom</span>
          </h1>

          <p className="max-w-2xl mx-auto text-base text-gray-300 leading-relaxed">
            Every UK company is legally required to have an official Registered Office Address in the UK for statutory correspondence from Companies House and HMRC.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openModal("uk-address", "Registered Office (£40/yr)")}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-glow"
            >
              Get Registered Office Address (£40/yr)
            </button>
          </div>
        </div>
      </section>

      {/* Details Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-[#0D0D12] border border-red-950/40 space-y-3">
            <h3 className="text-base font-bold text-white">What It Is</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              An official physical address in the UK registered with Companies House and HMRC. It appears on public government records and serves as the legal domicile for official court or statutory notices.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0D0D12] border border-red-950/40 space-y-3">
            <h3 className="text-base font-bold text-white">Who Needs It</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              Mandatory for all UK Limited Companies (LTD) and LLPs. Especially essential for non-resident founders who do not live or own residential property in the UK.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0D0D12] border border-red-950/40 space-y-3">
            <h3 className="text-base font-bold text-white">Digital Mailroom</h3>
            <p className="text-xs text-gray-400 leading-relaxed">
              All statutory mail from HMRC, Companies House, Courts, and official bodies is scanned in high resolution and delivered to your email/portal within 24 hours of arrival.
            </p>
          </div>
        </div>
      </section>

      {/* Address Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-red-500 uppercase tracking-widest">
            Annual Address Services
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Address Plans & Bundles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ukAddressPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={() => openModal("uk-address", `${pkg.name} (${pkg.price})`)}
            />
          ))}
        </div>
      </section>

    </div>
  );
}
