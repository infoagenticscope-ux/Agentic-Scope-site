"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { ModalContext } from "@/components/ClientShell";
import { ukAddressPackages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function UKBusinessAddressPage() {
  const { openModal } = useContext(ModalContext);
  const pkg = ukAddressPackages.find((p) => p.id === "business-service") || ukAddressPackages[1];

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>COMMERCIAL CORRESPONDENCE PRESENCE</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          UK Business Service Address
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Display a reputable UK address on your e-commerce storefront, invoices, client proposals, and marketing collateral without disclosing your private home location.
        </p>
        <div>
          <button
            onClick={() => openModal("uk-address", "Business Service Address (£60/yr)")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Get Business Address (£60/year)
          </button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Why Businesses Need a Commercial Address</h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              Unlike a statutory Registered Office address which is strictly reserved for government mail, a Business Service Address is designed for day-to-day commercial correspondence, supplier letters, marketplace verification, and customer inquiries.
            </p>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Display legally on Shopify, Amazon UK, eBay, and websites</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Receive supplier bills, contracts, and banking letters</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Digital scan-and-email delivery up to 10 items per month</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Proof of Address document issued for compliance checks</span>
              </li>
            </ul>
          </div>

          <div className="max-w-md mx-auto w-full">
            <PackageCard pkg={pkg} onSelect={() => openModal("uk-address", `${pkg.name} (${pkg.price})`)} />
          </div>
        </div>
      </section>
    </div>
  );
}
