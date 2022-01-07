function chunk(array, size = 1) {
  if (!Array.isArray(array)) {
    throw new Error('Enter an array as the first parameter');
  }

  let startIndex = 0;
  let endIndex = size;
  const arrLength = array.length;
  let resultArr = new Array(Math.ceil(arrLength / size));

  if (arrLength <= size) {
    resultArr = array;
    return resultArr;
  }

  for (let i = 0; i < resultArr.length; i += 1) {
    resultArr[i] = array.slice(startIndex, endIndex);
    startIndex += size;
    endIndex += size;
  }

  return resultArr;
}

export default chunk;
