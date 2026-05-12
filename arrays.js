//collection of elements is array.
// 3 ways to delare 
let marks = Array(6); // marks is an array of length 6 can store 6 values.
let markss = new Array(50,60,50,80.90) // having 6 values.
var marksss = [20,78,89,56,56,89] // declaring inside square braces shows it is an array.
// index starts from 0
console.log(marksss[4]); // will print 5 items on the array that will be on index 4
//we can update items in array.
markss[2] = 45 // it will update the value of items on index 3 in array.
console.log(markss);

/*JavaScript provides a robust set of built-in methods to manipulate, 
search, and transform arrays. These methods can be broadly categorized based on 
whether they modify the original array (mutating) or return a new one (non-mutating).

1. Basic Manipulation (Adding/Removing)

These methods modify the array's length and content directly

push(): Adds one or more elements to the end and returns the new length.
pop(): Removes and returns the last element.
unshift(): Adds elements to the beginning and returns the new length.
shift(): Removes and returns the first element.
splice(): A versatile tool that can add, remove, or replace elements at any index.

*/
console.log("*****************Array Methods : Basic Manipulation (Adding/Removing)******************");
console.log("Before push on markss :", markss);
markss.push(67);
console.log("After push on markss :", markss);
console.log("Before pop on marksss :", marksss);
marksss.pop();
console.log("After pop on marksss :", marksss);
console.log("Before Unshift Aarray elements in marksss: ", marksss);
marksss.unshift(25);
console.log("After Unshift Aarray elements in marksss: ", marksss);
console.log("Before shift Aarray elements in marksss: ", marksss);
marksss.shift(100);
console.log("After shift Aarray elements in marksss: ", marksss);

/*
2. Transformation Methods

These are typically used to create new versions of an array based on the original.

map(): Creates a new array by applying a function to every element.
filter(): Returns a new array containing only elements that pass a specific test.
reduce(): Executes a "reducer" function on each element to produce a single output value (e.g., summing numbers).
flat(): Flattens nested arrays into a single-level array.
concat(): Merges two or more arrays into one new array.

3. Searching and Testing

Used to find specific values or check if conditions are met.

find(): Returns the value of the first element that passes a test.
findIndex(): Similar to find(), but returns the index instead of the value.
includes(): Checks if an array contains a specific value, returning true or false.
indexOf(): Returns the first index where a value is found, or -1 if not present.
some(): Checks if at least one element passes a test.every(): Checks if all elements pass a test

4.Iteration and Sorting

forEach(): Executes a provided function once for each array element (does not return a value).
sort(): Rearranges elements in place (mutating) based on string value or a compare function.
reverse(): Reverses the order of elements in place

5. Utility and Conversion

join(): Combines all elements into a single string using a specified separator.
slice(): Returns a shallow copy of a portion of the array without modifying the original.Array.
isArray(): A static method to check if a variable is an array.

*/





