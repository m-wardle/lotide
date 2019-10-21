const assertEqual = require('../assertEqual');
const tail =  require('../tail');

// TEST CASES

assertEqual(tail([5,6,7]).join(''), [6, 7].join(''));
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).join(''), ["Lighthouse", "Labs"].join(''));
console.log(tail([]));

// Checking the original array

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);