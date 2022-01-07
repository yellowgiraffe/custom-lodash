/* eslint-disable no-plusplus */

function compact(array) {
  if (!Array.isArray(array)) {
    throw new Error('Enter an array as the first parameter');
  }

  const result = [];
  let index = 0;

  if (array == null) {
    return result;
  }

  for (let i = 0; i < array.length; i += 1) {
    if (array[i]) {
      result[index++] = array[i];
    }
  }
  return result;
}

export default compact;
