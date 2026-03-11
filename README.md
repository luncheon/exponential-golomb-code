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

## License

[WTFPL](http://www.wtfpl.net)

## See also

- [@luncheon/**golomb-code**](https://www.npmjs.com/package/@luncheon/golomb-code): A [Golomb coding](https://en.wikipedia.org/wiki/Golomb_coding) implementation.
- [@luncheon/**fibonacci-code**](https://www.npmjs.com/package/@luncheon/fibonacci-code): A [Fibonacci coding](https://en.wikipedia.org/wiki/Fibonacci_coding) implementation.
- [@luncheon/**varint**](https://www.npmjs.com/package/@luncheon/varint): A `BigInt`-native varint codec supporting arbitrary chunk sizes and zigzag encoding.
