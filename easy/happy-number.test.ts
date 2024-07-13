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
  it('should return true if the number is happy', () => {
    expect(isHappy(19)).toBeTruthy();
    expect(isHappy(1)).toBeTruthy();
    expect(isHappy(7)).toBeTruthy();
  });

  it('should return false if the number is not happy', () => {
    expect(isHappy(2)).toBeFalsy();
    expect(isHappy(3)).toBeFalsy();
    expect(isHappy(4)).toBeFalsy();
  });
});
