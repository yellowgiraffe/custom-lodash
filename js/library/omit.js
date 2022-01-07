/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */

function omit(obj, keys) {
  const result = {};
  let count;

  for (const key in obj) {
    count = 0;
    for (let i = 0; i < keys.length; i += 1) {
      if (keys[i] === key) {
        count += 1;
      }
    }

    if (count === 0) {
      result[key] = obj[key];
    }
  }

  return result;
}

export default omit;
