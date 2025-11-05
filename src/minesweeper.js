const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const n = matrix.length;
  const m = matrix[0].length;

  const res = Array.from({ length: n }, () => Array(m).fill(0));

  for (let i = 0; i < n; i++) {
      for (let j = 0; j < m; j++) {
          if (matrix[i][j]) {

              for (let x = -1; x <= 1; x++) {
                  for (let y = -1; y <= 1; y++) {
                      if (x === 0 && y === 0) continue;
                      const newI = i + x;
                      const newJ = j + y;
                      if (newI >= 0 && newI < n && newJ >= 0 && newJ < m) {
                          res[newI][newJ]++;
                      }
                  }
              }
          }
      }
  }

  return res;
}

module.exports = {
  minesweeper
};
