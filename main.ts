// Say What Actually Broke
// Writes one line of software error copy (<=200 chars) that tells the
// user the brutal truth about the failure and makes them laugh:
// the disk is full of screenshots of errors exactly like this one.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Save failed: your disk is full of screenshots of errors exactly like this one. Delete three, then try again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to /output/entry.txt`);
