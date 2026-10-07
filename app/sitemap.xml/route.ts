import { blogPosts } from "@/data/blog";

export async function GET() {
  const baseUrl = "https://agenticscope.com";

  const staticRoutes = [
    "",
    "/uk-company-formation",
    "/uk-company-formation/packages",
    "/uk-registered-office",
    "/uk-business-address",
    "/uk-director-service-address",
    "/uk-id-verification",
    "/uk-company-compliance",
    "/uk-annual-filing",
    "/uk-company-changes",
    "/utr-registration",
    "/usa-llc-formation",
    "/usa-llc-formation/packages",
    "/wyoming-vs-delaware",
    "/ein-number",
    "/itin",
    "/usa-annual-tax-filing",
    "/boi-report",
    "/registered-agent",
    "/business-banking",
    "/payment-gateways",
    "/stripe",
    "/paypal",
    "/ai-agents",
    "/business-automation",
    "/crm-erp",
    "/software-development",
    "/web-development",
    "/interactive-web",
    "/pricing",
    "/about",
    "/faq",
    "/insights",
    "/contact",
    "/services",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticRoutes
  .map(
    (route) => `  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "" ? "1.0" : "0.8"}</priority>
  </url>`
  )
  .join("\n")}
${blogPosts
  .map(
    (post) => `  <url>
    <loc>${baseUrl}/insights/${post.slug}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
