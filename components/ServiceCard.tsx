"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { ServiceItem } from "@/data/services";
import { 
  Building2, 
  Flag, 
  MapPin, 
  Briefcase, 
  ShieldCheck, 
  Fingerprint, 
  FileCheck, 
  RefreshCw, 
  FileText, 
  Hash, 
  CreditCard, 
  Calculator, 
  Scale, 
  UserCheck, 
  Landmark, 
  Zap, 
  DollarSign, 
  Bot, 
  Cpu, 
  Database, 
  Code, 
  Globe, 
  Sparkles,
  ArrowRight
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Building2,
  Flag,
  MapPin,
  Briefcase,
  ShieldCheck,
  Fingerprint,
  FileCheck,
  RefreshCw,
  FileText,
  Hash,
  CreditCard,
  Calculator,
  Scale,
  UserCheck,
  Landmark,
  Zap,
  DollarSign,
  Bot,
  Cpu,
  Database,
  Code,
  Globe,
  Sparkles,
};

interface ServiceCardProps {
  service: ServiceItem;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Building2;
  const cardRef = useRef<HTMLAnchorElement | null>(null);
  const [coords, setCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <Link
      ref={cardRef}
      href={service.href}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-3xl backdrop-blur-2xl transition-all duration-400 overflow-hidden border border-white/10 hover:border-red-500/70 shadow-glass hover:shadow-glow hover:-translate-y-1.5"
      style={{
        background: "linear-gradient(145deg, rgba(20, 16, 24, 0.85) 0%, rgba(10, 10, 15, 0.95) 100%)",
      }}
    >
      {/* Interactive Cursor Spotlight Beam */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(350px circle at ${coords.x}px ${coords.y}px, rgba(220, 38, 38, 0.3), rgba(255,255,255,0.08) 25%, transparent 65%)`,
        }}
      />

      {/* Diagonal Glass Sheen Sweep */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        <div
          className="w-[200%] h-full absolute -top-full -left-full group-hover:translate-x-[200%] group-hover:translate-y-[200%] transition-transform duration-1000 ease-out"
          style={{
            background:
              "linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.15) 50%, rgba(239, 68, 68, 0.3) 54%, transparent 62%)",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Top meta */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-2xl bg-red-600/10 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white group-hover:shadow-glow transition-all duration-300">
            <IconComponent className="w-6 h-6" />
          </div>

          <div className="flex items-center gap-2">
            {service.badge && (
              <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full bg-red-600/25 text-red-400 border border-red-500/40 uppercase tracking-widest shadow-glow-sm">
                {service.badge}
              </span>
            )}
            {service.priceStarting && (
              <span className="text-xs font-semibold text-gray-300 bg-white/5 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10 group-hover:border-red-500/40 transition-colors">
                From {service.priceStarting}
              </span>
            )}
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors mb-2">
          {service.title}
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed line-clamp-3 mb-5">
          {service.shortDesc}
        </p>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-6">
          {service.features.slice(0, 3).map((f, i) => (
            <li key={i} className="text-[11px] text-gray-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:shadow-glow-sm transition-all" />
              <span className="truncate">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Action Footer */}
      <div className="relative z-10 pt-4 border-t border-red-950/40 flex items-center justify-between text-xs font-bold text-red-500 group-hover:text-red-400">
        <span className="tracking-wide">Explore Service</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
      </div>
    </Link>
  );
}
