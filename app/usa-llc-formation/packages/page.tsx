"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ModalContext } from "@/components/ClientShell";
import { usaLlcPackages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { ArrowLeft, Flag } from "lucide-react";

export default function USAPackagesPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-16">
      <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <Link
          href="/usa-llc-formation"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-red-400 transition mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to USA LLC Overview</span>
        </Link>

        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-600/15 text-red-400 text-xs font-bold border border-red-500/30">
            <Flag className="w-3.5 h-3.5" />
            <span>USA LLC PRICING TIERS</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            USA LLC Formation Packages
          </h1>
          <p className="text-sm text-gray-300">
            Compare Starter ($199), Silver ($299), and Gold ($499) tiers. All packages include state filing, Articles of Organization, and official federal EIN from the IRS.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {usaLlcPackages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              onSelect={() => openModal("usa-llc", `${pkg.name} (${pkg.price})`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
