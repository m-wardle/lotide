const eqArrays = require('./eqArrays');

const eqObjects = function(obj1, obj2) {
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length > keys2.length || keys2.length > keys1.length) {
    return false;
  } 

  for (let i in obj1) {
    if (!obj2[i]) {
      return false;
    } else if (Array.isArray(obj1[i]) && Array.isArray(obj2[i])) {
      if (eqArrays(obj1[i], obj2[i])) {
        return true;
      }
    } else if ((typeof obj1[i] !== 'object') && (typeof obj2[i] !== 'object')) {
      if (obj1[i] === obj2[i]) {
        return true
      }
    } else if ((typeof obj1[i] === 'object') && (typeof obj2[i] === 'object')) {
      return eqObjects(obj1[i], obj2[i])
    } else {
      return false;
    }
  }
}

module.exports = eqObjects;