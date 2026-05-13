let browsers = ["Chrome", "Firefox"];
let environments = ["dev", "staging", "prod"];

for (let browser of browsers) {
    for (let env of environments) {
        console.log(`Running on ${browser} — ${env}`);
    }
}

/**
 * This is exactly how real automation frameworks run cross-browser tests!
 * 2 browsers × 3 environments = 6 combinations, all generated automatically.
 */

//Putting It All Together — Real Scenario

// Simulating a test suite runner
let testSuite = [
    { name: "Login Test",    status: "pass", duration: 1200 },
    { name: "Checkout Test", status: "fail", duration: 3400 },
    { name: "Search Test",   status: "pass", duration: 800  },
    { name: "Payment Test",  status: "skip", duration: 0    },
    { name: "Logout Test",   status: "pass", duration: 600  }
];

let totalPassed = 0;
let totalFailed = 0;
let totalSkipped = 0;
let totalDuration = 0;

console.log("====== TEST SUITE RESULTS ======");

for (let test of testSuite) {
    totalDuration += test.duration;
    
    if (test.status === "pass") {
        totalPassed++;
        console.log(`PASS | ${test.name} (${test.duration}ms)`);
    } else if (test.status === "fail") {
        totalFailed++;
        console.log(`FAIL | ${test.name} (${test.duration}ms)`);
    } else if (test.status === "skip") {
        totalSkipped++;
        console.log(`SKIP | ${test.name}`);
    }
}

console.log("================================");
console.log(`Passed  : ${totalPassed}`);
console.log(`Failed  : ${totalFailed}`);
console.log(`Skipped : ${totalSkipped}`);
console.log(`Duration: ${totalDuration}ms`);
console.log(`Pass Rate: ${Math.round((totalPassed / (testSuite.length - totalSkipped)) * 100)}%`);