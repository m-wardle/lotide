const flatten = function(array) {
  for (let i = 0; i < array.length;) {
    if (Array.isArray(array[i]) === true) {
      let counter = 0;
      for (let element of array[i]) {
        array.splice(i + counter, 0, element);
        counter++;
      }
      array.splice(i + counter, 1);
      i += counter;
    } else {
      i++;
    }
  }

  return array;
};

module.exports = flatten;