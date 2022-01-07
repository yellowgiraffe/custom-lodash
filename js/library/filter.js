/* eslint-disable import/extensions */

import identity from './identity.js';

function filter(array, predicate = identity) {
  if (!Array.isArray(array)) {
    throw new Error('Enter an array as the first parameter');
  }

  if (typeof predicate !== 'function') {
    throw new Error('Enter a function as the second parameter');
  }

  const result = [];
  let count = 0;

  for (let i = 0; i < array.length; i += 1) {
    if (predicate(array[i], i, array)) {
      result[count] = array[i];
      count += 1;
    }
  }

  return result;
}

export default filter;
