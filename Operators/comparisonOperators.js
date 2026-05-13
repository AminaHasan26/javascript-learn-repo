/**
 * The Building Blocks — Comparison Operators
Before writing conditions, you need to know how to compare values.
These operators always return true or false.
 */

let a = 10;
let b = 5;

console.log(a > b);   // true  — a is greater than b
console.log(a < b);   // false — a is not less than b
console.log(a >= 10); // true  — a is greater than OR equal to 10
console.log(a <= 9);  // false — a is not less than or equal to 9
console.log(a === 10); // true  — a equals 10
console.log(a !== b);  // true  — a does NOT equal b

/**
 * == vs === — The Most Important Difference
This trips up everyone. Pay close attention.
 */

// == checks VALUE only (loose comparison)
console.log(5 == "5");  // true  ← "5" gets converted to 5 first
console.log(0 == false); // true ← false gets converted to 0

// === checks VALUE AND TYPE (strict comparison)
console.log(5 === "5");  // false ← number vs string — different types!
console.log(0 === false); // false ← number vs boolean — different types!

/**
 * Real-world analogy:

== is like asking "do these two people earn the same salary?" — doesn't care if one is paid hourly and one monthly, just converts and compares
=== is like asking "are these literally the same person?" — must match in every way

Rule: Always use === in automation. Never use ==.
 */