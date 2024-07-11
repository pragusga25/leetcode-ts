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
  it('should return the majority element', () => {
    expect(majorityElement([3, 2, 3])).toBe(3);
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toBe(2);
  });
});
