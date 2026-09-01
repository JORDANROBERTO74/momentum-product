import fs from "fs/promises";
import path from "path";
import sharp from "sharp";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const SOURCE = path.join(ROOT, "reference", "linear-full.png");
const OUT = path.join(ROOT, "public", "linear", "crops");

const crops = {
  "feature-intro-1.png": { left: 90, top: 1480, width: 400, height: 320 },
  "feature-intro-2.png": { left: 520, top: 1480, width: 400, height: 320 },
  "feature-intro-3.png": { left: 950, top: 1480, width: 400, height: 320 },
  "intake.png": { left: 720, top: 2180, width: 680, height: 520 },
  "planning.png": { left: 40, top: 3380, width: 680, height: 520 },
  "ai-1.png": { left: 46, top: 4580, width: 420, height: 560 },
  "ai-2.png": { left: 510, top: 4580, width: 420, height: 560 },
  "ai-3.png": { left: 974, top: 4580, width: 420, height: 560 },
  "build.png": { left: 46, top: 5980, width: 1348, height: 620 },
  "changelog-1.png": { left: 46, top: 7080, width: 310, height: 200 },
  "changelog-2.png": { left: 382, top: 7080, width: 310, height: 200 },
  "changelog-3.png": { left: 718, top: 7080, width: 310, height: 200 },
  "changelog-4.png": { left: 1054, top: 7080, width: 310, height: 200 },
};

async function main() {
  await fs.mkdir(OUT, { recursive: true });

  for (const [filename, region] of Object.entries(crops)) {
    const dest = path.join(OUT, filename);
    await sharp(SOURCE).extract(region).png().toFile(dest);
    console.log(`Wrote ${filename}`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
