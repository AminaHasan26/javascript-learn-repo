/**
 * Object.keys() — Get All Keys
 */

let testConfig = {
    browser: "Chrome",
    environment: "staging",
    headless: true,
    timeout: 30000
};

let keys = Object.keys(testConfig);
console.log(keys);
// ["browser", "environment", "headless", "timeout"]

// Loop through keys
Object.keys(testConfig).forEach(key => {
    console.log(`${key}: ${testConfig[key]}`);
});

/**
 * Object.values() — Get All Values
 */

let values = Object.values(testConfig);
console.log(values);
// ["Chrome", "staging", true, 30000]

/**
 * Object.entries() — Get Key-Value Pairs
 */

let entries = Object.entries(testConfig);
console.log(entries);
// [
//   ["browser", "Chrome"],
//   ["environment", "staging"],
//   ["headless", true],
//   ["timeout", 30000]
// ]

// Loop with destructuring
Object.entries(testConfig).forEach(([key, value]) => {
    console.log(`${key.padEnd(15)}: ${value}`);
});