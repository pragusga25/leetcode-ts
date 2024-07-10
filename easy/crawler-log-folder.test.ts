// Problem: https://leetcode.com/problems/crawler-log-folder/
// Doc: https://leetcode.com/problems/crawler-log-folder/solutions/5450426/efficient-folder-navigation-with-minimum-operations/
const minOperations = (logs: string[]): number => {
  let counter = 0;
  logs.forEach((log) => {
    if (!['../', './'].includes(log)) {
      counter++;
    } else if (log === '../') {
      counter = counter === 0 ? 0 : counter - 1;
    }
  });

  return counter;
};

describe('Crawler Log Folder', () => {
  test('Positive tests', () => {
    expect(minOperations(['d1/', 'd2/', './', 'd3/', '../', 'd31/'])).toBe(3);
    expect(minOperations(['d1/', '../', '../', '../'])).toBe(0);
    expect(minOperations(['../'])).toBe(0);
  });
});
