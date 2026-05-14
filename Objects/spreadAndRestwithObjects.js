/**
 * Spread — Copy and Merge Objects
 */

let baseConfig = {
    headless: true,
    timeout: 30000,
    retries: 2
};

// Copy an object
let configCopy = { ...baseConfig };
configCopy.headless = false;
console.log(baseConfig.headless); // true ← original safe 
console.log(configCopy.headless); // false

// Merge objects — later values override earlier ones
let chromeConfig = {
    ...baseConfig,
    browser: "Chrome",
    headless: false    // overrides baseConfig.headless
};

console.log(chromeConfig);
// { headless: false, timeout: 30000, retries: 2, browser: "Chrome" }

// Merging test data with overrides
let defaultUser = {
    role: "viewer",
    isActive: true,
    language: "English"
};

let adminUser = {
    ...defaultUser,      // copy all defaults
    role: "admin",       // override role
    email: "admin@app.com"  // add new property
};

console.log(adminUser);
// { role: "admin", isActive: true, language: "English", email: "admin@app.com" }