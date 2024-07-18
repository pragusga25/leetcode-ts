// Problem: https://leetcode.com/problems/pascals-triangle/
// Doc: https://leetcode.com/problems/pascals-triangle/solutions/5471283/generating-pascal-s-triangle-efficiently/
const generate = (numRows: number): number[][] => {
  const result = [[1]];
  if (numRows === 1) return result;

  for (let i = 1; i < numRows; i++) {
    const prev = result[i - 1];
    const row = [1];
    for (let j = 0; j < prev.length - 1; j++) {
      const l = prev[j];
      const r = prev[j + 1];
      row.push(l + r);
    }
    row.push(1);
    result.push(row);
  }

  return result;
};

describe("Pascal's Triangle", () => {
  it('#1 should return [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]', () => {
    const numRows = 5;
    expect(generate(numRows)).toStrictEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });

  it('#2 should return [[1],[1,1],[1,2,1]]', () => {
    const numRows = 3;
    expect(generate(numRows)).toStrictEqual([[1], [1, 1], [1, 2, 1]]);
  });

  it('#3 should return [[1],[1,1]]', () => {
    const numRows = 2;
    expect(generate(numRows)).toStrictEqual([[1], [1, 1]]);
  });
});
