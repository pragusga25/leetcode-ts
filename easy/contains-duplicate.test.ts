// https://leetcode.com/problems/contains-duplicate/
const containsDuplicate = (nums: number[]) => {
  const map: Record<number, unknown> = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num in map) return true;

    map[num] = 1;
  }

  return false;
};

describe('containsDuplicate', () => {
  test('Positve tests', () => {
    expect(containsDuplicate([1, 2, 3, 4, 1])).toBe(true);
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });

  test('Negative tests', () => {
    expect(containsDuplicate([])).toBe(false);
    expect(containsDuplicate([0])).toBe(false);
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });
});
