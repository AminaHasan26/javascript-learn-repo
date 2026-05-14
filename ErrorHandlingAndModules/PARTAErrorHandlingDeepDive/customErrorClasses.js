/**
 * Custom Error Classes
 * For large automation frameworks you create custom error types so you can handle different failures differently:
 * 
 */

// Custom error classes — extend built-in Error
class AutomationError extends Error {
    constructor(message, testName, screenshot) {
        super(message);              // call parent Error constructor
        this.name      = "AutomationError";
        this.testName  = testName;
        this.screenshot = screenshot;
        this.timestamp = new Date().toISOString();
    }
}

class ElementNotFoundError extends AutomationError {
    constructor(selector, testName) {
        super(`Element not found: "${selector}"`, testName, true);
        this.name     = "ElementNotFoundError";
        this.selector = selector;
    }
}

class NavigationError extends AutomationError {
    constructor(url, statusCode, testName) {
        super(`Navigation failed to "${url}" — Status: ${statusCode}`, testName, true);
        this.name       = "NavigationError";
        this.url        = url;
        this.statusCode = statusCode;
    }
}

class AssertionError extends AutomationError {
    constructor(expected, actual, testName) {
        super(`Assertion failed — Expected: "${expected}" Got: "${actual}"`, testName, true);
        this.name     = "AssertionError";
        this.expected = expected;
        this.actual   = actual;
    }
}

// ── Using custom errors ───────────────────────────

async function runTest(testName) {
    try {
        console.log(`\n🚀 Running: ${testName}`);

        // Simulate different types of failures
        let random = Math.random();

        if (random < 0.33) {
            throw new ElementNotFoundError("#submit-button", testName);
        } else if (random < 0.66) {
            throw new NavigationError("https://myapp.com/dashboard", 404, testName);
        } else if (random < 0.85) {
            throw new AssertionError("Welcome, Priya!", "Welcome, undefined!", testName);
        }

        console.log(`✅ ${testName} PASSED`);

    } catch (error) {

        // Handle DIFFERENT errors DIFFERENTLY
        if (error instanceof ElementNotFoundError) {
            console.log(`❌ ELEMENT ERROR in ${error.testName}`);
            console.log(`   Selector: ${error.selector}`);
            console.log(`   Action: Check if selector is still valid`);

        } else if (error instanceof NavigationError) {
            console.log(`❌ NAVIGATION ERROR in ${error.testName}`);
            console.log(`   URL: ${error.url}`);
            console.log(`   Status: ${error.statusCode}`);
            console.log(`   Action: Check if page exists and environment is up`);

        } else if (error instanceof AssertionError) {
            console.log(`❌ ASSERTION ERROR in ${error.testName}`);
            console.log(`   Expected : ${error.expected}`);
            console.log(`   Actual   : ${error.actual}`);
            console.log(`   Action: Check application state`);

        } else {
            console.log(`💥 UNKNOWN ERROR: ${error.message}`);
        }

        if (error.screenshot) {
            console.log(`   📸 Screenshot saved: ${testName}-failure.png`);
        }
    }
}

// Run it a few times to see different errors
await runTest("Login Flow Test");
await runTest("Checkout Flow Test");
await runTest("Payment Flow Test");