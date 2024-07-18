// Problem: https://leetcode.com/problems/number-of-good-pairs/
// Doc: https://leetcode.com/problems/number-of-good-pairs/solutions/5498229/count-good-pairs-efficiently/
const combineMemo: Record<string, number> = {};

const fact = (n: number, limit: number): number => {
  if (n <= 1 || n <= limit) return 1;
  return n * fact(n - 1, limit);
};

const comb = (n: number): number => {
  if (combineMemo[n]) return combineMemo[n];
  const res = fact(n, n - 2) / 2;
  combineMemo[n] = res;
  return res;
};

const numIdenticalPairs = (nums: number[]): number => {
  const numsCounter: Record<number, number> = {};
  nums.forEach((num) => {
    if (typeof numsCounter[num] !== 'number') {
      numsCounter[num] = 0;
    }
    numsCounter[num]++;
  });

  let ans = 0;
  Object.entries(numsCounter).forEach(([num, counter]) => {
    if (counter > 1) {
      ans += comb(counter);
    }
  });

  return ans;
};

describe('Number of Good Pairs', () => {
  it('should return 4', () => {
    const nums = [1, 2, 3, 1, 1, 3];
    expect(numIdenticalPairs(nums)).toBe(4);
  });

  it('should return 6', () => {
    const nums = [1, 1, 1, 1];
    expect(numIdenticalPairs(nums)).toBe(6);
  });

  it('should return 0', () => {
    const nums = [1, 2, 3];
    expect(numIdenticalPairs(nums)).toBe(0);
  });

  it('should return 5', () => {
    const nums = [1, 2, 3, 1, 1, 3, 2];
    expect(numIdenticalPairs(nums)).toBe(5);
  });
});
