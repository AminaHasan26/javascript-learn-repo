/**
 * Arrow Functions (Modern — You'll Use This Most)
 * A shorter, cleaner way to write functions. Used everywhere in modern JavaScript and Playwright.
 */

// Regular function
function add(a, b) {
    return a + b;
}

// Arrow function — same thing, less code
const add = (a, b) => {
    return a + b;
};

// Even shorter — when body is just one return statement
const add = (a, b) => a + b;

console.log(add(5, 3)); // 8

// No parameters
const printDivider = () => {
    console.log("========================");
};

// One parameter — parentheses optional
const double = n => n * 2;
console.log(double(5)); // 10

// Multiple parameters — parentheses required
const multiply = (a, b) => a * b;
console.log(multiply(4, 3)); // 12

// Multi-line body — needs curly braces and return
const validateLogin = (username, password) => {
    if (username === "" || password === "") {
        return "Fields cannot be empty";
    }
    if (password.length < 8) {
        return "Password too short";
    }
    return "Valid";
};

//Regular vs Arrow — Side by Side

// These all do the same thing:

// Regular function declaration
function greet(name) {
    return `Hello, ${name}!`;
}

// Function expression
const greet = function(name) {
    return `Hello, ${name}!`;
};

// Arrow function
const greet = (name) => {
    return `Hello, ${name}!`;
};

// Arrow function — shorthand (one line)
const greet = name => `Hello, ${name}!`;

console.log(greet("Priya")); // Hello, Priya!

/**Which should you use?
 * Arrow functions for short, simple operations
 * Regular functions for larger, named blocks of code 
 * You'll see both in Playwright — get comfortable with both
 */