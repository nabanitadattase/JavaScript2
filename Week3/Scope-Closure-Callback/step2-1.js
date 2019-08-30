'use strict';

/* Your task is to write a function that takes another function as an argument and runs it.
 */

function foo(func) {
  // calling nested function
  func();
}

function bar() {
  console.log('Hello, I am bar!');
}

foo(bar);

// Do not change or remove anything below this line
module.exports = foo;
