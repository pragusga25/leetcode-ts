// Problem: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
// Doc: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/solutions/5503382/efficient-count-of-smaller-numbers-than-current/
const smallerNumbersThanCurrent = (nums: number[]): number[] => {
  const counterMap: Record<number, number> = {};
  const sortedNums = [...nums].sort((a, b) => a - b);
  for (let i = 0; i < sortedNums.length; i++) {
    const num = sortedNums[i];
    if (!(num in counterMap)) counterMap[num] = i;
  }

  return nums.map((num) => counterMap[num]);
};

describe('How Many Numbers Are Smaller Than the Current Number', () => {
  it('#1 should return [4, 0, 1, 1, 3]', () => {
    const nums = [8, 1, 2, 2, 3];
    expect(smallerNumbersThanCurrent(nums)).toStrictEqual([4, 0, 1, 1, 3]);
  });

  it('#2 should return [2, 1, 0, 3]', () => {
    const nums = [6, 5, 4, 8];
    expect(smallerNumbersThanCurrent(nums)).toStrictEqual([2, 1, 0, 3]);
  });

  it('#3 should return [0, 0, 0, 0]', () => {
    const nums = [7, 7, 7, 7];
    expect(smallerNumbersThanCurrent(nums)).toStrictEqual([0, 0, 0, 0]);
  });

  it('#4 should return [0, 0, 0, 0, 0]', () => {
    const nums = [1, 1, 1, 1, 1];
    expect(smallerNumbersThanCurrent(nums)).toStrictEqual([0, 0, 0, 0, 0]);
  });
});
