/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */

function take(array, n = 1) {
  if (!Array.isArray(array)) {
    throw new Error('Enter an array as the first parameter');
  }

  if (typeof n !== 'number') {
    throw new Error('Enter a number as the second parameter');
  }

  const length = array.length;
  const result = [];

  if (n === 0) {
    return result;
  }

  if (n > length) {
    return array;
  }

  for (let i = n - 1; i >= 0; i -= 1) {
    result[i] = array[n - 1];
    n -= 1;
  }

  return result;
}

export default take;
