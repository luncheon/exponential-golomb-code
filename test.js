import assert from "node:assert/strict";
import { it } from "node:test";
import { decodeExponentialGolomb, encodeExponentialGolomb } from "./index.js";

// https://en.wikipedia.org/wiki/Exponential-Golomb_coding
it("encode(k=0)", () => {
  assert.deepEqual(encodeExponentialGolomb(0), [1]);
  assert.deepEqual(encodeExponentialGolomb(1), [0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(2), [0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(3), [0, 0, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(4), [0, 0, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(5), [0, 0, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(6), [0, 0, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(7), [0, 0, 0, 1, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(8), [0, 0, 0, 1, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(9), [0, 0, 0, 1, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(10), [0, 0, 0, 1, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(11), [0, 0, 0, 1, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(12), [0, 0, 0, 1, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(13), [0, 0, 0, 1, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(14), [0, 0, 0, 1, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(15), [0, 0, 0, 0, 1, 0, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(16), [0, 0, 0, 0, 1, 0, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(17), [0, 0, 0, 0, 1, 0, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(18), [0, 0, 0, 0, 1, 0, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(19), [0, 0, 0, 0, 1, 0, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(20), [0, 0, 0, 0, 1, 0, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(21), [0, 0, 0, 0, 1, 0, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(22), [0, 0, 0, 0, 1, 0, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(23), [0, 0, 0, 0, 1, 1, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(24), [0, 0, 0, 0, 1, 1, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(25), [0, 0, 0, 0, 1, 1, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(26), [0, 0, 0, 0, 1, 1, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(27), [0, 0, 0, 0, 1, 1, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(28), [0, 0, 0, 0, 1, 1, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(29), [0, 0, 0, 0, 1, 1, 1, 1, 0]);
});

it("encode(k=1)", () => {
  assert.deepEqual(encodeExponentialGolomb(0, 1), [1, 0]);
  assert.deepEqual(encodeExponentialGolomb(1, 1), [1, 1]);
  assert.deepEqual(encodeExponentialGolomb(2, 1), [0, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(3, 1), [0, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(4, 1), [0, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(5, 1), [0, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(6, 1), [0, 0, 1, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(7, 1), [0, 0, 1, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(8, 1), [0, 0, 1, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(9, 1), [0, 0, 1, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(10, 1), [0, 0, 1, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(11, 1), [0, 0, 1, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(12, 1), [0, 0, 1, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(13, 1), [0, 0, 1, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(14, 1), [0, 0, 0, 1, 0, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(15, 1), [0, 0, 0, 1, 0, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(16, 1), [0, 0, 0, 1, 0, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(17, 1), [0, 0, 0, 1, 0, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(18, 1), [0, 0, 0, 1, 0, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(19, 1), [0, 0, 0, 1, 0, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(20, 1), [0, 0, 0, 1, 0, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(21, 1), [0, 0, 0, 1, 0, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(22, 1), [0, 0, 0, 1, 1, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(23, 1), [0, 0, 0, 1, 1, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(24, 1), [0, 0, 0, 1, 1, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(25, 1), [0, 0, 0, 1, 1, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(26, 1), [0, 0, 0, 1, 1, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(27, 1), [0, 0, 0, 1, 1, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(28, 1), [0, 0, 0, 1, 1, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(29, 1), [0, 0, 0, 1, 1, 1, 1, 1]);
});

it("encode(k=2)", () => {
  assert.deepEqual(encodeExponentialGolomb(0, 2), [1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(1, 2), [1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(2, 2), [1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(3, 2), [1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(4, 2), [0, 1, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(5, 2), [0, 1, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(6, 2), [0, 1, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(7, 2), [0, 1, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(8, 2), [0, 1, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(9, 2), [0, 1, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(10, 2), [0, 1, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(11, 2), [0, 1, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(12, 2), [0, 0, 1, 0, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(13, 2), [0, 0, 1, 0, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(14, 2), [0, 0, 1, 0, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(15, 2), [0, 0, 1, 0, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(16, 2), [0, 0, 1, 0, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(17, 2), [0, 0, 1, 0, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(18, 2), [0, 0, 1, 0, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(19, 2), [0, 0, 1, 0, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(20, 2), [0, 0, 1, 1, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(21, 2), [0, 0, 1, 1, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(22, 2), [0, 0, 1, 1, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(23, 2), [0, 0, 1, 1, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(24, 2), [0, 0, 1, 1, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(25, 2), [0, 0, 1, 1, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(26, 2), [0, 0, 1, 1, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(27, 2), [0, 0, 1, 1, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(28, 2), [0, 0, 0, 1, 0, 0, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(29, 2), [0, 0, 0, 1, 0, 0, 0, 0, 1]);
});

it("encode(k=3)", () => {
  assert.deepEqual(encodeExponentialGolomb(0, 3), [1, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(1, 3), [1, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(2, 3), [1, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(3, 3), [1, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(4, 3), [1, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(5, 3), [1, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(6, 3), [1, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(7, 3), [1, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(8, 3), [0, 1, 0, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(9, 3), [0, 1, 0, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(10, 3), [0, 1, 0, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(11, 3), [0, 1, 0, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(12, 3), [0, 1, 0, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(13, 3), [0, 1, 0, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(14, 3), [0, 1, 0, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(15, 3), [0, 1, 0, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(16, 3), [0, 1, 1, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(17, 3), [0, 1, 1, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(18, 3), [0, 1, 1, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(19, 3), [0, 1, 1, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(20, 3), [0, 1, 1, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(21, 3), [0, 1, 1, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(22, 3), [0, 1, 1, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(23, 3), [0, 1, 1, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(24, 3), [0, 0, 1, 0, 0, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(25, 3), [0, 0, 1, 0, 0, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(26, 3), [0, 0, 1, 0, 0, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(27, 3), [0, 0, 1, 0, 0, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(28, 3), [0, 0, 1, 0, 0, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(29, 3), [0, 0, 1, 0, 0, 1, 0, 1]);
});

it("encode(k=0, zigzag=true)", () => {
  assert.deepEqual(encodeExponentialGolomb(0, 0, true), [1]);
  assert.deepEqual(encodeExponentialGolomb(-1, 0, true), [0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(1, 0, true), [0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(-2, 0, true), [0, 0, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(2, 0, true), [0, 0, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(-3, 0, true), [0, 0, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(3, 0, true), [0, 0, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(-4, 0, true), [0, 0, 0, 1, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(4, 0, true), [0, 0, 0, 1, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(-5, 0, true), [0, 0, 0, 1, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(5, 0, true), [0, 0, 0, 1, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(-6, 0, true), [0, 0, 0, 1, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(6, 0, true), [0, 0, 0, 1, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(-7, 0, true), [0, 0, 0, 1, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(7, 0, true), [0, 0, 0, 1, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(-8, 0, true), [0, 0, 0, 0, 1, 0, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(8, 0, true), [0, 0, 0, 0, 1, 0, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(-9, 0, true), [0, 0, 0, 0, 1, 0, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(9, 0, true), [0, 0, 0, 0, 1, 0, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(-10, 0, true), [0, 0, 0, 0, 1, 0, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(10, 0, true), [0, 0, 0, 0, 1, 0, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(-11, 0, true), [0, 0, 0, 0, 1, 0, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(11, 0, true), [0, 0, 0, 0, 1, 0, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(-12, 0, true), [0, 0, 0, 0, 1, 1, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(12, 0, true), [0, 0, 0, 0, 1, 1, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(-13, 0, true), [0, 0, 0, 0, 1, 1, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(13, 0, true), [0, 0, 0, 0, 1, 1, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(-14, 0, true), [0, 0, 0, 0, 1, 1, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(14, 0, true), [0, 0, 0, 0, 1, 1, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(-15, 0, true), [0, 0, 0, 0, 1, 1, 1, 1, 0]);
});

it("encode(k=1, zigzag=true)", () => {
  assert.deepEqual(encodeExponentialGolomb(0, 1, true), [1, 0]);
  assert.deepEqual(encodeExponentialGolomb(-1, 1, true), [1, 1]);
  assert.deepEqual(encodeExponentialGolomb(1, 1, true), [0, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(-2, 1, true), [0, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(2, 1, true), [0, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(-3, 1, true), [0, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(3, 1, true), [0, 0, 1, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(-4, 1, true), [0, 0, 1, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(4, 1, true), [0, 0, 1, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(-5, 1, true), [0, 0, 1, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(5, 1, true), [0, 0, 1, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(-6, 1, true), [0, 0, 1, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(6, 1, true), [0, 0, 1, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(-7, 1, true), [0, 0, 1, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(7, 1, true), [0, 0, 0, 1, 0, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(-8, 1, true), [0, 0, 0, 1, 0, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(8, 1, true), [0, 0, 0, 1, 0, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(-9, 1, true), [0, 0, 0, 1, 0, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(9, 1, true), [0, 0, 0, 1, 0, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(-10, 1, true), [0, 0, 0, 1, 0, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(10, 1, true), [0, 0, 0, 1, 0, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(-11, 1, true), [0, 0, 0, 1, 0, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(11, 1, true), [0, 0, 0, 1, 1, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(-12, 1, true), [0, 0, 0, 1, 1, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(12, 1, true), [0, 0, 0, 1, 1, 0, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(-13, 1, true), [0, 0, 0, 1, 1, 0, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(13, 1, true), [0, 0, 0, 1, 1, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(-14, 1, true), [0, 0, 0, 1, 1, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(14, 1, true), [0, 0, 0, 1, 1, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(-15, 1, true), [0, 0, 0, 1, 1, 1, 1, 1]);
});

it("encode: valid range", () => {
  assert.throws(() => encodeExponentialGolomb(-1), RangeError);
  assert.doesNotThrow(() => encodeExponentialGolomb(-1, 0, true));
  assert.doesNotThrow(() => encodeExponentialGolomb(Number.MAX_SAFE_INTEGER));
  assert.throws(() => encodeExponentialGolomb(Number.MAX_SAFE_INTEGER + 2), RangeError);
  assert.throws(() => encodeExponentialGolomb(Number.MAX_SAFE_INTEGER + 2, 0, true), RangeError);
});

it("decode", () => {
  for (let k = 0; k < 40; k++) {
    for (let n = 0; n < 100_000; n++) {
      assert.equal(decodeExponentialGolomb(encodeExponentialGolomb(n, k), k), n);
    }
  }
});

it("random", () => {
  for (let k = 0; k < 100; k++) {
    for (let i = 0; i < 100; i++) {
      const n = Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
      assert.equal(decodeExponentialGolomb(encodeExponentialGolomb(n, k), k), n);
      assert.equal(decodeExponentialGolomb(encodeExponentialGolomb(n, k, true), k, true), n);
      assert.equal(decodeExponentialGolomb(encodeExponentialGolomb(-n, k, true), k, true), -n);
    }
  }
});
