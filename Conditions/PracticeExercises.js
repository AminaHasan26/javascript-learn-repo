/**
 * 🏋️ Practice — Conditions
Challenge 1 — Login Validator:
javascriptlet username = ""; // try different values
let password = "Test@123";
let isAccountActive = true;
Write conditions that print:

"❌ Username is required" if username is empty
"❌ Password must be 8+ characters" if password is too short
"❌ Account is deactivated" if account is not active
"✅ Login successful" only if ALL three conditions pass


Challenge 2 — Test Result Classifier:
javascriptlet testDuration = 4500; // in milliseconds
let assertionsPassed = 8;
let assertionsTotal = 10;
let hasConsoleErrors = false;
Write conditions that print:

"⚡ Fast" if duration under 2000ms
"✅ Acceptable" if duration 2000–5000ms
"🐌 Slow" if duration over 5000ms

Then separately:

"✅ All assertions passed" if passed equals total AND no console errors
"⚠️ Partial pass" if some passed but not all
"❌ Test failed" if none passed


Challenge 3 — Ternary Practice:
Rewrite these using ternary operators:
javascript// Rewrite this:
let buttonState;
if (isFormValid) {
    buttonState = "enabled";
} else {
    buttonState = "disabled";
}

// And this:
let welcomeMessage;
if (userName !== "") {
    welcomeMessage = `Hello, ${userName}!`;
} else {
    welcomeMessage = "Hello, Guest!";
}

Challenge 4 — Switch Statement:
javascriptlet testEnvironment = "staging"; // try: "dev", "staging", "prod", "local"
Using switch, print:

dev → "Using dev URL: https://dev.myapp.com"
staging → "Using staging URL: https://staging.myapp.com"
prod → "Using production URL: https://myapp.com"
local → "Using local URL: http://localhost:3000"
anything else → "Unknown environment!"


Challenge 5 — The Tricky One:
javascriptlet userRole = "editor";
let isSubscriptionActive = true;
let articlesWritten = 3;
Write logic that determines access level and prints:

If role is "admin" → "Full access granted"
If role is "editor" AND subscription is active AND articles > 0 → "Editor access granted"
If role is "editor" AND subscription is NOT active → "Please renew your subscription"
If role is "viewer" → "Read-only access"
Anything else → "Access denied"


 */