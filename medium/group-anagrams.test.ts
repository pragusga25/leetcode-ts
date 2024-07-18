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
  it('#1 should return [["bat"],["nat","tan"],["ate","eat","tea"]]', () => {
    const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const result = groupAnagrams(strs);
    expect(depthSort(result)).toEqual(
      depthSort([['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']])
    );
  });

  it('#2 should return [[""]]', () => {
    const strs = [''];
    const result = groupAnagrams(strs);
    expect(depthSort(result)).toEqual([['']]);
  });

  it('#3 should return [["a"]]', () => {
    const strs = ['a'];
    const result = groupAnagrams(strs);
    expect(depthSort(result)).toEqual([['a']]);
  });

  it('#4 should return [["a","a","a","a","a","a","a","a","a","a"]]', () => {
    const strs = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
    const result = groupAnagrams(strs);
    expect(depthSort(result)).toEqual([
      ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'],
    ]);
  });
});
