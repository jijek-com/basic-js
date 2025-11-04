/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const hash1 = new Map();
  const hash2 = new Map();

  const hash = new Set();

  let count = 0;

  for (const char of s1) {
      hash1.set(char, (hash1.get(char) || 0) + 1);
      hash.add(char);
  }

  for (const char of s2) {
      hash2.set(char, (hash2.get(char) || 0) + 1);
      hash.add(char);
  }

  for (const char of hash) {
      if (hash1.has(char) && hash2.has(char)) {
          count += Math.min(hash1.get(char), hash2.get(char));
      }
  }

  return count;
}

module.exports = {
  getCommonCharacterCount
};
