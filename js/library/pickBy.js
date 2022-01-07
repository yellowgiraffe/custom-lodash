function pickBy(obj, predicate = _.identity) {
  let result = {};

  for (let key in obj) {
    if (predicate(obj[key], key)) {
      result[key] = obj[key]
    }
  }

  return result;
}

export default pickBy;
