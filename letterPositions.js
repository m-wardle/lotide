const letterPositions = function(sentence) {
  const results = {};
  for (const letter in sentence) {
    if (sentence[letter] !== ' ') {
      if (results[sentence[letter]]) {
        results[sentence[letter]].push(Number(letter));
      } else {
        results[sentence[letter]] = [Number(letter)];
      }
    }
  }
  
  return results;
};

module.exports = letterPositions;