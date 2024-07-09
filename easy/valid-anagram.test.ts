// https://leetcode.com/problems/valid-anagram/
const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const charCounter = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    const counter = charCounter.get(char);
    if (!counter) {
      charCounter.set(char, 1);
      continue;
    }

    charCounter.set(char, counter + 1);
  }

  for (let i = 0; i < t.length; i++) {
    const char = t[i];

    const counter = charCounter.get(char);
    if (!counter) return false;

    if (counter === 1) charCounter.delete(char);
    else charCounter.set(char, counter - 1);
  }

  return charCounter.size === 0;
};

describe('isAnagram', () => {
  test('Positive tests', () => {
    expect(isAnagram('anagram', 'nagrama')).toBe(true);
    expect(isAnagram('', '')).toBe(true);
    expect(isAnagram('a', 'a')).toBe(true);
    expect(isAnagram('kasur', 'rusak')).toBe(true);

    expect(isAnagram('anagram', 'nagram')).toBe(false);
    expect(isAnagram('', 'a')).toBe(false);
    expect(isAnagram('a', '')).toBe(false);
    expect(isAnagram('kasur', 'sura')).toBe(false);
  });
});
