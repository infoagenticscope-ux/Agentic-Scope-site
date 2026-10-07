"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { ukAddressPackages } from "@/data/packages";
import PackageCard from "@/components/PackageCard";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";

export default function UKDirectorServiceAddressPage() {
  const { openModal } = useContext(ModalContext);
  const pkg = ukAddressPackages.find((p) => p.id === "director-service") || ukAddressPackages[2];

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>DIRECTOR RESIDENTIAL PRIVACY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          UK Director Service Address
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Prevent your personal residential address from being published on the public Companies House register. Shield your privacy completely for only £20/year.
        </p>
        <div>
          <button
            onClick={() => openModal("uk-address", "Director Service Address (£20/yr)")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow hover:scale-105 transition"
          >
            Protect My Privacy (£20/year)
          </button>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white">Complete Officer Confidentiality</h2>
            <p className="text-xs text-gray-400 leading-relaxed">
              When registering as a director or shareholder of a UK company, UK law requires disclosing a correspondence address. If you do not specify a Director Service Address, your personal residential home address will be permanently published online on Companies House registers.
            </p>
            <ul className="space-y-2 text-xs text-gray-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Prevents identity theft and public residential lookup</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Valid for 1 company director or Person with Significant Control (PSC)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500" />
                <span>Receives all statutory officer notices and letters</span>
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
