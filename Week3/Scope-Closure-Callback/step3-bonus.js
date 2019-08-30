/*
Write a function takes this array ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'] and 
returns an array which only has unique values in it (so it removes the duplicate ones). 
Make it a 'smart' algorithm that could do it for every array (only strings/number). 
Try to make it as fast as possible!
*/

'use strict';

const values = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c'];

function makeUnique(arr) {
  const result = [];
  arr.forEach(function(item) {
    if (result.indexOf(item) < 0) {
      result.push(item);
    }
  });
  return result;
}

const uniqueValues = makeUnique(values);
console.log(uniqueValues);

// Do not change or remove anything below this line
module.exports = makeUnique;
