// Problem: https://leetcode.com/problems/find-the-distance-value-between-two-arrays/
// Doc: https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/5503470/calculating-the-distance-value-between-two-arrays/
const isValid = (val: number, arr2: number[], d: number) => {
  let [l, r] = [0, arr2.length - 1];

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    const mv = arr2[m];

    if (Math.abs(val - mv) <= d) return false;
    if (mv <= val) l = m + 1;
    else r = m - 1;
  }

  return true;
};
const findTheDistanceValue = (
  arr1: number[],
  arr2: number[],
  d: number
): number => {
  arr2.sort((a, b) => a - b);

  let ans = 0;
  arr1.forEach((n) => {
    if (isValid(n, arr2, d)) ans++;
  });

  return ans;
};

describe('Find the Distance Value Between Two Arrays', () => {
  it('#1', () => {
    expect(findTheDistanceValue([4, 5, 8], [10, 9, 1, 8], 2)).toBe(2);
  });

  it('#2', () => {
    expect(findTheDistanceValue([1, 4, 2, 3], [-4, -3, 6, 10, 20, 30], 3)).toBe(
      2
    );
  });

  it('#3', () => {
    expect(findTheDistanceValue([2, 1, 100, 3], [-5, -2, 10, -3, 7], 6)).toBe(
      1
    );
  });
});
