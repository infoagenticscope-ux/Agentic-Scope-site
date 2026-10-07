"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { FileText, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function UtrRegistrationPage() {
  const { openModal } = useContext(ModalContext);

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <FileText className="w-3.5 h-3.5" />
          <span>HMRC CORPORATION TAX IDENTIFIER</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          HMRC UTR Number Registration
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          Obtain and activate your 10-digit Unique Taxpayer Reference (UTR) from HM Revenue & Customs for Corporation Tax compliance and online gateway filings.
        </p>
        <div>
          <button
            onClick={() => openModal("uk-compliance", "UTR Registration")}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow"
          >
            Get UTR Support
          </button>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-6">
          <h2 className="text-xl font-bold text-white">Why Every UK LTD Needs a UTR</h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            A Unique Taxpayer Reference (UTR) is a 10-digit code issued by HMRC to identify individual businesses for tax purposes. Without a UTR, your company cannot pay Corporation Tax, file statutory CT600 tax returns, or register for VAT.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-[#14141C] border border-red-950/40 text-xs text-gray-300">
              <strong className="text-white block mb-1">Corporation Tax</strong>
              Required for all annual tax filings and communications with HMRC.
            </div>
            <div className="p-4 rounded-xl bg-[#14141C] border border-red-950/40 text-xs text-gray-300">
              <strong className="text-white block mb-1">Banking Verification</strong>
              Requested by UK banks and fintechs to verify active corporate tax status.
            </div>
            <div className="p-4 rounded-xl bg-[#14141C] border border-red-950/40 text-xs text-gray-300">
              <strong className="text-white block mb-1">Included in Packages</strong>
              HMRC UTR registration support is bundled in our Silver, Gold & Platinum packages.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
