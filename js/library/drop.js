/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */

function drop(array, n = 1) {
  if (!Array.isArray(array)) {
    throw new Error('Enter an array as the first parameter');
  }

  const length = array.length;
  let result = [];
  const resultLength = length - n;

  if (n === 0) {
    result = array;
    return result;
  }

  for (let i = 0; i < resultLength; i += 1) {
    result[i] = array[n];
    n += 1;
  }
  return result;
}

export default drop;
