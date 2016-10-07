// A demo for functional programming in JavaScript
// Solving for: https://github.com/fs-webdev/skill-building-program/blob/master/badges-active/javascript/_micro_functional-js.md


/* Purity, side-effects: Function returns a value or a function without affecting any other external variables or such sort of thing */

// NO
// var a = 1;
// const add = (b) => a + b;

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
const bananaFunc = () => {
  return (input)=> {
    return 'bananas ' + input;
  }
}
const banana = bananaFunc()('aren\'t always weapons');


/* Currying: Converting functions with multiples args down to a function that takes them one at a time. Each time the function is called it only accepts one argument and returns a function that takes one argument until all arguments are passed. */
const sum = (a,b) => a + b;
const curriedSum = (a) => (b) => a + b;
// curriedSum(40)(2) //42;
const add2 = curriedSum(2); // (b) => 2 + b
// add2(10); //12


/* Map:  method creates a new array with the results of calling a procided function on every element in this array */
const arr = [1,2,3,4,5,6,7,8,9];
function addFive(num) {
  return num + 5;
}
const plusFiveArr = arr.map(item => addFive(item));


/* Filter: method creates a new array with all elements that pass the test implemented by the provided function */
function greaterThanTen(num) {
  return num > 10;
}
const numArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const filtered = numArr.filter(greaterThanTen);


/* Every: method tests whether all elements in the array pass the test implemented  by the provided function */
const numArr = [12,5,8,130,44];
const numArr2 = [12,54,18,130,44];
function greaterThanTen(num) {
  return num > 10;
}
const notAllBiggerThan10 = numArr.every(greaterThanTen); // false
const allBiggerThan10 = numArr2.every(greaterThanTen);  // true


/* Some: method tests whether some element in the array passes the test implemented by the provided function */
const noneBiggerArr = [2,5,8,1,4];
const someBiggerArr = [12,5,8,1,4];
function greaterThanTen(num) {
  return num > 10;
}
const noneBigger = noneBiggerArr.some(greaterThanTen); // false
const someBigger = someBiggerArr.some(greaterThanTen); // true


/* Reduce: Applies a function against an accumulator and each value of the array (from left to right) to reduce it to a single value */
// sum all the values of an array
const numArr = [0,1,2,3];
function add(a,b) {
  return a + b;
}
const total = numArr.reduce(add); // 6

// flatten an array of arrays
const numArrs = [[0,1],[2,3],[4,5]];
function concatTheThings(a,b) {
  return a.concat(b);
}
const flattened = numArrs.reduce(concatTheThings); // [0,1,2,3,4,5]
