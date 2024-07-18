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
  it('#1 should return 2', () => {
    const logs = ['d1/', 'd2/', '../', 'd21/', './'];
    expect(minOperations(logs)).toBe(2);
  });

  it('#2 should return 3', () => {
    const logs = ['d1/', 'd2/', './', 'd3/', '../', 'd31/'];
    expect(minOperations(logs)).toBe(3);
  });

  it('#3 should return 0', () => {
    const logs = ['d1/', '../', '../', '../'];
    expect(minOperations(logs)).toBe(0);
  });

  it('#4 should return 0', () => {
    const logs = ['./', './', './'];
    expect(minOperations(logs)).toBe(0);
  });

  it('#5 should return 1', () => {
    const logs = ['d1/', './', './', './'];
    expect(minOperations(logs)).toBe(1);
  });
});
