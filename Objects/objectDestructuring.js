/**
 *  Object Destructuring
 * Just like array destructuring — unpack object properties into variables cleanly.
 */


let testResult = {
    name: "Login Test",
    status: "pass",
    duration: 1200,
    browser: "Chrome",
    environment: "staging"
};

// Old way — repetitive
 name = testResult.name;
 status = testResult.status;
 duration = testResult.duration;

// Destructuring — clean ✅
let { name, status, duration } = testResult;

console.log(name);     // Login Test
console.log(status);   // pass
console.log(duration); // 1200

//Rename While Destructuring

let { name: testName, status: testStatus } = testResult;
console.log(testName);   // Login Test
console.log(testStatus); // pass


//Default Values While Destructuring

let { fname, browser = "Chrome", retries = 3 } = testResult;
console.log(browser);  // Chrome ← from object
console.log(retries);  // 3 ← default (not in object)

//Destructuring in Function Parameters

// Without destructuring — verbose
function printResult(test) {
    console.log(`${test.name} — ${test.status} — ${test.duration}ms`);
}

// With destructuring — clean 
function printResult({ name, status, duration }) {
    console.log(`${name} — ${status} — ${duration}ms`);
}

// Works the same way
printResult(testResult);

//Nested Destructuring

let config = {
    browser: {
        name: "Chrome",
        headless: true
    },
    credentials: {
        email: "admin@test.com",
        password: "Test@123"
    }
};

let { browser: { name: browserName }, credentials: { email } } = config;
console.log(browserName); // Chrome
console.log(email);       // admin@test.com