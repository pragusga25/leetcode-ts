// Problem: https://leetcode.com/problems/concatenation-of-array/
// Doc: https://leetcode.com/problems/concatenation-of-array/solutions/5472607/double-your-array-fun-with-concatenation/
const getConcatenation = (nums: number[]): number[] => [...nums, ...nums];

describe('Concatenation of Array', () => {
  it('#1 should return [1, 2, 1, 1, 2, 1]', () => {
    const nums = [1, 2, 1];
    expect(getConcatenation(nums)).toStrictEqual([1, 2, 1, 1, 2, 1]);
  });

  it('#2 should return [1, 3, 2, 1, 1, 3, 2, 1]', () => {
    const nums = [1, 3, 2, 1];
    expect(getConcatenation(nums)).toStrictEqual([1, 3, 2, 1, 1, 3, 2, 1]);
  });

  it('#3 should return [1, 2, 3, 1, 2, 3]', () => {
    const nums = [1, 2, 3];
    expect(getConcatenation(nums)).toStrictEqual([1, 2, 3, 1, 2, 3]);
  });
});
