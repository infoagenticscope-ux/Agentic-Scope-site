"use client";

import React from "react";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import { TrendingUp, ArrowRight, BookOpen } from "lucide-react";

export default function InsightsPage() {
  return (
    <div className="w-full pb-24 space-y-16">
      <section className="pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-red-950/30 bg-radial-hero text-center max-w-4xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/15 border border-red-500/30 text-red-400 text-xs font-bold">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>RESEARCH & EXECUTIVE ADVISORY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white">
          Agentic Scope Insights
        </h1>
        <p className="text-base text-gray-300 max-w-2xl mx-auto">
          In-depth guides, regulatory analyses, and technical playbooks for non-resident business formation, international banking, and autonomous AI automation.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/insights/${post.slug}`}
              className="group p-7 rounded-3xl bg-[#0D0D12] border border-red-950/40 hover:border-red-600/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-red-950/40 text-red-400 border border-red-900/40 font-semibold text-[11px]">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h3>
                <p className="text-xs text-gray-400 line-clamp-3 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-red-950/30 flex items-center justify-between text-xs font-semibold text-red-500">
                <span>Read Full Analysis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
