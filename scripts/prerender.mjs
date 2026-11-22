import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const dist = path.join(root, "dist");
const load = (p) => import(pathToFileURL(path.join(root, p)).href);

const { render } = await load("dist-server/entry-server.js");
const { SITE, PAGES, NOT_FOUND } = await load("src/seoConfig.js");

const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");
if (!template.includes("<!--seo-head-->"))
  throw new Error(
    "dist/index.html mein <!--seo-head--> nahi mila. Sirf npm run build chalayein (prerender.mjs akela dobara nahi)",
  );
if (!template.includes('<div id="root"></div>'))
  throw new Error('index.html mein <div id="root"></div> nahi mila');

const esc = (s) =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
const json = (o) => JSON.stringify(o).replace(/</g, "\\u003c");

function headFor(page, noindex = false) {
  const url = SITE + page.path;
  const tags = [
    `<title>${esc(page.title)}</title>`,
    `<meta name="description" content="${esc(page.description)}" />`,
  ];
  if (noindex) {
    tags.push(`<meta name="robots" content="noindex" />`);
  } else {
    tags.push(
      `<link rel="canonical" href="${url}" />`,
      `<meta property="og:type" content="website" />`,
      `<meta property="og:title" content="${esc(page.title)}" />`,
      `<meta property="og:description" content="${esc(page.description)}" />`,
      `<meta property="og:url" content="${url}" />`,
    );
  }
  (page.schema || []).forEach((s) =>
    tags.push(
      `<script type="application/ld+json" data-seo="1">${json(s)}</script>`,
    ),
  );
  return tags.join("\n    ");
}

function build(page, appHtml, noindex = false) {
  return template
    .replace("<!--seo-head-->", headFor(page, noindex))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
}

const notFoundHtml = render("/__page-that-does-not-exist__");

for (const page of PAGES) {
  const html = render(page.path);
  if (html === notFoundHtml) {
    throw new Error(
      `Route "${page.path}" 404 page dikha raha hai. App.jsx ke route aur seoConfig.js ka path match karein.`,
    );
  }
  const file = page.path === "/" ? "index.html" : `${page.path.slice(1)}.html`;
  fs.writeFileSync(path.join(dist, file), build(page, html));
  console.log(
    `prerendered ${page.path.padEnd(26)} -> ${file} (${html.length} chars)`,
  );
}

fs.writeFileSync(
  path.join(dist, "404.html"),
  build({ path: "/404", ...NOT_FOUND }, notFoundHtml, true),
);
console.log("prerendered 404 page -> 404.html (noindex)");

const urls = PAGES.map((p) => `  <url><loc>${SITE}${p.path}</loc></url>`).join(
  "\n",
);
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
fs.writeFileSync(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`,
);
console.log("sitemap.xml aur robots.txt are ready");
