/**
 * Loop 5 — for...in Loop
For Looping Through Object Properties
 */

let testConfig = {
    browser: "Chrome",
    environment: "staging",
    headless: true,
    timeout: 30000,
    retries: 2
};

for (let key in testConfig) {
    console.log(`${key}: ${testConfig[key]}`);
}

//real outomation

// Print full test configuration before running
console.log("=== Test Configuration ===");
for (let setting in testConfig) {
    console.log(`  ${setting.padEnd(15)}: ${testConfig[setting]}`);
}
console.log("==========================");