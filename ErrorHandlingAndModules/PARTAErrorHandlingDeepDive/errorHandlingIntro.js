/**
 * PART A — Error Handling (Deep Dive)
 * You saw try/catch briefly in async/await. Now we go completely deep — because in automation, 
 * things go wrong constantly and how your framework handles failure defines its quality.
 */

/**
 * Why Error Handling Matters in Automation
 * Without error handling:          With error handling:
─────────────────────────        ──────────────────────────────
Test fails                       Test fails
Ugly stack trace printed         Clean message: "Login button not found"
No screenshot taken              Screenshot taken automatically
Browser left open                Browser closed cleanly
No report updated                Report marked as failed with details
Next test can't run              Next test runs normally
Team has no idea what failed     Team sees exactly what failed and why

The difference between a junior and senior automation engineer 
is often just how well they handle failures.
 */


/**
 * The Error Object
 * When something goes wrong JavaScript creates an Error object with useful information:
 * 
 * try {
    let result = null;
    console.log(result.name); // TypeError — can't read property of null
} catch (error) {
    console.log(error.name);    // TypeError
    console.log(error.message); // Cannot read properties of null
    console.log(error.stack);   // Full stack trace with line numbers
}
 */

//Built-in Error Types

// TypeError — wrong type used
try {
    null.toString();
} catch (e) {
    console.log(e.name); // TypeError
}

// ReferenceError — variable doesn't exist
try {
    console.log(undeclaredVariable);
} catch (e) {
    console.log(e.name); // ReferenceError
}

// SyntaxError — invalid code (caught at parse time)
// eval("if (true {"); // SyntaxError

// RangeError — value out of allowed range
try {
    let arr = new Array(-1);
} catch (e) {
    console.log(e.name); // RangeError
}


//Throwing Your Own Errors
console.log("*****************Throwing Your Own Errors******************");

function validateCredentials(username, password) {
    if (!username || username.trim() === "") {
        throw new Error("Username cannot be empty");
    }
    if (!password || password.length < 8) {
        throw new Error(`Password too short: ${password?.length ?? 0} chars (minimum 8)`);
    }
    if (!username.includes("@")) {
        throw new Error(`Invalid email format: "${username}"`);
    }
    return true;
}

// Using it
try {
    validateCredentials("", "Test@1234");
} catch (error) {
    console.log(`❌ Validation failed: ${error.message}`);
}

try {
    validateCredentials("priya@test.com", "abc");
} catch (error) {
    console.log(`❌ Validation failed: ${error.message}`);
}

try {
    validateCredentials("priya@test.com", "Test@1234");
    console.log("✅ Credentials valid");
} catch (error) {
    console.log(`❌ Validation failed: ${error.message}`);
}