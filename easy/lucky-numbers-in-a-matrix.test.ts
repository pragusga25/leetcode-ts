const luckyNumbers = (matrix: number[][]): number[] => {
  const [rows, cols] = [matrix.length, matrix[0].length];
  const minRows: Record<number, [number, number]> = {};
  const maxCols: Record<number, [number, number]> = {};

  for (let row = 0; row < rows; row++) {
    let minRowsVal: [number, number] = [10e5 + 1, -1];
    for (let col = 0; col < cols; col++) {
      const val = matrix[row][col];

      if (val < minRowsVal[0]) {
        minRowsVal = [val, col];
      }

      if (!(col in maxCols)) {
        maxCols[col] = [val, row];
      }

      if (val > maxCols[col][0]) {
        maxCols[col] = [val, row];
      }
    }

    minRows[row] = minRowsVal;
  }

  const ans: number[] = [];

  Object.entries(minRows).forEach(([row, [val, col]]) => {
    const [_, rowVal] = maxCols[col];

    if (rowVal === Number(row)) ans.push(val);
  });

  return ans;
};

describe('Lucky Numbers in a Matrix', () => {
  it('#1 should return [15]', () => {
    expect(
      luckyNumbers([
        [3, 7, 8],
        [9, 11, 13],
        [15, 16, 17],
      ])
    ).toEqual([15]);
  });

  it('#2 should return [12]', () => {
    expect(
      luckyNumbers([
        [1, 10, 4, 2],
        [9, 3, 8, 7],
        [15, 16, 17, 12],
      ])
    ).toEqual([12]);
  });

  it('#3 should return [7]', () => {
    expect(
      luckyNumbers([
        [7, 8],
        [1, 2],
      ])
    ).toEqual([7]);
  });

  it('#4 should return [1]', () => {
    expect(
      luckyNumbers([
        [1, 2],
        [3, 4],
      ])
    ).toEqual([3]);
  });

  it('#5 should return [1]', () => {
    expect(luckyNumbers([[1, 2, 3]])).toEqual([1]);
  });
});
