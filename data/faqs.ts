export interface FAQItem {
  question: string;
  answer: string;
  category: "uk" | "usa" | "banking" | "compliance" | "technology" | "general";
}

export const faqsData: FAQItem[] = [
  // UK LTD
  {
    category: "uk",
    question: "Can non-residents register a UK Limited Company without visiting the UK?",
    answer: "Yes, 100%. Under UK law, any foreign national aged 16 or above can incorporate and own a UK Limited Company completely remotely. You do not need UK residency, citizenship, or a physical visa. Agentic Scope manages the entire filing directly with Companies House.",
  },
  {
    category: "uk",
    question: "What is Companies House ID Verification and is it mandatory?",
    answer: "Under the Economic Crime and Corporate Transparency Act, Companies House requires all directors and Persons with Significant Control (PSCs) to verify their identity. Agentic Scope includes authorized ID verification in all our formation packages using your international passport and secure digital biometric verification.",
  },
  {
    category: "uk",
    question: "What is the difference between Starter (£140) and Silver (£170)?",
    answer: "The Starter package (£140) includes full Companies House registration, official incorporation fees, share certificates, and digital incorporation documents. The Silver package (£170) adds an official 1-Year UK Registered Office Address, Company Authentication Code, and HMRC UTR number registration, making it the most comprehensive package for operating commercially.",
  },
  {
    category: "uk",
    question: "What is a Registered Office Address vs a Director Service Address?",
    answer: "A Registered Office Address is the legal address of your company where Companies House and HMRC send statutory notices. A Director Service Address protects the personal residential privacy of company directors, preventing their home address from appearing on public search registers.",
  },
  {
    category: "uk",
    question: "How do I receive my HMRC UTR Number?",
    answer: "Once your company is incorporated, HMRC automatically generates a Unique Taxpayer Reference (UTR) for Corporation Tax purposes. It is dispatched to your registered office address. If you use our Registered Office service, our mail team scans the official HMRC letter and delivers the high-resolution digital copy directly to your client portal.",
  },

  // USA LLC
  {
    category: "usa",
    question: "Can I form a US LLC if I live outside the United States?",
    answer: "Yes. Foreign citizens can legally own and operate a US LLC 100% remotely without setting foot in the US. You do not need a US Social Security Number (SSN) to form the company or obtain a federal EIN tax number.",
  },
  {
    category: "usa",
    question: "Which US state is best: Wyoming vs Delaware?",
    answer: "Wyoming is generally optimal for e-commerce, digital agencies, freelancers, and small businesses due to lower annual franchise fees ($62 minimum), strong asset protection, and zero state corporate income tax. Delaware is typically preferred by high-growth startups planning to raise US venture capital from angel investors or institutional VCs.",
  },
  {
    category: "usa",
    question: "What is an EIN and why is it essential?",
    answer: "An EIN (Employer Identification Number) is a 9-digit federal tax ID issued by the IRS. It is required to open US business bank accounts (such as Wise, Mercury, or Relay), set up US payment gateways like Stripe or PayPal, and fulfill federal tax reporting obligations.",
  },
  {
    category: "usa",
    question: "Do non-residents need an ITIN?",
    answer: "An ITIN (Individual Taxpayer Identification Number) is an individual tax ID for persons who do not have an SSN. While not strictly required to form an LLC or obtain an initial EIN, an ITIN is highly recommended for long-term US credit building, PayPal verification, and personal tax filing.",
  },
  {
    category: "usa",
    question: "What is the FinCEN BOI Report?",
    answer: "Under the Corporate Transparency Act, US LLCs are required to file a Beneficial Ownership Information (BOI) report with FinCEN disclosing individuals who directly or indirectly own or control 25% or more of the company. Agentic Scope prepares and files your BOI report electronically to ensure total regulatory compliance.",
  },

  // BANKING & PAYMENTS
  {
    category: "banking",
    question: "Which business bank accounts can I open for my UK LTD or US LLC?",
    answer: "International founders can open multi-currency business accounts with Wise Business, Tide, Airwallex, Payoneer, WorldFirst, and others. These platforms provide official bank routing numbers, Sort codes, IBANs, and corporate debit cards.",
  },
  {
    category: "banking",
    question: "Do you guarantee business bank or Stripe account approval?",
    answer: "No reputable company can legally guarantee third-party financial approval. All bank and payment gateway approvals are strictly subject to each provider's independent compliance, underwriting, and risk assessments. Agentic Scope ensures your legal entity, business address, and documentation are structured properly to maximize your approval chances.",
  },
  {
    category: "banking",
    question: "How do I connect Stripe to my Shopify or custom website?",
    answer: "Once your UK LTD or US LLC and business bank account are approved, you register your Stripe account using your company registration number, registered address, and bank account details. You then paste your Stripe API keys or connect through one-click OAuth into Shopify, WooCommerce, or your custom application.",
  },

  // COMPLIANCE
  {
    category: "compliance",
    question: "What ongoing annual filings are required for a UK LTD?",
    answer: "A UK Limited Company must file an annual Confirmation Statement (CS01) with Companies House and file annual statutory accounts. Additionally, you must complete your Corporation Tax return (CT600) with HMRC each year. Failure to file can lead to severe late penalties and company strike-off.",
  },
  {
    category: "compliance",
    question: "What tax filings are required for a foreign-owned US LLC?",
    answer: "Foreign-owned single-member US LLCs (disregarded entities) must file IRS Form 5472 along with a pro-forma Form 1120 annually to report reportable transactions. The IRS imposes strict penalties of $25,000 for failing to file on time.",
  },

  // TECHNOLOGY & AI
  {
    category: "technology",
    question: "What are Autonomous AI Agents and how can they help my business?",
    answer: "AI Agents are autonomous software systems powered by advanced LLMs and tool APIs that execute business tasks with human-level accuracy. Unlike static chatbots, AI agents can query databases, qualify leads, schedule appointments, send follow-ups, trigger webhooks, and execute complex business logic 24 hours a day.",
  },
  {
    category: "technology",
    question: "Can you build a WhatsApp AI agent for customer sales and support?",
    answer: "Yes! We design, build, and deploy specialized WhatsApp AI agents connected to the official WhatsApp Cloud API. They can understand natural language queries, qualify incoming buyer leads, answer detailed product questions, update your CRM, and escalate complex inquiries to human agents smoothly.",
  },
  {
    category: "technology",
    question: "Do you provide custom CRM and ERP software?",
    answer: "Yes. We develop tailored Business Operating Systems (BOS) unifying CRM, client portals, automated invoicing, project management, and operational workflows into a single high-performance dashboard designed specifically for your company's processes.",
  },
];
