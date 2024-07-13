// Problem: https://leetcode.com/problems/top-k-frequent-elements/
// Doc: https://leetcode.com/problems/top-k-frequent-elements/solutions/5470964/efficient-top-k-frequent-elements-solution/
const topKFrequent = (nums: number[], k: number): number[] => {
  const countNumMap: Record<number, number> = {};

  nums.forEach((num) => {
    if (!(num in countNumMap)) countNumMap[num] = 0;
    countNumMap[num]++;
  });

  // initialize array to store the values based on its frequency
  const frequencyValues: number[][] = Array.from(
    { length: nums.length + 1 },
    () => []
  );

  Object.entries(countNumMap).forEach(([num, freq]) => {
    frequencyValues[freq].push(Number(num));
  });

  const topK: number[] = [];

  for (let i = frequencyValues.length - 1; i >= 0; i--) {
    const values = frequencyValues[i];
    while (values.length > 0 && topK.length < k) {
      topK.push(values.pop() as number);
    }

    if (topK.length === k) break;
  }

  return topK;
};

const sortNums = (nums: number[]): number[] => nums.sort((a, b) => a - b);

describe('Top K Frequent Elements', () => {
  it('should return top 1 frequent element', () => {
    expect(sortNums(topKFrequent([1, 1, 1, 2, 2, 3], 1))).toEqual([1]);
    expect(sortNums(topKFrequent([1], 1))).toEqual([1]);
  });

  it('should return top 2 frequent elements', () => {
    expect(sortNums(topKFrequent([1, 1, 1, 2, 2, 3], 2))).toEqual([1, 2]);
    expect(sortNums(topKFrequent([1], 1))).toEqual([1]);
  });

  it('should return top 3 frequent elements', () => {
    expect(sortNums(topKFrequent([1, 1, 1, 2, 2, 3], 3))).toEqual([1, 2, 3]);
    expect(sortNums(topKFrequent([1], 1))).toEqual([1]);
  });
});
