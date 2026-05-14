/**
 *  Powerful Array Methods (The Big Three)
 * These three methods are used constantly in real automation code.
They each loop through an array and do something powerful.
 */

//.forEach() — Do Something For Each Item
//Like a for...of loop but written as a method.

let testCases = ["Login", "Search", "Checkout"];

// for...of way
for (let test of testCases) {
    console.log(`Running: ${test}`);
}

// forEach way — same result
testCases.forEach(test => {
    console.log(`Running: ${test}`);
});

// forEach with index
testCases.forEach((test, index) => {
    console.log(`${index + 1}. Running: ${test}`);
});

/**
 * .map() — Transform Every Item
 * Creates a brand new array by transforming each item.
Original array stays untouched.
 */

let testNames = ["login test", "search test", "checkout test"];

// Make every name uppercase
let upperNames = testNames.map(name => name.toUpperCase());
console.log(upperNames);
// ["LOGIN TEST", "SEARCH TEST", "CHECKOUT TEST"]

// Original untouched
console.log(testNames);
// ["login test", "search test", "checkout test"]


//Real automation use:

let rawResults = [
    { name: "Login Test",    duration: 1200, passed: true  },
    { name: "Search Test",   duration: 850,  passed: true  },
    { name: "Checkout Test", duration: 3400, passed: false }
];

// Transform to simple summary objects
let summary = rawResults.map(result => ({
    test: result.name,
    status: result.passed ? "PASS" : "FAIL",
    time: `${result.duration}ms`
}));

console.log(summary);
// [
//   { test: "Login Test",    status: "PASS", time: "1200ms" },
//   { test: "Search Test",   status: " PASS", time: "850ms"  },
//   { test: "Checkout Test", status: "FAIL", time: "3400ms" }
// ]


/**
 * .filter() — Keep Only Matching Items
 * Creates a new array with only the items that pass your condition.
Original array stays untouched.
 */


 testResults = [
    { name: "Login Test",    status: "pass" },
    { name: "Search Test",   status: "fail" },
    { name: "Checkout Test", status: "pass" },
    { name: "Payment Test",  status: "fail" },
    { name: "Logout Test",   status: "pass" }
];

// Get only failed tests
let failedTests = testResults.filter(test => test.status === "fail");
console.log(failedTests);
// [
//   { name: "Search Test",  status: "fail" },
//   { name: "Payment Test", status: "fail" }
// ]

// Get only passed tests
let passedTests = testResults.filter(test => test.status === "pass");
console.log(`Passed: ${passedTests.length}`); // Passed: 3

// Filter slow tests (over 2 seconds)
let timings = [1200, 3400, 850, 5100, 960, 2800];
let slowTests = timings.filter(ms => ms > 2000);
console.log(slowTests); // [3400, 5100, 2800]


/**
 * .find() — Get First Matching Item
 * Returns the first item that matches. Returns undefined if nothing found.
 */

let users = [
    { id: 1, name: "Priya",  role: "admin"   },
    { id: 2, name: "Rahul",  role: "manager" },
    { id: 3, name: "Sneha",  role: "viewer"  },
    { id: 4, name: "Arjun",  role: "admin"   }
];

// Find first admin
let firstAdmin = users.find(user => user.role === "admin");
console.log(firstAdmin);
// { id: 1, name: "Priya", role: "admin" }

// Find user by ID
let user = users.find(user => user.id === 3);
console.log(user.name); // Sneha

// Not found
let ghost = users.find(user => user.name === "Ghost");
console.log(ghost); // undefined

/**
 * filter vs find:
 * .filter()-> New array of ALL matches-> You want multiple results
 * .find() -> First matching item only -> You want one specific item
 */


/**
 * .some() — Does At Least One Match?
 * Returns true if at least one item passes the condition.
 */

testResults = ["pass", "pass", "fail", "pass"];

let hasFailures = testResults.some(result => result === "fail");
console.log(hasFailures); // true ← at least one failed

let allCritical = ["Login", "Payment", "Checkout"];
let hasLogin = allCritical.some(test => test === "Login");
console.log(hasLogin); // true


/**
 * .every() — Do All Items Match?
 * Returns true only if every item passes the condition.
 */


 testResults = ["pass", "pass", "pass", "pass"];
let allPassed = testResults.every(result => result === "pass");
console.log(allPassed); // true 

let mixed = ["pass", "pass", "fail", "pass"];
let allPassedMixed = mixed.every(result => result === "pass");
console.log(allPassedMixed); // false ← one failed

// Real use — check all required fields are filled
let formFields = ["priya@test.com", "Test@1234", "Priya Sharma"];
let allFilled = formFields.every(field => field !== "");
console.log(allFilled); // true 

/**
 * .reduce() — Boil Array Down to One Value
 * The most powerful — and most complex. Takes all items and combines them into a single result.
 */

/**
 * // Basic structure
array.reduce((accumulator, currentItem) => {
    // accumulator = running total
    // currentItem = current item being processed
    return newAccumulator;
}, startingValue);
 */

let durations = [1200, 850, 3400, 960, 2100];

// Add all durations together
let totalDuration = durations.reduce((total, duration) => {
    return total + duration;
}, 0); // start at 0

console.log(totalDuration); // 8510

// Shorthand arrow version
let total = durations.reduce((sum, ms) => sum + ms, 0);
console.log(total); // 8510


//Real automation use:

let testResults = [
    { name: "Login",    status: "pass", duration: 1200 },
    { name: "Search",   status: "fail", duration: 3400 },
    { name: "Checkout", status: "pass", duration: 850  },
    { name: "Payment",  status: "pass", duration: 960  }
];

// Count statuses
let counts = testResults.reduce((summary, test) => {
    summary[test.status] = (summary[test.status] || 0) + 1;
    return summary;
}, {});

console.log(counts); // { pass: 3, fail: 1 }

// Total duration
let totalMs = testResults.reduce((sum, test) => sum + test.duration, 0);
console.log(`Total: ${totalMs}ms`); // Total: 6410ms