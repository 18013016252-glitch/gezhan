import { cpSync, mkdirSync, rmSync } from "node:fs";
import { join } from "node:path";

const outputDir = "dist";
const entries = [
  "index.html",
  "contact",
  "experience",
  "projects",
  "assets",
  "public",
];

rmSync(outputDir, { recursive: true, force: true });
mkdirSync(outputDir, { recursive: true });

for (const entry of entries) {
  cpSync(entry, join(outputDir, entry), {
    recursive: true,
    dereference: true,
    filter: (source) => {
      return !(
        source.endsWith(".DS_Store") ||
        source.endsWith("-original.mp4") ||
        source.endsWith(".pptx")
      );
    },
  });
}
