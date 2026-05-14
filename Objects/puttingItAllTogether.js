/**
 * Putting It All Together — Real Automation Scenario
 */

// ============================================
// Complete Test Data Manager
// ============================================

const testData = {
    environments: {
        dev:     { url: "https://dev.myapp.com",     db: "dev_db"     },
        staging: { url: "https://staging.myapp.com", db: "staging_db" },
        prod:    { url: "https://myapp.com",          db: "prod_db"    }
    },

    users: {
        admin:   { email: "admin@myapp.com",   password: "Admin@123",   role: "admin"   },
        manager: { email: "manager@myapp.com", password: "Manager@123", role: "manager" },
        viewer:  { email: "viewer@myapp.com",  password: "Viewer@123",  role: "viewer"  }
    },

    browsers: ["Chrome", "Firefox", "Edge"],

    suiteResults: []
};

// Helper methods
function addTestResult(name, status, duration, browser) {
    testData.suiteResults.push({
        id: testData.suiteResults.length + 1,
        name,
        status,
        duration,
        browser,
        timestamp: new Date().toISOString()
    });
}

function getEnvironmentUrl(env) {
    const environment = testData.environments[env];
    if (!environment) return "❌ Unknown environment";
    return environment.url;
}

function getUserCredentials(role) {
    const user = testData.users[role];
    if (!user) return null;
    return { email: user.email, password: user.password };
}

function printSuiteReport() {
    const results = testData.suiteResults;
    const passed  = results.filter(t => t.status === "pass");
    const failed  = results.filter(t => t.status === "fail");
    const total   = results.reduce((sum, t) => sum + t.duration, 0);
    const rate    = Math.round((passed.length / results.length) * 100);

    console.log("╔══════════════════════════════════════════╗");
    console.log("║          AUTOMATION SUITE REPORT         ║");
    console.log("╠══════════════════════════════════════════╣");

    results.forEach(({ name, status, duration, browser }) => {
        let icon = status === "pass" ? "✅" : "❌";
        console.log(`║ ${icon} ${name.padEnd(20)} ${String(duration+"ms").padEnd(8)} ${browser.padEnd(9)}║`);
    });

    console.log("╠══════════════════════════════════════════╣");
    console.log(`║  Passed   : ${String(passed.length).padEnd(30)}║`);
    console.log(`║  Failed   : ${String(failed.length).padEnd(30)}║`);
    console.log(`║  Pass Rate: ${String(rate+"%").padEnd(30)}║`);
    console.log(`║  Duration : ${String(total+"ms").padEnd(30)}║`);
    console.log("╚══════════════════════════════════════════╝");
}

// Simulate using the data manager
console.log(getEnvironmentUrl("staging"));
// https://staging.myapp.com

console.log(getUserCredentials("admin"));
// { email: "admin@myapp.com", password: "Admin@123" }

// Simulate adding results
addTestResult("Login Test",    "pass", 1200, "Chrome");
addTestResult("Search Test",   "pass", 850,  "Chrome");
addTestResult("Checkout Test", "fail", 3400, "Firefox");
addTestResult("Payment Test",  "pass", 960,  "Chrome");
addTestResult("Logout Test",   "fail", 1800, "Edge");

printSuiteReport();