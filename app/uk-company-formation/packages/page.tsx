"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ModalContext } from "@/components/ClientShell";
import { ukLtdPackages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { ArrowLeft, Building2 } from "lucide-react";

export default function UKPackagesPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-16">
      <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          href="/uk-company-formation"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-red-400 transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to UK Formation Overview</span>
        </Link>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/15 text-red-400 text-xs font-bold border border-red-500/30">
            <Building2 className="w-3.5 h-3.5" />
            <span>UK FORMATION PRICING TIERS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            UK Company Formation Packages
          </h1>
          <p className="text-sm text-gray-300">
            Compare Starter, Silver, Gold, and Platinum tiers. All packages include official statutory Companies House fees and biometric ID verification.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
  );
}
