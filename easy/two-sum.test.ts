// Problem: https://leetcode.com/problems/two-sum/
// Docs: https://leetcode.com/problems/two-sum/solutions/5447162/efficient-two-sum-solution-with-o-n-complexity/
export const twoSum = (nums: number[], target: number): number[] => {
  const remainderMap: Record<number, number> = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const remainder = target - num;

    if (num in remainderMap) {
      return [remainderMap[num], i];
    }

    remainderMap[remainder] = i;
  }

  return [-1, -1];
};

describe('twoSum', () => {
  test('Positive tests', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    expect(twoSum([2, 7, 11, 15], 17)).toEqual([0, 3]);
  });
});
