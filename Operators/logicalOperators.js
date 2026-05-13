/**
 * Logical Operators — Combining Conditions
Sometimes one condition isn't enough. You need to check multiple things together.
 */

// AND operator — &&
// BOTH conditions must be true
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false

// OR operator — ||
// AT LEAST ONE condition must be true
console.log(true || false);  // true
console.log(false || false); // false
console.log(true || true);   // true

// NOT operator — !
// Flips true to false and false to true
console.log(!true);  // false
console.log(!false); // true

/**
 * Real-world analogy:

&& (AND) = "You need BOTH a ticket AND an ID to enter the concert"
|| (OR) = "You can pay by cash OR card — either works"
! (NOT) = "NOT raining" means it IS sunny
 */