const without = function(array, exclusions) {
  let newArray = array;
  
  for (let x = 0; x < exclusions.length; x++) {
    for (let y = 0; y < newArray.length;) {
      if (exclusions[x] === newArray[y]) {
        newArray.splice(y, 1);
      } else {
        y++;
      }
    }
  }

  return newArray;
};
module.exports = without;