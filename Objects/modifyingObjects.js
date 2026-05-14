/**
 * Modifying Objects
 */

//Adding New Properties

let testResult = {
    name: "Login Test",
    status: "pass"
};

// Add new properties anytime
testResult.duration = 1200;
testResult.browser = "Chrome";
testResult.timestamp = "2024-01-15";

console.log(testResult);
// {
//   name: "Login Test",
//   status: "pass",
//   duration: 1200,
//   browser: "Chrome",
//   timestamp: "2024-01-15"
// }

/**
 * Updating Existing Properties
 */

let user = {
    name: "Priya",
    loginCount: 0,
    isLoggedIn: false
};

// Update values
user.loginCount = user.loginCount + 1;
user.isLoggedIn = true;
user.lastLogin = "2024-01-15 09:30";

console.log(user.loginCount); // 1
console.log(user.isLoggedIn); // true


/**
 * Deleting Properties
 */

let config = {
    browser: "Chrome",
    headless: true,
    slowMo: 500,
    debugMode: true
};

delete config.debugMode;
delete config.slowMo;

console.log(config);
// { browser: "Chrome", headless: true }


/**
 * Checking if a Property Exists
 */

let testCase = {
    name: "Login Test",
    status: "pass",
    duration: 1200
};

// Way 1 — in operator
console.log("name" in testCase);     // true
console.log("browser" in testCase);  // false

// Way 2 — undefined check
console.log(testCase.browser !== undefined); // false ← doesn't exist

// Way 3 — hasOwnProperty
console.log(testCase.hasOwnProperty("status")); // true