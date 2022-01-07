function zip(...arrays) {
  const result = [];
  let count = 0;

  for (let i = 0; i < arrays.length; i += 1) {
    if (arrays[i].length > count) {
      count = arrays[i].length;
    }
  }

  for (let i = 0; i < count; i += 1) {
    result[i] = [];
    for (let j = 0; j < arrays.length; j += 1) {
      result[i][j] = arrays[j][i];
    }
  }
  return result;
}

export default zip;
