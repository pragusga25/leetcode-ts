// Problem: https://leetcode.com/problems/remove-element/description/
// Doc: https://leetcode.com/problems/remove-element/solutions/5491706/efficient-solution-for-removing-element/
const removeElement = (nums: number[], val: number): number => {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
};

describe('Remove Element', () => {
  it('#1 should return 2 and array should be [2, 2]', () => {
    const nums = [3, 2, 2, 3];
    const val = 3;
    const result = removeElement(nums, val);
    expect(result).toBe(2);
    expect(nums.slice(0, result)).toEqual([2, 2]);
  });

  it('#2 should return 5 and array should be [0, 1, 3, 0, 4]', () => {
    const nums = [0, 1, 2, 2, 3, 0, 4, 2];
    const val = 2;
    const result = removeElement(nums, val);
    expect(result).toBe(5);
    expect(nums.slice(0, result)).toEqual([0, 1, 3, 0, 4]);
  });

  it('#3 should return 0 and array should be []', () => {
    const nums = [];
    const val = 0;
    const result = removeElement(nums, val);
    expect(result).toBe(0);
    expect(nums.slice(0, result)).toEqual([]);
  });

  it('#4 should return 0 and array should be []', () => {
    const nums = [1];
    const val = 1;
    const result = removeElement(nums, val);
    expect(result).toBe(0);
    expect(nums.slice(0, result)).toEqual([]);
  });
});
