// A demo for functional programming in JavaScript


/* Purity, side-effects: Function returns a value or a function without affecting any other external variables or such sort of thing */

// NO
// var a = 1;
// function add(b){
//   return a + b;
// }

// YES
const add = ( a, b ) => a + b;


/* Immutability, statelessness: in FP, we shouldn't re-assign to memory values. This can create race conditions, other bugs, can't be distributed in parallel across cores, and is not thread-safe.
  */

// NO
// let thing = 'nothing';
// thing = () => 'something';

// YES
function returnBanana() {
  return 'banana';
}
const thing = returnBanana();


/* First-Class functions: Functions are valid values like primitives and objects. They can be passed and assigned, just like other things */
function multiply( a, b ) {
  return a * b;
}
const product = multiply;
const getSix = product(2,3);

/* Higher-order functions: Functions that can take and return functions */
