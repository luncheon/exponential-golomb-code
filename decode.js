export const decodeExponentialGolomb = (bitSequence, k = 0, zigzag) => {
  const bitIterator = Iterator.from(bitSequence);
  const next = () => {
    const it = bitIterator.next();
    if (it.done) throw RangeError("decodeExponentialGolomb: Invalid code.");
    return it.value;
  };
  let _1 = 1;
  let mod = 0;
  let zeros = 0;
  while (!next()) zeros++;
  if (k + zeros >= 31) {
    k = BigInt(k);
    zeros = BigInt(zeros);
    _1 = 1n;
    mod = 0n;
  }
  for (let i = k + zeros; i--; ) next() && (mod |= _1 << i);
  const value = (((_1 << zeros) - _1) << k) + mod;
  return Number(zigzag ? (value >> _1) ^ -(value & _1) : value);
};
