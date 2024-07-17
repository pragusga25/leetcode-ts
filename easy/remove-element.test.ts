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
  it('should remove the element from the array', () => {
    const arr1 = [3, 2, 2, 3];
    expect(removeElement(arr1, 3)).toBe(2);
    expect(arr1.slice(0, 2)).toEqual([2, 2]);

    const arr2 = [0, 1, 2, 2, 3, 0, 4, 2];
    expect(removeElement(arr2, 2)).toBe(5);
    expect(arr2.slice(0, 5)).toEqual([0, 1, 3, 0, 4]);
  });
});
