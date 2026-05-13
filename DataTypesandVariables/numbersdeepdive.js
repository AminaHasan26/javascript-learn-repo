//PART B — NUMBERS (Deep Dive)
//Math Operations — The Full Picture

let a = 10;
let b = 3;

console.log(a + b);  // 13 — addition
console.log(a - b);  // 7  — subtraction
console.log(a * b);  // 30 — multiplication
console.log(a / b);  // 3.3333... — division
console.log(a % b);  // 1  — remainder (modulus)
console.log(a ** b); // 1000 — power (10 to the power of 3)

//The Modulus % — Very Useful!

// % gives you the REMAINDER after division
console.log(10 % 3); // 1  → 10 ÷ 3 = 3 remainder 1
console.log(20 % 4); // 0  → 20 ÷ 4 = 5 remainder 0
console.log(7 % 2);  // 1  → 7 ÷ 2 = 3 remainder 1

// Classic use — check if a number is even or odd
let number = 8;
console.log(number % 2 === 0); // true → even

/**
 * The Math Object — Built-in Calculator
JavaScript gives you a built-in Math object with useful tools:
 */
// Rounding
console.log(Math.round(4.6));  // 5  — normal rounding
console.log(Math.round(4.4));  // 4
console.log(Math.ceil(4.1));   // 5  — always rounds UP
console.log(Math.floor(4.9));  // 4  — always rounds DOWN

// Min and Max
console.log(Math.max(10, 25, 8, 42, 3));  // 42
console.log(Math.min(10, 25, 8, 42, 3));  // 3

// Absolute value (removes negative sign)
console.log(Math.abs(-15)); // 15
console.log(Math.abs(15));  // 15

// Random number between 0 and 1
console.log(Math.random()); // 0.7823... (different every time)

//Real automation use for Math.random():
// Generate a random test user ID so tests don't clash
let randomId = Math.floor(Math.random() * 10000);
let testEmail = `testuser${randomId}@automation.com`;
console.log(testEmail); // testuser4823@automation.com

//Shorthand Math Operators
//These are shortcuts you'll see constantly in real code:

let count = 0;

count = count + 1; // long way
count += 1;        // shorthand ✅
count++;           // increment by 1 ✅ (most common)

count = count - 1; // long way
count -= 1;        // shorthand ✅
count--;           // decrement by 1 ✅

count *= 2;        // multiply count by 2
count /= 2;        // divide count by 2

console.log(count);

//Converting Strings to Numbers — 3 Ways

let priceText = "299.99";

// Method 1 — Number()
let price1 = Number(priceText);
console.log(price1);        // 299.99
console.log(typeof price1); // number

// Method 2 — parseInt() — whole numbers only
let price2 = parseInt(priceText);
console.log(price2); // 299 — cuts off decimals!

// Method 3 — parseFloat() — keeps decimals
let price3 = parseFloat(priceText);
console.log(price3); // 299.99 ✅

// What happens with non-numeric text?
console.log(Number("hello"));    // NaN
console.log(parseInt("42px"));   // 42 — takes the number part!
console.log(parseInt("px42"));   // NaN — must START with number

//Checking if Something is a Valid Number

let value1 = 42;
let value2 = "hello";
let value3 = NaN;

console.log(isNaN(value1)); // false — 42 IS a number, so isNaN is false
console.log(isNaN(value2)); // true  — "hello" is NOT a number
console.log(isNaN(value3)); // true  — NaN is not a number

// Better way — Number.isFinite()
console.log(Number.isFinite(42));       // true  — valid, finite number
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(NaN));      // false

//Fixing Decimal Places — .toFixed()

let price = 149.9999;
let pi = 3.14159265;

console.log(price.toFixed(2)); // "149.99" ← notice: returns a STRING
console.log(pi.toFixed(2));    // "3.14"

// In automation — formatting prices for comparison
let calculatedTotal = 199.9999999; // floating point weirdness
let displayTotal = Number(calculatedTotal.toFixed(2));
console.log(displayTotal); // 200 ✅