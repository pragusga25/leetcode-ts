// Problem: https://leetcode.com/problems/happy-number/
// Doc: https://leetcode.com/problems/happy-number/solutions/5471203/determining-happy-numbers-efficiently/
const isHappy = (n: number): boolean => {
  // I assume that we cannot use string conversion to make it challenging
  const visited: Record<number, boolean> = {};
  while (true) {
    if (n === 1) return true;
    if (n in visited) return false;
    visited[n] = true;

    let sum = 0;
    let tmp = n;
    while (tmp > 0) {
      const remainder = tmp % 10;
      tmp = Math.floor(tmp / 10);
      sum += Math.pow(remainder, 2);
    }
    n = sum;
  }
};

describe('Happy Number', () => {
  it('#1 should return true', () => {
    const n = 19;
    expect(isHappy(n)).toBe(true);
  });

  it('#2 should return false', () => {
    const n = 2;
    expect(isHappy(n)).toBe(false);
  });

  it('#3 should return false', () => {
    const n = 3;
    expect(isHappy(n)).toBe(false);
  });

  it('#4 should return true', () => {
    const n = 7;
    expect(isHappy(n)).toBe(true);
  });

  it('#5 should return true', () => {
    const n = 1111111;
    expect(isHappy(n)).toBe(true);
  });
});
