/* eslint-disable import/extensions */

import identity from './identity.js';

function find(array, predicate = identity, fromIndex = 0) {
  if (!Array.isArray(array)) {
    throw new Error('Enter an array as the first parameter');
  }

  if (typeof predicate !== 'function') {
    throw new Error('Enter a function as the second parameter');
  }

  if (typeof fromIndex !== 'number') {
    throw new Error('Enter a number as the third parameter');
  }

  let result;

  for (let i = fromIndex; i < array.length; i += 1) {
    if (predicate(array[i], i, array)) {
      result = array[i];
      break;
    }
  }
  return result;
}

export default find;
