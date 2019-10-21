const middle = function(array) {
  let middleArray = [];
  let midPoint = array.length / 2;
  
  if (array.length < 3) {
    return middleArray;
  } else if (array.length % 2 === 0) {
    middleArray.push(array[midPoint - 1], array[midPoint]);
    return middleArray;
  } else {
    middleArray.push(array[Math.floor(midPoint)]);
    return middleArray;
  }
};

module.exports = middle;
