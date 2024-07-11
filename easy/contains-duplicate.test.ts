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
  it('should return true if the array contains duplicates', () => {
    expect(containsDuplicate([1, 2, 3, 4, 1])).toBe(true);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  it('should return false if the array does not contain duplicates', () => {
    expect(containsDuplicate([])).toBe(false);
    expect(containsDuplicate([0])).toBe(false);
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });
});
