const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const path = require("path");

// ===============================
// STATIC ROUTES
// ===============================
const staticRoutes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  { url: "/services", changefreq: "weekly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.6 },
  { url: "/career", changefreq: "monthly", priority: 0.6 },
];

// ===============================
// BLOG ROUTES (ADD ALL BLOG SLUGS)
// ===============================
const blogRoutes = [
  "the-role-of-advanced-CNC-Programming-in-boosting-india's-precision-manufacturing-industry",
  "top-5-mechanical-design-trends-transforming-indian-manufacturing-in-2026",
  "best-jigs-fixture-design-services-usa",
  "the-increasing-demand-for-cam-services:-an-international-scenario",
  "maximizing-Production-efficiency-with-jig-and-fixture-design-services",
  "improving-production-with-expert-mould-design-solutions",
].map(slug => ({
  url: `/blog/${slug}`,
  changefreq: "monthly",
  priority: 0.7,
}));

// ===============================
// COMBINE ALL ROUTES
// ===============================
const allRoutes = [...staticRoutes, ...blogRoutes];

// ===============================
// GENERATE SITEMAP
// ===============================
async function generateSitemap() {
  const sitemapStream = new SitemapStream({
    hostname: "https://mechfusion.in",
  });

  allRoutes.forEach(route => sitemapStream.write(route));
  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream);

  createWriteStream(
    path.resolve("./public/sitemap.xml")
  ).write(sitemap);

  console.log("✅ Sitemap generated successfully!");
}

generateSitemap();
