// File: tests/myTest.js

// Import the whole module
const mathUtils = require("./helpers/mathUtils");

console.log(mathUtils.add(5, 3));           // 8
console.log(mathUtils.getPassRate(42, 50)); // 84
console.log(mathUtils.PI);                  // 3.14159

// Import with destructuring — cleaner
const { add, getPassRate } = require("./helpers/mathUtils");

console.log(add(10, 5));         // 15
console.log(getPassRate(9, 10)); // 90