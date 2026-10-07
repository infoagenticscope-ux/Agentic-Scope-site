import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";
import { ArrowLeft, Clock, Calendar, MessageCircle, AlertCircle } from "lucide-react";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function SingleInsightPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full pb-24 space-y-12">
      <div className="pt-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-red-400 transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Insights</span>
        </Link>

        {/* Post Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs text-gray-400">
            <span className="px-3 py-1 rounded-full bg-red-600/15 text-red-400 border border-red-500/30 font-bold">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gray-500" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-gray-500" />
              {post.readTime}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
            {post.title}
          </h1>

          <p className="text-base text-gray-300 leading-relaxed font-medium">
            {post.excerpt}
          </p>
        </div>
      </div>

      {/* Post Body */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0D0D12] border border-red-950/40 space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
          {post.content.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed">
              {paragraph}
            </p>
          ))}

          {/* Legal disclaimer */}
          <div className="p-4 rounded-2xl bg-[#14141C] border border-red-950/40 flex items-start gap-3 text-xs text-gray-400 mt-8">
            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Advisory Notice: </strong>
              This analysis is published for informational and educational purposes. Corporate formation laws, IRS tax regulations, and bank underwriting policies change over time. Always verify current statutory requirements for your specific jurisdiction.
            </p>
          </div>

          {/* Post CTA */}
          <div className="pt-8 border-t border-red-950/40 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <h4 className="text-base font-bold text-white">Have questions about this topic?</h4>
              <p className="text-xs text-gray-400">Consult with our team on WhatsApp directly.</p>
            </div>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center gap-2 hover:opacity-90 shadow-md whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Ask On WhatsApp</span>
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}
