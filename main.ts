// One-Line Laugh Sprint — a single original funny line about everyday life.
// The line is a useless superpower: a power that is real, specific, and
// arrives exactly too late to be of any use. The twist lands on the last word.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My superpower is sensing the exact moment my toast burns — always three seconds after it already has.";

// The gate allows 1–200 characters; refuse to write anything longer.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line is ${LINE.length} characters; the gate allows 1–200.`);
}

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
