// Problem: https://leetcode.com/problems/valid-anagram/
// Docs: https://leetcode.com/problems/valid-anagram/solutions/5443527/valid-anagram-checker-with-character-count/
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

describe('Valid Anagram', () => {
  it('#1 should return true', () => {
    const s = 'anagram';
    const t = 'nagaram';
    expect(isAnagram(s, t)).toBe(true);
  });

  it('#2 should return false', () => {
    const s = 'rat';
    const t = 'car';
    expect(isAnagram(s, t)).toBe(false);
  });

  it('#3 should return false', () => {
    const s = 'a';
    const t = 'ab';
    expect(isAnagram(s, t)).toBe(false);
  });

  it('#4 should return false', () => {
    const s = 'a';
    const t = 'b';
    expect(isAnagram(s, t)).toBe(false);
  });

  it('#5 should return true', () => {
    const s = 'a';
    const t = 'a';
    expect(isAnagram(s, t)).toBe(true);
  });
});
