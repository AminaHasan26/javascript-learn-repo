/**
 * Functions Calling Other Functions
 * This is where real power begins. Functions can call other functions.
 */

// Small, focused functions
const isNotEmpty = (value) => value !== "";
const hasAtSign = (email) => email.includes("@");
const hasDot = (email) => email.includes(".");
const isLongEnough = (password) => password.length >= 8;
const hasSpecialChar = (password) => /[!@#$%]/.test(password);

// Bigger function that uses smaller ones
function validateLoginForm(email, password) {
    console.log("--- Validating Login Form ---");
    
    if (!isNotEmpty(email)) {
        return "Email is required";
    }
    if (!hasAtSign(email)) {
        return "Email must contain @";
    }
    if (!hasDot(email)) {
        return "Email must contain a dot";
    }
    if (!isNotEmpty(password)) {
        return "Password is required";
    }
    if (!isLongEnough(password)) {
        return "Password must be 8+ characters";
    }
    if (!hasSpecialChar(password)) {
        return "Password must have a special character (!@#$%)";
    }
    return "Form is valid — proceeding with login";
}

// Test with different inputs
console.log(validateLoginForm("", "Test@123"));
console.log(validateLoginForm("priya.test.com", "Test@123"));
console.log(validateLoginForm("priya@test.com", "abc"));
console.log(validateLoginForm("priya@test.com", "Test@1234"));

//This is exactly how real automation helper functions are structured.