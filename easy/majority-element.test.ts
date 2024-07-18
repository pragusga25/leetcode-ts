// Problem: https://leetcode.com/problems/majority-element/
// Doc: https://leetcode.com/problems/majority-element/solutions/5460848/efficient-solution-for-finding-the-majority-element/
const majorityElement = (nums: number[]): number => {
  const n = nums.length;
  let counter = 0;
  let result = 0;

  for (let i = 0; i < n; i++) {
    const num = nums[i];

    if (counter === 0) result = num;

    if (result === num) counter++;
    else counter--;
  }

  return result;
};

describe('Majority Element', () => {
  it('#1 should return 3', () => {
    const nums = [3, 2, 3];
    expect(majorityElement(nums)).toBe(3);
  });

  it('#2 should return 2', () => {
    const nums = [2, 2, 1, 1, 1, 2, 2];
    expect(majorityElement(nums)).toBe(2);
  });

  it('#3 should return 3', () => {
    const nums = [3, 3, 4];
    expect(majorityElement(nums)).toBe(3);
  });

  it('#4 should return 3', () => {
    const nums = [3, 3, 3, 3, 3, 3, 3];
    expect(majorityElement(nums)).toBe(3);
  });

  it('#5 should return 1', () => {
    const nums = [1];
    expect(majorityElement(nums)).toBe(1);
  });
});
