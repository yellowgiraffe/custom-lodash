function toPairs(obj) {
  if(typeof obj !== 'object') {
    throw new Error('Enter an object as function parameter')
  }
  
  if (obj instanceof Map || obj instanceof Set) {
    return [...obj.entries()];
  }

  return Object.entries(obj);  
}

export default toPairs;
