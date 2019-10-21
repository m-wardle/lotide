# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @m-wardle/lotide`

**Require it:**

`const _ = require('@m-wardle/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Retrieves the first element of an array.
* `tail(array)`: Retrieves every element of an array after the first.
* `middle(array)`: Retrieves the middle number(s) of an array.
* `countOnly(array, object)`: Given an array and an object, it will return an object containing counts of everything that the input object listed as having a value of "true" (e.g. {x: true, y: false, z: true} will return a count of the occurances of x and z in the array).
* `countLetters(string)`: Given a string, it will return an object listing each letter that occurs within the string along with the number of occurances.
* `findKey(object, callback)`: Takes in an object and a callback. Scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `findKeyByValue(object, value)`: Takes in an object and a value and returns the first key which contains that value.
* `flatten(array)`: Given an array with other arrays inside, it can flatten it into a single-level array.
* `letterPositions(string)`: Returns all the indices in the string where each character is found.
* `map(array, callback)`: Takes an array and a callback function and returns a new array based on the callback function.
* `takeUntil(array, callback)`: Given an array and a callback function, it will iterate through that array, returning a slice containing each item iterated through until the callback function returns true.
* `without(array, exclusions)`: Given an array, and an array of exclusions, returns a subset of the initial, removing unwanted values.
