/**
 * Part C — Return Values (Getting Output From Functions)
 * So far functions just do things. But often you need a function to calculate something and give you the result back.
 * Real-World Analogy
    You send clothes to a dry cleaner (input).
    They clean them and return them to you (output).
    The function takes something in, processes it, gives something back.
 */

// Without return — just prints, gives nothing back
function addNumbers(a, b) {
    console.log(a + b); // prints but doesn't return
}

let result = addNumbers(5, 3);
console.log(result); // undefined! — nothing was returned

// With return — sends value back to caller
function addNumbers(a, b) {
    return a + b; // sends result back
}

result = addNumbers(5, 3);
console.log(result); // 8 

//Return in Real Automation

// Function that validates an email
function isValidEmail(email) {
    if (email === "") {
        return false;
    }
    if (!email.includes("@")) {
        return false;
    }
    if (!email.includes(".")) {
        return false;
    }
    return true; // passed all checks
}

// Now use it anywhere
console.log(isValidEmail("priya@test.com")); // true
console.log(isValidEmail("invalidemail"));   // false
console.log(isValidEmail(""));               // false
console.log(isValidEmail("noatsign.com"));   // false

// Using the return value in a condition
let email = "priya@test.com";

if (isValidEmail(email)) {
    console.log("Proceeding with login...");
} else {
    console.log("Please enter a valid email");
}

// Return Exits the Function Immediately

function checkPassword(password) {
    if (password.length < 8) {
        return "Too short"; // ← exits HERE if this runs
    }
    if (!password.includes("@")) {
        return "Must contain @"; // ← exits HERE if this runs
    }
    return "Password is valid"; // ← only reaches here if above passed
}

console.log(checkPassword("abc"));          // Too short
console.log(checkPassword("abcdefgh"));     // Must contain @
console.log(checkPassword("Test@1234"));    // Password is valid

//Once return runs — nothing else in the function executes.