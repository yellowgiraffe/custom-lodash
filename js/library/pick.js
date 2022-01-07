function pick(obj, keys) {
  let result = {};

  for (let i = 0; i < keys.length; i += 1) {
    result[keys[i]] = obj[keys[i]]
  }

  return result;
}

export default pick;
