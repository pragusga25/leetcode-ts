// Problem: https://leetcode.com/problems/sqrtx/description/
// Doc: https://leetcode.com/problems/sqrtx/solutions/5491842/efficient-binary-search-for-calculating-square-root/
const mySqrt = (x: number): number => {
  let [l, r] = [0, x];

  let ans = 0;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (m * m === x) return m;

    if (m * m > x) {
      r = m - 1;
      continue;
    }

    ans = m;
    l = m + 1;
  }

  return ans;
};

describe('Sqrt(x)', () => {
  it('#1 should return 2', () => {
    const x = 4;
    expect(mySqrt(x)).toBe(2);
  });

  it('#2 should return 2', () => {
    const x = 8;
    expect(mySqrt(x)).toBe(2);
  });

  it('#3 should return 1', () => {
    const x = 1;
    expect(mySqrt(x)).toBe(1);
  });

  it('#4 should return 46340', () => {
    const x = 2147395600;
    expect(mySqrt(x)).toBe(46340);
  });

  it('#5 should return 0', () => {
    const x = 0;
    expect(mySqrt(x)).toBe(0);
  });
});
