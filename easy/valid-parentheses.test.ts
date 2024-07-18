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
  it('#1 should return true', () => {
    const s = '()';
    expect(isValid(s)).toBe(true);
  });

  it('#2 should return true', () => {
    const s = '()[]{}';
    expect(isValid(s)).toBe(true);
  });

  it('#3 should return false', () => {
    const s = '(]';
    expect(isValid(s)).toBe(false);
  });

  it('#4 should return false', () => {
    const s = '([)]';
    expect(isValid(s)).toBe(false);
  });

  it('#5 should return true', () => {
    const s = '{[]}';
    expect(isValid(s)).toBe(true);
  });

  it('#6 should return false', () => {
    const s = '[';
    expect(isValid(s)).toBe(false);
  });
});
