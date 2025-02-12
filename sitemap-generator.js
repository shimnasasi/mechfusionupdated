const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');
const path = require('path');

// Define your static routes
const routes = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/about', changefreq: 'weekly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.6 },
  { url: '/career', changefreq: 'monthly', priority: 0.6 },
];

// Add dynamic routes if needed
const dynamicRoutes = [
  { url: '/services/service1', changefreq: 'monthly', priority: 0.7 },
  { url: '/services/service2', changefreq: 'monthly', priority: 0.7 },
];

// Combine static and dynamic routes
const allRoutes = [...routes, ...dynamicRoutes];

// Generate the sitemap
async function generateSitemap() {
  const sitemapStream = new SitemapStream({ hostname: 'https://www.yourdomain.com' });

  allRoutes.forEach((route) => sitemapStream.write(route));
  sitemapStream.end();

  const sitemap = await streamToPromise(sitemapStream);

  // Write the sitemap to the public folder
  createWriteStream(path.resolve('./public/sitemap.xml')).write(sitemap);
}

generateSitemap();