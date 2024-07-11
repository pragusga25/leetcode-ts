// Problem: https://leetcode.com/problems/group-anagrams/
// Doc: https://leetcode.com/problems/group-anagrams/solutions/5448588/efficient-grouping-of-anagrams-using-hash-map/
const groupAnagrams = (strs: string[]): string[][] => {
  const groupMap: Record<string, string[]> = {};
  strs.forEach((str) => {
    const strSorted = str.split('').sort().join('');

    const groupMembers = groupMap[strSorted];

    if (groupMembers) groupMembers.push(str);
    else groupMap[strSorted] = [str];
  });

  const result: string[][] = [];

  for (let group in groupMap) {
    result.push(groupMap[group]);
  }

  return result;
};

const depthSort = (result: string[][]) => {
  // Sort each subarray
  const sortedSubArrays = result.map((subArray) => subArray.slice().sort());

  // Sort the outer array based on the sorted subarrays
  const sortedArray = sortedSubArrays.slice().sort((a, b) => {
    for (let i = 0; i < Math.min(a.length, b.length); i++) {
      if (a[i] < b[i]) return -1;
      if (a[i] > b[i]) return 1;
    }
    return a.length - b.length;
  });

  return sortedArray;
};

describe('Group Anagrams', () => {
  it('should group anagrams', () => {
    expect(
      depthSort(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))
    ).toEqual(depthSort([['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]));

    expect(depthSort(groupAnagrams(['']))).toEqual(depthSort([['']]));
    expect(depthSort(groupAnagrams(['a']))).toEqual(depthSort([['a']]));
  });
});
