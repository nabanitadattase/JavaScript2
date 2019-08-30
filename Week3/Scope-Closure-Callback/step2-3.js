'use strict';

/* 
Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number.
with a for loop.
with a while loop.
with a do...while loop.
*/
// Use a 'for' loop
function repeatStringNumTimesWithFor(str, num) {
  // eslint-disable-next-line
  let result = '';
  // Repeating a string using for loop
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      result = result + str;
    }
  }
  return result;
}

console.log('for', repeatStringNumTimesWithFor('abc', 3));

// Use a 'while' loop
function repeatStringNumTimesWithWhile(str, num) {
  // eslint-disable-next-line
  let result = '';

  // Replace this comment and the next line with your code
  // Repeating a string using while loop
  if (num > 0) {
    while (num) {
      result = result + str;
      num--;
    }
    return result;
  }
  return result;
}

console.log('while', repeatStringNumTimesWithWhile('abc', 3));

// Use a 'do...while' loop
function repeatStringNumTimesWithDoWhile(str, num) {
  // eslint-disable-next-line
  let result = '';

  // Replace this comment and the next line with your code
  // Repeating a string using Do-while loop
  if (num > 0) {
    do {
      result = result + str;
      num--;
    } while (num > 0);
    return result;
  }
  return result;
}

console.log('do-while', repeatStringNumTimesWithDoWhile('abc', 3));

// Do not change or remove anything below this line
module.exports = {
  repeatStringNumTimesWithFor,
  repeatStringNumTimesWithWhile,
  repeatStringNumTimesWithDoWhile
};
