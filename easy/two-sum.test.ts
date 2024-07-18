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

describe('Two Sum', () => {
  it('#1 should return [0, 1]', () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it('#2 should return [1, 2]', () => {
    const nums = [3, 2, 4];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([1, 2]);
  });

  it('#3 should return [0, 1]', () => {
    const nums = [3, 3];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([0, 1]);
  });

  it('#4 should return [0, 1]', () => {
    const nums = [3, 2, 3];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([0, 2]);
  });
});
