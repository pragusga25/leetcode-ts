// Problem: https://leetcode.com/problems/concatenation-of-array/
// Doc: https://leetcode.com/problems/concatenation-of-array/solutions/5472607/double-your-array-fun-with-concatenation/
const getConcatenation = (nums: number[]): number[] => [...nums, ...nums];

describe('Concatenation of Array', () => {
  it('should return the concatenated array', () => {
    expect(getConcatenation([1])).toEqual([1, 1]);
    expect(getConcatenation([1, 1])).toEqual([1, 1, 1, 1]);
    expect(getConcatenation([1, 2, 1])).toEqual([1, 2, 1, 1, 2, 1]);
    expect(getConcatenation([1, 3, 2, 1])).toEqual([1, 3, 2, 1, 1, 3, 2, 1]);
  });
});
