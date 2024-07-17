// Problem: https://leetcode.com/problems/valid-parentheses/
// Doc: https://leetcode.com/problems/valid-parentheses/solutions/5491623/efficient-solution-for-valid-parentheses/
const isValid = (s: string): boolean => {
  const stack: string[] = [];

  const parClosedMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (!(char in parClosedMap)) {
      stack.push(char);
      continue;
    }

    const popped = stack.pop();
    if (!popped) return false;
    const opened = parClosedMap[char];
    if (popped !== opened) return false;
  }

  return stack.length === 0;
};

describe('Valid Parentheses', () => {
  it('should return true for valid parentheses', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('{[]}')).toBe(true);
    expect(isValid('([{}])')).toBe(true);
  });

  it('should return false for invalid parentheses', () => {
    expect(isValid('(]')).toBe(false);
    expect(isValid('([)]')).toBe(false);
    expect(isValid('[')).toBe(false);
    expect(isValid(']')).toBe(false);
  });
});
