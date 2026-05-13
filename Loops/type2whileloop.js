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
//Always make sure your loop condition will eventually become false.

/**
 * Real-world analogy:
An infinite loop is like telling someone "keep knocking on the door until 
someone answers" but the house is empty. 
They'll knock forever unless you add "or until you've knocked 10 times."
 */