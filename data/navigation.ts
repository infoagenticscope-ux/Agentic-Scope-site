export interface NavItem {
  title: string;
  href?: string;
  children?: {
    title: string;
    description?: string;
    href: string;
    badge?: string;
  }[];
}

export const mainNavItems: NavItem[] = [
  {
    title: "UK Formation",
    children: [
      {
        title: "UK LTD Formation",
        description: "Complete Companies House registration for non-residents",
        href: "/uk-company-formation",
        badge: "Core Service",
      },
      {
        title: "UK Formation Packages",
        description: "Starter, Silver, Gold & Platinum pricing cards",
        href: "/uk-company-formation/packages",
      },
      {
        title: "Companies House ID Verification",
        description: "Mandatory biometric identity check for directors & PSCs",
        href: "/uk-id-verification",
      },
      {
        title: "Registered Office Address",
        description: "Official legal UK address for government mail",
        href: "/uk-registered-office",
      },
      {
        title: "Business Service Address",
        description: "Commercial correspondence & marketing address",
        href: "/uk-business-address",
      },
      {
        title: "Director Service Address",
        description: "Protects director's residential privacy",
        href: "/uk-director-service-address",
      },
      {
        title: "UTR Number (HMRC)",
        description: "Corporation Tax reference retrieval & setup",
        href: "/utr-registration",
      },
      {
        title: "UK Company Compliance",
        description: "Annual accounts, confirmation statements & corporate filing",
        href: "/uk-company-compliance",
      },
      {
        title: "UK Company Changes",
        description: "Name changes, director changes, address updates",
        href: "/uk-company-changes",
      },
    ],
  },
  {
    title: "USA LLC",
    children: [
      {
        title: "USA LLC Formation",
        description: "Form an LLC in Wyoming, Delaware, Florida, or Texas",
        href: "/usa-llc-formation",
        badge: "Popular",
      },
      {
        title: "USA LLC Packages",
        description: "Starter ($199), Silver ($299) & Gold ($499) plans",
        href: "/usa-llc-formation/packages",
      },
      {
        title: "Wyoming vs Delaware",
        description: "Comprehensive state comparison for foreign founders",
        href: "/wyoming-vs-delaware",
      },
      {
        title: "EIN Number Registration",
        description: "Federal Employer ID Number without SSN/ITIN",
        href: "/ein-number",
      },
      {
        title: "ITIN Assistance",
        description: "Individual Taxpayer ID Number application support",
        href: "/itin",
      },
      {
        title: "USA Annual Tax Filing",
        description: "IRS Form 5472 & pro-forma 1120 compliance",
        href: "/usa-annual-tax-filing",
      },
      {
        title: "BOI Report (FinCEN)",
        description: "Beneficial ownership corporate transparency filing",
        href: "/boi-report",
      },
      {
        title: "US Registered Agent",
        description: "Year-round statutory legal representation",
        href: "/registered-agent",
      },
    ],
  },
  {
    title: "Banking & Payments",
    children: [
      {
        title: "Global Business Banking",
        description: "Wise, Tide, Airwallex, Payoneer & multi-currency accounts",
        href: "/business-banking",
        badge: "Global Rails",
      },
      {
        title: "Payment Gateway Setup",
        description: "Accept credit cards globally with Stripe, PayPal & Mollie",
        href: "/payment-gateways",
      },
      {
        title: "Stripe Setup & Guidance",
        description: "Complete onboarding for non-resident business accounts",
        href: "/stripe",
      },
      {
        title: "PayPal Business",
        description: "Verified international corporate checkout integration",
        href: "/paypal",
      },
    ],
  },
  {
    title: "Technology & AI",
    children: [
      {
        title: "Autonomous AI Agents",
        description: "24/7 intelligent sales, support, and operation agents",
        href: "/ai-agents",
        badge: "Next-Gen AI",
      },
      {
        title: "Business Automation Systems",
        description: "Workflow optimization, Zapier/Make/API pipelines",
        href: "/business-automation",
      },
      {
        title: "Business CRM & ERP Systems",
        description: "Centralized client management, pipelines & invoicing",
        href: "/crm-erp",
      },
      {
        title: "Custom Software Engineering",
        description: "Scalable cloud applications, APIs & SaaS development",
        href: "/software-development",
      },
      {
        title: "High-Converting Web Development",
        description: "Ultra-fast Next.js business websites & landing pages",
        href: "/web-development",
      },
      {
        title: "3D & Interactive Web Experiences",
        description: "Lightweight 3D graphics, animations & cinematic UI",
        href: "/interactive-web",
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Insights",
    href: "/insights",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
