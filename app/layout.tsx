import type { Metadata } from "next";
import "./globals.css";
import ClientShell from "@/components/ClientShell";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "FORMATION SCOPE LTD — Automate Your Business Smoothly | UK LTD, USA LLC & AI Systems",
  description:
    "Official Formation Scope Ltd platform — Fully-managed UK Limited Company & US LLC formation for non-residents worldwide, international business banking, Stripe/PayPal gateways, custom software, CRM/ERP development, and AI agents.",
  keywords: [
    "UK LTD formation",
    "register UK limited company online",
    "US LLC formation non resident",
    "Companies House ID verification",
    "EIN without SSN",
    "ITIN application assistance",
    "BOI report FinCEN",
    "UK UTR HMRC",
    "business bank account non resident",
    "Stripe setup worldwide",
    "PayPal business",
    "Wise Business",
    "Payoneer",
    "Tide",
    "Airwallex",
    "Delaware LLC",
    "Wyoming LLC",
    "AI agents",
    "WhatsApp AI agent",
    "business automation",
    "CRM ERP development",
    "Formation Scope Ltd",
    "Formation Scope Limited",
  ],
  authors: [{ name: "Formation Scope Ltd" }],
  metadataBase: new URL("https://formationscope.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FORMATION SCOPE LTD — Automate Your Business Smoothly",
    description:
      "UK LTD & US LLC formation, international banking, payment gateways, and autonomous AI business infrastructure for global entrepreneurs.",
    url: "https://formationscope.com",
    siteName: "Formation Scope Ltd",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "Formation Scope Ltd Brand",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://formationscope.com/#organization",
        name: "Formation Scope Ltd",
        legalName: "Formation Scope Limited",
        url: "https://formationscope.com",
        logo: "https://formationscope.com/logo.png",
        description:
          "Global business formation, corporate compliance, international banking, and AI-powered business automation systems.",
        email: siteConfig.email,
        telephone: siteConfig.phoneFormatted,
        sameAs: [siteConfig.whatsappUrl],
      },
      {
        "@type": "WebSite",
        "@id": "https://formationscope.com/#website",
        url: "https://formationscope.com",
        name: "Formation Scope Ltd",
        publisher: { "@id": "https://formationscope.com/#organization" },
      },
      {
        "@type": "ProfessionalService",
        name: "Formation Scope Ltd Corporate & AI Solutions",
        url: "https://formationscope.com",
        priceRange: "$$",
        serviceType: [
          "UK Limited Company Formation",
          "US LLC Formation",
          "EIN Registration",
          "ITIN Assistance",
          "BOI FinCEN Reporting",
          "UK Registered Office",
          "Director Service Address",
          "Business Banking Guidance",
          "Payment Gateway Setup",
          "Autonomous AI Agents",
          "Business Automation Systems",
          "Web Development",
        ],
      },
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#08080A] text-white antialiased">
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
