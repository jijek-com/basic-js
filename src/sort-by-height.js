/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const copy = arr.slice();

  for (let i = 0; i < copy.length; i++) {
      if (copy[i] === -1) continue;

      let y = i;
      for (let j = i + 1; j < copy.length; j++) {
          if (copy[y] > copy[j] && copy[j] !== -1) {
              y = j;
          }
      }

      if (y !== i) {
          [copy[i], copy[y]] = [copy[y], copy[i]]
      }
  }

  return copy
}

module.exports = {
  sortByHeight
};
