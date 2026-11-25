// One line about office life, under 200 characters, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(
  join(outputDir, "entry.txt"),
  "Boss: \u201cWhy are you late?\u201d Me: \u201cTraffic.\u201d Boss: \u201cYou work from home.\u201d Me: \u201cExactly.\u201d\n",
  { mode: 0o644 },
);
