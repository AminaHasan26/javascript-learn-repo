/**Structure 6 — switch Statement
When you're comparing one variable against many possible values, switch is cleaner than many else if blocks: */

let browser = "Firefox";

switch (browser) {
    case "Chrome":
        console.log("Running tests on Chrome");
        break;
    case "Firefox":
        console.log("Running tests on Firefox");
        break;
    case "Safari":
        console.log("Running tests on Safari");
        break;
    case "Edge":
        console.log("Running tests on Edge");
        break;
    default:
        console.log(`Browser "${browser}" not supported`);
}

/**
 * Line by line:

switch (browser) — "look at the value of browser"
case "Chrome": — "if it equals Chrome, run this block"
break — "stop here, don't fall into the next case"
default: — "if nothing matched, run this" (like the final else)
 */

// The break Mistake — Fall-through

// ❌ Forgetting break — DANGEROUS
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of week");
        // ← no break!
    case "Tuesday":
        console.log("Second day");
        // ← no break!
    case "Wednesday":
        console.log("Midweek");
        break;
}

// Output:
// Start of week
// Second day      ← ran even though day is Monday!
// Midweek         ← ran even though day is Monday!

//Always add break after each case unless you intentionally want fall-through.

//Combining Everything — Real Automation Scenario

let username = "priya@test.com";
let password = "Test@1234";
let isAccountLocked = false;
let loginAttempts = 2;
let maxAttempts = 3;

// Check 1 — is account locked?
if (isAccountLocked) {
    console.log("❌ Account is locked. Please contact support.");

// Check 2 — have they exceeded attempts?
} else if (loginAttempts >= maxAttempts) {
    console.log("❌ Too many failed attempts. Account will be locked.");

// Check 3 — validate credentials
} else if (username === "" || password === "") {
    console.log("❌ Username and password are required.");

} else if (password.length < 8) {
    console.log("❌ Password must be at least 8 characters.");

} else if (!username.includes("@")) {
    console.log("❌ Please enter a valid email address.");

} else {
    // All checks passed
    let remainingAttempts = maxAttempts - loginAttempts;
    console.log(`✅ Credentials valid. ${remainingAttempts} attempt(s) remaining before lockout.`);
}