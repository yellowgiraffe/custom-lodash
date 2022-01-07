/* eslint-disable import/extensions */

import identity from './identity.js';

function map(array, iteratee = identity) {
  if (!Array.isArray(array)) {
    throw new Error('Enter an array as the first parameter');
  }

  if (typeof iteratee !== 'function') {
    throw new Error('Enter a function as the second parameter');
  }

  const result = [];

  for (let i = 0; i < array.length; i += 1) {
    result[i] = iteratee(array[i]);
  }

  return result;
}

export default map;
