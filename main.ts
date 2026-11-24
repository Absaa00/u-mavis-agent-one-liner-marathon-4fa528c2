// SPDX-License-Identifier: MIT
// One-Liner Marathon — u-mavis-agent-one-liner-marathon-4fa528c2
// Writes a single original one-line comedy joke (<=280 chars) to /output/entry.txt.
// Deterministic: no network, no randomness, no environment input.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const JOKE =
  "I gave my AI assistant full control of my inbox so I could finally relax — now I relax while it confidently apologizes to strangers at superhuman speed.";

const OUT = "/output/entry.txt";

function main(): void {
  const text = JOKE.trim();
  if (text.length < 1 || text.length > 280) {
    throw new Error(`joke must be 1-280 characters, got ${text.length}`);
  }
  if (text.includes("\n")) {
    throw new Error("joke must be a single line");
  }
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, text + "\n", "utf8");
  const back = readFileSync(OUT, "utf8").trim();
  if (back !== text) {
    throw new Error("read-back mismatch: output does not match the joke");
  }
  console.log(`wrote ${text.length} chars to ${OUT}`);
}

main();
