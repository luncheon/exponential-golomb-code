# @luncheon/exponential-golomb-code

An [exponential-Golomb coding](https://en.wikipedia.org/wiki/Exponential-Golomb_coding) implementation.

- Order-*k* Generalized
- Optional Zigzag Encoding
- Lightweight, Zero Dependencies

```ts
import assert from "node:assert/strict";
import { decodeExponentialGolomb, encodeExponentialGolomb } from "@luncheon/exponential-golomb-code";

{
  const k = 1;
  const zigzag = false;

  assert.deepEqual(encodeExponentialGolomb(0, k, zigzag), [1, 0]);
  assert.deepEqual(encodeExponentialGolomb(1, k, zigzag), [1, 1]);
  assert.deepEqual(encodeExponentialGolomb(2, k, zigzag), [0, 1, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(3, k, zigzag), [0, 1, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(4, k, zigzag), [0, 1, 1, 0]);
  assert.deepEqual(encodeExponentialGolomb(5, k, zigzag), [0, 1, 1, 1]);
  assert.deepEqual(encodeExponentialGolomb(6, k, zigzag), [0, 0, 1, 0, 0, 0]);
  assert.deepEqual(encodeExponentialGolomb(7, k, zigzag), [0, 0, 1, 0, 0, 1]);
  assert.deepEqual(encodeExponentialGolomb(8, k, zigzag), [0, 0, 1, 0, 1, 0]);
}

for (let k = 0; k < 100; k++) {
  for (let i = 0; i < 100; i++) {
    const n = Math.round(Math.random() * Number.MAX_SAFE_INTEGER);
    assert.equal(decodeExponentialGolomb(encodeExponentialGolomb(n, k), k), n);
    assert.equal(decodeExponentialGolomb(encodeExponentialGolomb(n, k, true), k, true), n);
    assert.equal(decodeExponentialGolomb(encodeExponentialGolomb(-n, k, true), k, true), -n);
  }
}
```

## CLI

```bash
npx @luncheon/exponential-golomb-code --k=2 --zigzag -- 3 -20--10 0x80
   3 01010
 -20 000101011
 -19 000101001
 -18 000100111
 -17 000100101
 -16 000100011
 -15 000100001
 -14 0011111
 -13 0011101
 -12 0011011
 -11 0011001
 -10 0010111
 128 000000100000100
```

## License

[WTFPL](http://www.wtfpl.net)

## See also

- [@luncheon/**golomb-code**](https://www.npmjs.com/package/@luncheon/golomb-code): A [Golomb coding](https://en.wikipedia.org/wiki/Golomb_coding) implementation.
- [@luncheon/**fibonacci-code**](https://www.npmjs.com/package/@luncheon/fibonacci-code): A [Fibonacci coding](https://en.wikipedia.org/wiki/Fibonacci_coding) implementation.
- [@luncheon/**varint**](https://www.npmjs.com/package/@luncheon/varint): A `BigInt`-native [varint](https://en.wikipedia.org/wiki/Variable-length_quantity) codec supporting arbitrary chunk sizes and zigzag encoding.
