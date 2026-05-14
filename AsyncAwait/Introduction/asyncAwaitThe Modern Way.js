/**
 * Part C — Async / Await (The Modern Way)
 * async/await is syntactic sugar on top of Promises. It doesn't change 
 * how they work — it just makes them look and read like normal synchronous code.
 */

/**
 * The Two Keywords
 * // ASYNC — marks a function as asynchronous
//         always returns a Promise automatically
async function myFunction() {
    // code here
}

// AWAIT — pauses execution INSIDE async function
//         waits for Promise to resolve before continuing
//         can ONLY be used inside async functions
async function myFunction() {
    let result = await somePromise;
    // result is the resolved value — not a Promise
}
 */

//Transforming Promise Chain to Async/Await

//  Promise chain — hard to read
goToPage("https://myapp.com/login")
    .then(() => fillField("username", "priya@app.com"))
    .then(() => fillField("password", "Test@1234"))
    .then(() => clickButton("Login"))
    .then(() => console.log(" Login complete"))
    .catch(error => console.log(` ${error}`));

//  Async/await — reads like a recipe, top to bottom
async function loginTest() {
    await goToPage("https://myapp.com/login");
    await fillField("username", "priya@app.com");
    await fillField("password", "Test@1234");
    await clickButton("Login");
    console.log(" Login complete");
}

loginTest();

//Same result — but the async/await version reads like plain English.


/**
 * Complete Working Example
 */

// Helper — simulates time-consuming operations
function wait(ms, message) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve();
        }, ms);
    });
}

function waitForValue(ms, message, value) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(message);
            resolve(value); // resolves WITH a value
        }, ms);
    });
}

// Async test function
async function runLoginTest() {
    console.log(" Starting Login Test\n");

    // Each await PAUSES until that step completes
    await wait(1000, " Page loaded: Login Page");
    await wait(500,  "Typed username: priya@app.com");
    await wait(500,  "Typed password: *********");
    await wait(500,  "Clicked: Login Button");
    await wait(1500, "Page loaded: Dashboard");

    // Await can capture return values too
    let welcomeText = await waitForValue(
        500,
        " Reading welcome message...",
        "Welcome back, Priya!"
    );

    console.log(`\nVerified: "${welcomeText}"`);
    console.log(" Login Test PASSED");
}

// Call the async function
runLoginTest();
console.log("\n Test is running asynchronously...");