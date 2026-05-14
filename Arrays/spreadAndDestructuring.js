/**
 * Spread and Destructuring
 * Spread Operator ... — Expand an Array
 */

let smokeTests = ["Login", "Logout"];
let regressionTests = ["Search", "Checkout", "Payment"];

// Merge arrays
let allTests = [...smokeTests, ...regressionTests];
console.log(allTests);
// ["Login", "Logout", "Search", "Checkout", "Payment"]

// Copy an array (without linking to original)
let original = [1, 2, 3];
let copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] ← unchanged 
console.log(copy);     // [1, 2, 3, 4]

// Pass array items as individual arguments
let numbers = [10, 25, 8, 42, 3];
console.log(Math.max(...numbers)); // 42 

/**
 * Array Destructuring — Unpack Items Into Variables
 */

let testInfo = ["Login Test", "PASS", 1200, "Chrome"];

// Old way
let name = testInfo[0];
let status = testInfo[1];
let duration = testInfo[2];
let browser = testInfo[3];

// Destructuring — clean and modern 
let [testName, testStatus, testDuration, testBrowser] = testInfo;

console.log(testName);     // Login Test
console.log(testStatus);   // PASS
console.log(testDuration); // 1200
console.log(testBrowser);  // Chrome

// Skip items with commas
let [first, , third] = testInfo;
console.log(first); // Login Test
console.log(third); // 1200

// Grab first item + rest of array
let [head, ...rest] = testInfo;
console.log(head); // Login Test
console.log(rest); // ["PASS", 1200, "Chrome"]


/**
 * Putting It All Together — Real Automation Scenario
 */

// Complete test suite analyzer
const testSuite = [
    { id: 1,  name: "Login Test",       status: "pass", duration: 1200, priority: "critical" },
    { id: 2,  name: "Search Test",      status: "pass", duration: 850,  priority: "high"     },
    { id: 3,  name: "Checkout Test",    status: "fail", duration: 3400, priority: "critical" },
    { id: 4,  name: "Payment Test",     status: "fail", duration: 5100, priority: "critical" },
    { id: 5,  name: "Profile Update",   status: "pass", duration: 960,  priority: "medium"   },
    { id: 6,  name: "Logout Test",      status: "pass", duration: 600,  priority: "high"     },
    { id: 7,  name: "Password Reset",   status: "skip", duration: 0,    priority: "medium"   },
    { id: 8,  name: "Search Filters",   status: "fail", duration: 2800, priority: "high"     }
];

// Analysis using array methods
const passed   = testSuite.filter(t => t.status === "pass");
const failed   = testSuite.filter(t => t.status === "fail");
const skipped  = testSuite.filter(t => t.status === "skip");
const critical = testSuite.filter(t => t.priority === "critical");

const totalDuration = testSuite
    .filter(t => t.status !== "skip")
    .reduce((sum, t) => sum + t.duration, 0);

const slowTests = testSuite.filter(t => t.duration > 2000);

const passRate = Math.round((passed.length / 
    (passed.length + failed.length)) * 100);

const testNames = testSuite.map(t => t.name);

const hasAllCriticalPassed = critical
    .filter(t => t.status !== "skip")
    .every(t => t.status === "pass");

// Report
console.log("╔══════════════════════════════════════╗");
console.log("║        TEST SUITE ANALYSIS           ║");
console.log("╠══════════════════════════════════════╣");
console.log(`║  Total Tests  : ${testSuite.length}                    ║`);
console.log(`║  Passed       : ${passed.length}                    ║`);
console.log(`║  Failed       : ${failed.length}                    ║`);
console.log(`║  Skipped      : ${skipped.length}                    ║`);
console.log(`║  Pass Rate    : ${passRate}%                  ║`);
console.log(`║  Total Time   : ${(totalDuration/1000).toFixed(1)}s                 ║`);
console.log("╠══════════════════════════════════════╣");
console.log("║  FAILED TESTS:                       ║");
failed.forEach(t => {
    console.log(`║   ${t.name.padEnd(34)}║`);
});
console.log("╠══════════════════════════════════════╣");
console.log("║  SLOW TESTS (>2s):                   ║");
slowTests.forEach(t => {
    console.log(`║  🐌 ${t.name} (${t.duration}ms)`.padEnd(39) + "║");
});
console.log("╠══════════════════════════════════════╣");
console.log(`║  Critical Tests All Pass: ${hasAllCriticalPassed ? " NO " : " YES"}       ║`);
console.log("╚══════════════════════════════════════╝");