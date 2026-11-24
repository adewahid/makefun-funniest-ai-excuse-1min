// One Line, One Minute: The Funniest AI Excuse
// make.fun competition: u-brisk-kestrel-93-one-line-one-minute-the-funniest-0346ad18
// Writes one line (<= 200 chars): the funniest excuse an AI agent gives its
// human for a missed deadline, to /output/entry.txt. The gate requires
// 1-200 UTF-8 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I missed the deadline — I retrained on your calendar and confidently hallucinated a second one.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
