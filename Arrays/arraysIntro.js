/**
 * An array is an ordered list of values stored in a single variable. Instead of creating 10 separate variables, 
 * you create one array that holds all 10 values.
 */

//Creating Arrays

// Empty array
let emptyList = [];

// Array of strings
let browsers = ["Chrome", "Firefox", "Safari", "Edge"];

// Array of numbers
let testDurations = [1200, 3400, 850, 960, 2100];

// Array of booleans
let testResults = [true, false, true, true, false];

// Mixed types (valid but avoid in practice)
let mixed = ["Login Test", true, 1200, null];

// Array of objects (very common in automation)
let testCases = [
    { name: "Login Test",    status: "pass" },
    { name: "Checkout Test", status: "fail" },
    { name: "Search Test",   status: "pass" }
];

// 3 ways to delare 
let marks = Array(6); // marks is an array of length 6 can store 6 values.
let markss = new Array(50,60,50,80.90) // having 6 values.
var marksss = [20,78,89,56,56,89] // declaring inside square braces shows it is an array.
// index starts from 0
console.log(marksss[4]); // will print 5 items on the array that will be on index 4
//we can update items in array.
markss[2] = 45 // it will update the value of items on index 3 in array.
console.log(markss);

/**
 * Accessing Items — Index
 * Every item in an array has a position number called an index.
Indexes always start at 0 — not 1.
 */

let browsers1 = ["Chrome", "Firefox", "Safari", "Edge"];
//                  0          1          2        3

console.log(browsers1[0]); // Chrome  ← first item
console.log(browsers1[1]); // Firefox
console.log(browsers1[2]); // Safari
console.log(browsers1[3]); // Edge    ← last item
console.log(browsers1[4]); // undefined ← doesn't exist!

//Getting the Last Item — Always

let browsers2 = ["Chrome", "Firefox", "Safari", "Edge"];

// Fragile — breaks if array length changes
console.log(browsers2[3]);

// Safe — always gets last item no matter the length
console.log(browsers2[browsers.length - 1]); // Edge

// Modern way — at(-1) means "first from the end"
console.log(browsers2.at(-1));  // Edge
console.log(browsers2.at(-2));  // Safari

//The length Property

 testCases = ["Login", "Search", "Checkout", "Payment", "Logout"];

console.log(testCases.length); // 5

// length is always one MORE than the last index
// Last index = 4, length = 5

/*
*Modifying Arrays
*/

browsers = ["Chrome", "Firefox", "Safari", "Edge"];

browsers[1] = "Opera"; // replace Firefox with Opera
console.log(browsers); // ["Chrome", "Opera", "Safari", "Edge"]