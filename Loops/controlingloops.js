/**
 * Controlling Loops — break and continue
 * break — Exit the Loop Immediately
 * continue — Skip This Iteration, Keep Going
 */

let testResults = ["pass", "pass", "fail", "pass", "pass"];

for (let result of testResults) {
    if (result === "fail") {
        console.log("Critical failure found — stopping test run");
        break; // exits the loop immediately
    }
    console.log(`Test ${result}`);
}

console.log("Loop ended");

//continue

let testCases = ["login", "SKIP", "checkout", "SKIP", "payment"];

for (let testCase of testCases) {
    if (testCase === "SKIP") {
        console.log(`Skipping: ${testCase}`);
        continue; // skip this one, go to next
    }
    console.log(`Running: ${testCase}`);
}

//break vs continue — Side by Side

// BREAK — stops the whole loop
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}
// Output: 1, 2

// CONTINUE — skips just this iteration
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i);
}
// Output: 1, 2, 4, 5