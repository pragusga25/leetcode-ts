// Problem: https://leetcode.com/problems/sqrtx/description/
// Doc: https://leetcode.com/problems/sqrtx/solutions/5491801/efficient-binary-search-for-square-root-calculation/
const mySqrt = (x: number): number => {
  let [l, r] = [0, 1];
  // We are not allowed to use Math.pow
  // So we initialize r using this loop :v
  for (let i = 1; i <= 31; i++) {
    r *= i;
  }
  r--;

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
  it('should return the square root of x', () => {
    expect(mySqrt(0)).toBe(0);
    expect(mySqrt(1)).toBe(1);
    expect(mySqrt(2)).toBe(1);
    expect(mySqrt(4)).toBe(2);
    expect(mySqrt(8)).toBe(2);
    expect(mySqrt(9)).toBe(3);
    expect(mySqrt(16)).toBe(4);
    expect(mySqrt(25)).toBe(5);
    expect(mySqrt(36)).toBe(6);
    expect(mySqrt(49)).toBe(7);
    expect(mySqrt(64)).toBe(8);
    expect(mySqrt(81)).toBe(9);
    expect(mySqrt(100)).toBe(10);
  });
});
