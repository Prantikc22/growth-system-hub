import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const ROUTES = [
  "/",
  "/work",
  "/work/country-bean-coffee",
  "/work/sohum-linen",
  "/work/flent",
  "/work/svaraa-jewels",
  "/work/fitpass",
  "/work/the-noodle-bar",
  "/work/deconstruct-skincare",
  "/work/competishun",
  "/work/inaara",
  "/services",
  "/about",
  "/contact",
  "/franchise",
  "/privacy",
  "/terms",
];

const { render } = await import("./dist/server/entry-server.js");

const templatePath = path.join(__dirname, "dist/public/index.html");
const template = fs.readFileSync(templatePath, "utf-8");

let ok = 0;
let fail = 0;

console.log("\nPrerendering routes...");

for (const url of ROUTES) {
  try {
    const { html, meta } = render(url);

    let page = template.replace("<!--ssr-outlet-->", html);

    page = page
      .replace(/<title>[^<]*<\/title>/, `<title>${meta.title}</title>`)
      .replace(
        /<meta name="description"[^>]*>/,
        `<meta name="description" content="${meta.description.replace(/"/g, "&quot;")}" />`
      )
      .replace(
        /<meta property="og:title"[^>]*>/,
        `<meta property="og:title" content="${meta.ogTitle.replace(/"/g, "&quot;")}" />`
      )
      .replace(
        /<meta property="og:description"[^>]*>/,
        `<meta property="og:description" content="${meta.ogDescription.replace(/"/g, "&quot;")}" />`
      )
      .replace(
        /<meta property="og:url"[^>]*>/,
        `<meta property="og:url" content="${meta.canonical}" />`
      );

    const canonicalTag = `<link rel="canonical" href="${meta.canonical}" />`;

    if (page.includes('<link rel="canonical"')) {
      page = page.replace(/<link rel="canonical"[^>]*>/, canonicalTag);
    } else {
      page = page.replace("</head>", `  ${canonicalTag}\n  </head>`);
    }

    const outPath =
      url === "/"
        ? path.join(__dirname, "dist/public/index.html")
        : path.join(__dirname, `dist/public${url}/index.html`);

    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, page, "utf-8");
    ok++;
    console.log(`  ✓ ${url}`);
  } catch (err) {
    fail++;
    console.error(`  ✗ ${url} — ${err.message}`);
  }
}

console.log(`\n${ok} prerendered, ${fail} failed.\n`);
if (fail > 0) process.exit(1);
