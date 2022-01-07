function includes(array, value, fromIndex = 0) {
  if (!Array.isArray(array)) {
    throw new Error('Enter an array as the first parameter');
  }

  if (typeof fromIndex !== 'number') {
    throw new Error('Enter a number as the third parameter');
  }

  for (let i = fromIndex; i < array.length; i += 1) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}

export default includes;
