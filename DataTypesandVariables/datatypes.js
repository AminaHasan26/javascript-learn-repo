//These are comments

//To Print any Statement in JavaScript:
console.log("Hey! This is my JavaScript Programming Basic File");
/*
Multi Line 
Comments
*/

// To Declare any Variable in JavaScript we use to define by -
// var , let and const (more differences among them will be explained in later Files).
// Mostly let and var are same 1. Difference let cannot be redeclared but var can be redeclared , but let variable can be reassigned a new value.
//const can neither be reassigned nor redeclare, it will be constant eveerywhere once decalred and assigned.
//There are two more varaibles in JavaScript - UNDEFINED and NULL
//Array and object are also Datatypes we will discuss them in Depth in Later files

let projectName ; // this is an undefined vvariable as no value is assigned
// const assignment ; // this cannot be undefined we need to assign any value unlike let
let joiningDay = null ;// this makes the value forcefully null and the datatype will be objec
const assignment = null;// this makes the value forcefully null and the datatype will be objec
const fname = "Amina";
let age = 27;
const email = "aminahasan718@gmail.com"
const isGraduate = true;
let isQA = true;
let cgpa = 8.5;
const schoolPer = 89.90;
console.log("\n **********Printing Details In One Line***************** \n")
console.log("Name: " + fname + " Age :" + age + " Email : " +email + " Graduated: " +isGraduate + " QA: " + isQA, " CGPA Scoring: " +cgpa +" School: " + schoolPer);
console.log("\n **********Printing Details End Here***************** \n")

/*
*******Data Types Overview*************************
JavaScript has two categories of data types: 
primitives (immutable values) and objects (mutable references).

***Note
JavaScript is dynamically typed, meaning you don't declare types when creating variables. 
A variable can hold any type and change types during runtime.

[Primitive Types]:
Primitives are the most basic data types. 
They are immutable (cannot be changed) and compared by value.

***Note
Use null when you intentionally want "no value". 
Let undefined happen naturally for uninitialized variables.
*/

//to check which type of datatype is variable then we can use a METHOD which is typeof() to check
console.log("\n **********Data Types of Each Variable***************** \n")
console.log("fname Datatype:" , typeof(fname));
console.log("age Datatype:" , typeof(age));
console.log("email Datatype:" , typeof(email));
console.log("isQA Datatype:" , typeof(isQA));
console.log("cgpa Datatype:" , typeof(cgpa)); //variable type of decimal numbers are Numbers only in JavaScript
console.log("SchoolPer Datatype:" , typeof(schoolPer));
console.log("projectName :", typeof(projectName));
/*typeof null Bug
typeof null returns "object" instead of "null". 
This is a historical bug that can't be fixed without breaking existing code. 
Always check for null with === null.
*/
console.log("joiningDay : ", typeof(joiningDay));
console.log("assignment :", typeof(assignment));
console.log("\n **********___________________Data Types End Here ___________________***************** \n");

//To Print in Multiple lines: 
console.log("\n **********Printing Details in Multiple Line ***************** \n")
console.log("Name: " + fname + " \nAge :" + age + "\nEmail : " +email + "\nGraduated: " +isGraduate + "\nQA: " + isQA, "\nCGPA Scoring: " +cgpa +"\nSchool: " + schoolPer);
console.log("\n **********___________________Details End Here___________________***************** \n");

//Miscellaneus Topics
console.log("\n______________________________Miscelleous Topics__________________________________\n");
//Miscellaneus Topics
// what is "!"- this works with boolean datatypes if we want to print opposite of any boolean variable it is used see example .
console.log("Is Developer: " ,!isQA);

/*
-----------------------------------Symbol (ES6)--------------------
Symbols are unique identifiers, 
useful for object property keys that won't collide with other properties.

1.A Symbol is a unique andimmutable primitive value often used as a private or 
collision-free key for object properties.

Uniqueness: Every Symbol() call returns a unique value, even if the descriptions are identical.
Example: const id = Symbol("id");
--------------------------------------BigInt (ES2020)-------------------------
BigInt handles integers larger than Number.MAX_SAFE_INTEGER (9007199254740991). 
Create them by appending n to a number.

2. BigIntBigInt is used to represent whole 
numbers larger than the safe integer limit for the standard Number type, which is \(2^{53} - 1\)

Creation: Append n to an integer literal or use the BigInt() function.
Limitation: You cannot perform math operations between a BigInt and a standard Number without explicit 
conversion.

Example: const largeNum = 9007199254740991n;
*/

const sym = Symbol("id");         // Symbol
const bigNum = 9007199254740991n; // BigInt

console.log("Symbol:", sym.toString(), "| Datatype of sym:", typeof sym);
console.log("BigInt:", bigNum, "| DataType of:", typeof bigNum);

console.log("\n***********************************Array Object Function DataTypes***********************************************\n")
// Reference Types
const arr = [1, 2, 3];            // Array
const obj = { name: "Alice" };    // Object
const func = function() {};       // Function

/*Object Types
Objects are collections of key-value pairs. 
Arrays and functions are special types of objects.
Unlike primitives, objects are compared by reference, not value. 
Two objects with the same content are not equal: {} === {} is false.

*/

// Object - key-value pairs
const person = {
  name: "Amina",
  age: 27,
  isStudent: false
};

console.log("This is a Object person:", person)

// Array - ordered list (special object)
const colors = ["red", "green", "blue"];
const mixed = [1, "two", true, null];

console.log("\n Array of Colours : " + colors + "\n Mixed Array: " + mixed);

// Function - callable object
function greet(name) {
  return "Hello, " + name;
}
console.log("\n Greeting via Function :", greet("Amina Fatima"));
/*
// Study This Part Seperately commenting out this
// RegExp, Map, Set are also objects
const pattern = /hello/i;
const map = new Map();
const set = new Set([1, 2, 3]);

*/

console.log("\nArray:", arr, "| DataType of arr:", typeof arr);
console.log("Object:", obj, "| Data Type of object:", typeof obj);
console.log("Function :", func, "| DataType of Function:", typeof func);

console.log("\n***********************************Array Object Function DataTypes Ends Here**********************************************\n")
console.log("\n***********************************Date Data Type**********************************************\n")
/*
****Date***
Unlike the others, Date is not a primitive but a built-in object
Usage: It is used to store and manipulate date and time values.
Creation: Created using the new Date() constructor.
Example: const now = new Date();

*/

const now = new Date(); 
console.log("Date :" , now);

console.log("\n***********************************Date Data Type End Here**********************************************\n")

/*
Type Coercion:
JavaScript automatically converts types in certain situations. 
This can be helpful but also surprising:

*/
console.log("\n******************************Implicit Type Conversion*********************************\n");
// Implicit type coercion
console.log("5" + 3);      // "53" (number to string)
console.log("5" - 3);      // 2 (string to number)
console.log("5" * "2");    // 10 (both to numbers)
console.log(true + 1);     // 2 (true becomes 1)
console.log(false + 1);    // 1 (false becomes 0)
console.log("\n******************************Implicit Type Conversion End *********************************\n");

console.log("\n******************************Truthy and Falsy Values*********************************\n");
// Truthy and falsy values
// Falsy: false, 0, "", null, undefined, NaN
// Everything else is truthy

if ("hello") console.log("Truthy!");  // Runs
if (0) console.log("Falsy!");         // Doesn't run
console.log("\n******************************Truthy and Falsy Values End *********************************\n")

// Explicit conversion
console.log("\n******************************Explicit Type Conversion*********************************\n")
console.log("String to Number Explicit Conversion :",String(123))       // "123"
console.log("Number to String Conversion :",Number("42"))      // 42
console.log("Boolean Conversion of 1 :",Boolean(1) )       // true
parseInt("42px")  // 42
parseFloat("3.14") // 3.14
console.log("\n******************************Explicit Type Conversion End *********************************\n")

/* ***************Notes******************

Avoid Implicit Coercion
Use explicit conversion (String(), Number()) to make your intent clear. 
Use === instead of == to avoid coercion in comparisons.
***Best Practices***:
1. Use === for Comparisons
Always use strict equality (===) to avoid type coercion surprises.

2. Use Array.isArray() for Arrays
Don't rely on typeof for arrays. Use Array.isArray().

3. Initialize Variables
Avoid undefined by always initializing variables with a value.

4. Use null Intentionally
Use null to explicitly indicate "no value" rather than leaving things undefined.

*/
//Conversion Practice:
/**
 * Convert both to numbers and calculate the total price. Print it using a template literal like:

"Total: 1199.96"
 */
let priceText = "299.99";
let quantityText = "4";

let total = Number(priceText)* Number(quantityText);
console.log("Total: " +total);


