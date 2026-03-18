#!/usr/bin/env node
import { parseArgs } from "node:util";
import { encodeExponentialGolomb } from "./encode.js";

const {
  values: { k, zigzag },
  positionals,
} = parseArgs({
  allowPositionals: true,
  options: {
    k: { type: "string" },
    zigzag: { type: "boolean" },
  },
});

if (positionals.length === 0) {
  console.log(`try $ npx @luncheon/exponential-golomb-code --k=2 --zigzag -- 3 -20--10 0x80`);
} else {
  const ranges = positionals.map((arg) => {
    const split = arg.match(/([+-]?(?:0[xb])?\d+)(?:-([+-]?(?:0[xb])?\d+))?/);
    const min = parseInt(split[1]);
    const max = split[2] ? parseInt(split[2]) : min;
    return [Math.min(min, max), Math.max(min, max)];
  });
  const maxLength = String(Math.max(...ranges.flat())).length;
  for (const [min, max] of ranges) {
    for (let n = min; n <= max; n++) {
      console.log(" ".repeat(maxLength - String(n).length), n, encodeExponentialGolomb(n, k, zigzag).join(""));
    }
  }
}
