/**
 * Loop 2 — while Loop
 * Use When You Don't Know How Many Times
 * while (condition) {
    // keeps running AS LONG AS condition is true
}
 */

let attempts = 0;
let maxAttempts = 3;
let loginSuccess = false;

while (attempts < maxAttempts && !loginSuccess) {
    attempts++;
    console.log(`Login attempt ${attempts}...`);
    
    // Simulate: succeeds on attempt 2
    if (attempts === 2) {
        loginSuccess = true;
        console.log("Login successful!");
    } else {
        console.log("Login failed. Retrying...");
    }
}

if (!loginSuccess) {
    console.log(" Account locked after 3 failed attempts");
}