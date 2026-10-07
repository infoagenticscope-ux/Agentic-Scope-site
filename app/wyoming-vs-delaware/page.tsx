"use client";

import React, { useContext } from "react";
import { ModalContext } from "@/components/ClientShell";
import { Scale, CheckCircle2, XCircle, ArrowRight, AlertCircle } from "lucide-react";

export default function WyomingVsDelawarePage() {
  const { openModal } = useContext(ModalContext);

  const comparisonData = [
    {
      feature: "Annual State Franchise Tax",
      wyoming: "$62 minimum (lowest in USA)",
      delaware: "$300 flat annual tax",
      winner: "Wyoming",
    },
    {
      feature: "Member / Owner Privacy",
      wyoming: "Complete anonymity (names not on public database)",
      delaware: "Strong privacy, but annual reports require disclosures",
      winner: "Wyoming",
    },
    {
      feature: "State Corporate Income Tax",
      wyoming: "0% State Income Tax",
      delaware: "0% on out-of-state income (8.7% if physical presence)",
      winner: "Tie",
    },
    {
      feature: "Best For E-Commerce / Amazon",
      wyoming: "Optimal (minimal ongoing costs)",
      delaware: "Expensive without added advantage",
      winner: "Wyoming",
    },
    {
      feature: "Best For Venture Capital / SaaS",
      wyoming: "Rarely preferred by Silicon Valley VCs",
      delaware: "Industry Standard for venture investment",
      winner: "Delaware",
    },
    {
      feature: "Court System & Precedent",
      wyoming: "Chancery court established, growing precedent",
      delaware: "Court of Chancery — 200+ years of business law",
      winner: "Delaware",
    },
    {
      feature: "Stripe & US Banking Eligibility",
      wyoming: "100% Equal acceptance across all banks",
      delaware: "100% Equal acceptance across all banks",
      winner: "Tie",
    },
    {
      feature: "Annual Reporting Complexity",
      wyoming: "Simple online filing with Secretary of State",
      delaware: "Due June 1st annually ($300 penalty for late)",
      winner: "Wyoming",
    },
  ];

  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <Scale className="w-3.5 h-3.5" />
          <span>STRATEGIC JURISDICTION COMPARISON</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Wyoming LLC vs Delaware LLC
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          An objective, data-backed comparative breakdown of costs, privacy, annual maintenance, and business suitability for international founders.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => openModal("usa-llc", "Wyoming Silver ($299)")}
            className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-xs uppercase shadow-glow"
          >
            Form Wyoming LLC ($199)
          </button>
          <button
            onClick={() => openModal("usa-llc", "Delaware Silver ($299)")}
            className="px-6 py-3.5 rounded-xl bg-[#14141C] border border-red-900/40 text-gray-200 hover:text-white font-bold text-xs"
          >
            Form Delaware LLC ($199)
          </button>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#0D0D12] border border-red-950/40 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#14141C] border-b border-red-950/40 text-gray-300">
                <tr>
                  <th className="py-4 px-6 font-bold uppercase tracking-wider text-xs">Evaluation Dimension</th>
                  <th className="py-4 px-6 font-bold text-red-400">Wyoming LLC</th>
                  <th className="py-4 px-6 font-bold text-blue-400">Delaware LLC</th>
                  <th className="py-4 px-6 font-bold text-center">Verdict</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-red-950/20 text-gray-300">
                {comparisonData.map((row, i) => (
                  <tr key={i} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-semibold text-white">{row.feature}</td>
                    <td className="py-4 px-6">{row.wyoming}</td>
                    <td className="py-4 px-6">{row.delaware}</td>
                    <td className="py-4 px-6 text-center">
                      <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-red-600/20 text-red-400 border border-red-500/30">
                        {row.winner}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Summary Advisory */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="p-8 rounded-3xl bg-[#12121A] border border-red-900/30 space-y-4">
          <h2 className="text-xl font-bold text-white">Our Recommendation for Global Founders</h2>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            If you are building an e-commerce brand (Amazon, Shopify), a digital marketing agency, remote software freelancing, or bootstrapping an online service, <strong className="text-white">Wyoming is virtually always the superior choice</strong> due to its minimal $62/year annual fee and world-class privacy. Choose Delaware if and only if you intend to raise venture capital from US institutional investors in the next 12–24 months.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/40 flex items-start gap-3 text-xs text-gray-400">
          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Disclaimer: </strong>
            Information is provided for general business guidance and does not constitute legal, tax or financial advice. Consult with qualified legal counsel or a certified public accountant regarding your specific business structure.
          </p>
        </div>
      </section>
    </div>
  );
}
