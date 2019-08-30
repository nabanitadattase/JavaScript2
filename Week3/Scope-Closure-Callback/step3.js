'use strict';

/* Write a function that would allow you to do this:
const addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
*/
function createBase(base) {
  // Replace this comment and the next line with your code
  // console.log(base);
  return function(add) {
    return base + add;
  };
}

const addSix = createBase(6);

console.log(addSix(10)); // returns 16
console.log(addSix(21)); // returns 27

// Do not change or remove anything below this line
module.exports = createBase;
