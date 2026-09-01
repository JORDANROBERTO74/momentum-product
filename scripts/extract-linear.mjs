import { chromium } from "playwright";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const OUT = path.join(ROOT, "public", "linear");
const REF = path.join(ROOT, "reference");
const SECTIONS_REF = path.join(REF, "sections");

const SECTION_SELECTORS = [
  { name: "hero", selector: "main > section:first-of-type" },
  { name: "logos", selector: "main > section:nth-of-type(2)" },
  { name: "feature-intro", selector: "main > section:nth-of-type(3)" },
  { name: "intake", selector: "main > section:nth-of-type(4)" },
  { name: "planning", selector: "main > section:nth-of-type(5)" },
  { name: "ai", selector: "main > section:nth-of-type(6)" },
  { name: "build", selector: "main > section:nth-of-type(7)" },
  { name: "changelog", selector: "main > section:nth-of-type(8)" },
  { name: "cta", selector: "main > section:nth-of-type(9)" },
];

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function downloadAsset(page, url, dest) {
  try {
    const response = await page.request.get(url);
    if (!response.ok()) return false;
    const buffer = await response.body();
    await fs.writeFile(dest, buffer);
    return true;
  } catch {
    return false;
  }
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 40) || "logo";
}

async function main() {
  await ensureDir(OUT);
  await ensureDir(REF);
  await ensureDir(SECTIONS_REF);
  await ensureDir(path.join(OUT, "logos"));

  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto("https://linear.app/", { waitUntil: "networkidle", timeout: 120000 });
  await page.waitForTimeout(3000);

  await page.screenshot({ path: path.join(REF, "linear-full.png"), fullPage: true });
  await page.screenshot({
    path: path.join(REF, "linear-hero.png"),
    clip: { x: 0, y: 0, width: 1440, height: 900 },
  });

  const styles = await page.evaluate(() => {
    const root = getComputedStyle(document.documentElement);
    return {
      bg: root.backgroundColor,
      color: root.color,
      fontFamily: root.fontFamily,
    };
  });

  const layoutMetrics = await page.evaluate(() => {
    const container = document.querySelector("main");
    const h1 = document.querySelector("h1");
    const h2 = document.querySelector("h2");
    const measure = (el) => {
      if (!el) return null;
      const s = getComputedStyle(el);
      return {
        fontSize: s.fontSize,
        lineHeight: s.lineHeight,
        letterSpacing: s.letterSpacing,
        paddingTop: s.paddingTop,
        paddingBottom: s.paddingBottom,
        maxWidth: s.maxWidth,
      };
    };
    return {
      main: measure(container),
      h1: measure(h1),
      h2: measure(h2),
    };
  });

  const images = await page.evaluate(() =>
    Array.from(document.querySelectorAll("img"))
      .map((img) => ({
        src: img.currentSrc || img.src,
        alt: img.alt || "",
        width: img.naturalWidth,
        height: img.naturalHeight,
      }))
      .filter((img) => img.src && !img.src.startsWith("data:"))
  );

  const svgs = await page.evaluate(() =>
    Array.from(document.querySelectorAll("svg"))
      .slice(0, 20)
      .map((svg, i) => ({
        index: i,
        html: svg.outerHTML.slice(0, 500),
      }))
  );

  const textBlocks = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll("h1,h2,h3")).map((el) => ({
      tag: el.tagName,
      text: el.textContent?.trim() ?? "",
    }));
    return headings.slice(0, 40);
  });

  let downloaded = 0;
  const logoIndex = new Set();
  for (let i = 0; i < images.length; i++) {
    const img = images[i];
    const ext = path.extname(new URL(img.src).pathname) || ".png";
    const safeExt = [".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif"].includes(ext.toLowerCase())
      ? ext
      : ".png";
    const filename = `asset-${String(i).padStart(3, "0")}${safeExt}`;
    const ok = await downloadAsset(page, img.src, path.join(OUT, filename));
    if (ok) downloaded++;

    if (img.width === 56 && img.height === 56 && !logoIndex.has(img.src)) {
      logoIndex.add(img.src);
      const logoName = `${slugify(img.alt || `logo-${i}`)}${safeExt}`;
      await downloadAsset(page, img.src, path.join(OUT, "logos", logoName));
    }
  }

  for (const section of SECTION_SELECTORS) {
    const el = await page.$(section.selector);
    if (!el) continue;
    await el.screenshot({ path: path.join(SECTIONS_REF, `${section.name}.png`) });
  }

  await fs.writeFile(
    path.join(REF, "extraction.json"),
    JSON.stringify({ styles, layoutMetrics, images, svgs, textBlocks, downloaded }, null, 2)
  );

  await browser.close();
  console.log(`Extracted ${downloaded} assets to public/linear/`);
  console.log(`Section screenshots saved to reference/sections/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
