const tail = function(array) {
  let tailArray = [];
  for (let i = 1; i < array.length; i++) {
    tailArray.push(array[i]);
  }
  console.log(tailArray);
  return tailArray;
};

module.exports = tail;