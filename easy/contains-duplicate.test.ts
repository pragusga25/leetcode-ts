// Problem: https://leetcode.com/problems/contains-duplicate/
// Docs: https://leetcode.com/problems/contains-duplicate/solutions/5443488/solved-with-typescript/
const containsDuplicate = (nums: number[]): boolean => {
  const map: Record<number, unknown> = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num in map) return true;

    map[num] = 1;
  }

  return false;
};

describe('Contains Duplicate', () => {
  it('#1 should return true', () => {
    const nums = [1, 2, 3, 1];
    expect(containsDuplicate(nums)).toBe(true);
  });

  it('#2 should return false', () => {
    const nums = [1, 2, 3, 4];
    expect(containsDuplicate(nums)).toBe(false);
  });

  it('#3 should return true', () => {
    const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
    expect(containsDuplicate(nums)).toBe(true);
  });

  it('#4 should return false', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(containsDuplicate(nums)).toBe(false);
  });

  it('#5 should return true', () => {
    const nums = [1, 1];
    expect(containsDuplicate(nums)).toBe(true);
  });
});
