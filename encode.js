const encodeExponentialGolomb0 = (n, _1) => {
  const bits = [];
  for (n++; n; n >>= _1) bits.push(n & _1 ? 1 : 0);
  for (let zeros = bits.length; --zeros; ) bits.push(0);
  return bits.reverse();
};

export const encodeExponentialGolomb = (n, k = 0, zigzag) => {
  if (n < 0 && !zigzag) throw RangeError("encodeExponentialGolomb: supports only non-negative integers.");
  let _0 = 0;
  let _1 = 1;
  if (k > 30 || (n | 0) !== n) {
    _0 = 0n;
    _1 = 1n;
    n = BigInt(n);
    k = BigInt(k);
  }
  if (zigzag) n = (n << _1) ^ (n < _0 ? -_1 : _0);
  if (k > 0) {
    const bits = encodeExponentialGolomb0(n >> k, _1);
    for (let b = _1 << k, mod = n & (b - _1); (b >>= _1); ) bits.push(mod & b ? 1 : 0);
    return bits;
  }
  return encodeExponentialGolomb0(n, _1);
};
