/**
 * Nested Objects
 * Objects can contain other objects. This is extremely common in automation configs.
 */

let testConfig = {
    project: "MyBankApp",
    version: "2.4.1",

    browser: {
        name: "Chrome",
        headless: false,
        viewport: {
            width: 1920,
            height: 1080
        }
    },

    credentials: {
        admin: {
            email: "admin@myapp.com",
            password: "Admin@123"
        },
        viewer: {
            email: "viewer@myapp.com",
            password: "View@123"
        }
    },

    timeouts: {
        navigation: 30000,
        element: 10000,
        assertion: 5000
    }
};

// Accessing nested properties
console.log(testConfig.browser.name);                    // Chrome
console.log(testConfig.browser.viewport.width);          // 1920
console.log(testConfig.credentials.admin.email);         // admin@myapp.com
console.log(testConfig.timeouts.navigation);             // 30000

// Updating nested values
testConfig.browser.headless = true;
testConfig.browser.viewport.width = 1366;

console.log(testConfig.browser.headless);        // true
console.log(testConfig.browser.viewport.width);  // 1366