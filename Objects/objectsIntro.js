/**
 * Simple Explanation
 * An object groups related data and actions together under one name. Instead of having 10 separate variables for one thing,
 *  you have one object that holds everything about that thing.
 * 
 * Real-World Analogy
Think of an employee ID card:
┌─────────────────────────────┐
│  Name     : Priya Sharma    │
│  Role     : QA Engineer     │
│  Company  : TechCorp        │
│  ID       : EMP-2024        │
│  Active   : Yes             │
└─────────────────────────────┘

Every field on that card is a property. The card itself is the object.
 All the information belongs to one person — grouped together, 
 not scattered in 5 separate variables.
 */

 //Creating Objects

 // Empty object
let emptyObject = {};

// Object with properties
let loginPage = {
    url: "https://myapp.com/login",
    title: "Login Page",
    isSecure: true,
    maxAttempts: 3
};

//Anatomy of an Object

let testCase = {
//  key      value
    name:    "Login Test",
    status:  "pass",
    duration: 1200,
    isCritical: true
};
// ↑ key:value pairs separated by commas
// ↑ last item can have trailing comma — good practice


/**
 * Accessing Properties
 * Two ways to read values from an object:
 */

//Way 1 — Dot Notation (Most Common)

let user = {
    name: "Priya",
    role: "admin",
    email: "priya@test.com",
    isActive: true
};

console.log(user.name);     // Priya
console.log(user.role);     // admin
console.log(user.email);    // priya@test.com
console.log(user.isActive); // true
console.log(user.age);      // undefined ← property doesn't exist


//Way 2 — Bracket Notation


 user = { name: "Priya", role: "admin" };

console.log(user["name"]); // Priya
console.log(user["role"]); // admin

// When to use bracket notation:
// 1. When key name is stored in a variable
let field = "name";
console.log(user[field]); // Priya 

// 2. When key has spaces or special characters
let config = {
    "base url": "https://myapp.com",
    "max-retries": 3
};
console.log(config["base url"]);    // https://myapp.com
console.log(config["max-retries"]); // 3

/**
 * NOTE: 
 * Rule: Use dot notation always. 
 * Use bracket notation when the key is dynamic (stored in a variable).
 */