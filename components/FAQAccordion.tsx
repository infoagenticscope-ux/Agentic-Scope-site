"use client";

import React, { useState } from "react";
import { faqsData, FAQItem } from "@/data/faqs";
import { ChevronDown, Search, HelpCircle } from "lucide-react";

export default function FAQAccordion() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "uk", label: "UK LTD" },
    { id: "usa", label: "USA LLC" },
    { id: "banking", label: "Banking & Stripe" },
    { id: "compliance", label: "Compliance & Taxes" },
    { id: "technology", label: "AI & Tech" },
  ];

  const filteredFaqs = faqsData.filter((faq) => {
    const matchesCategory = selectedCategory === "all" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleIndex = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      
      {/* Category Pills & Search */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="flex items-center gap-1.5 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? "bg-red-600 text-white shadow-glow-sm"
                  : "bg-[#14141C] text-gray-400 hover:text-white border border-red-950/40"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions..."
            className="w-full pl-9 pr-4 py-1.5 rounded-full bg-[#14141C] border border-red-950/40 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-red-600"
          />
        </div>
      </div>

      {/* Accordion List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <div className="p-8 text-center bg-[#0F0F14] rounded-2xl border border-red-950/40 text-gray-400 text-xs">
            No matching questions found. Try searching with different keywords.
          </div>
        ) : (
          filteredFaqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);

            return (
              <div
                key={index}
                className="rounded-2xl bg-[#0D0D12] border border-red-950/40 hover:border-red-900/40 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-semibold text-gray-200 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-red-600/10 border border-red-600/20 text-red-400 flex items-center justify-center flex-shrink-0 text-xs font-bold">
                      Q
                    </span>
                    <span className="leading-snug">{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-red-500" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-400 leading-relaxed border-t border-red-950/20 bg-white/[0.01]">
                    <div className="pl-9 pr-2">
                      {faq.answer}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
