//Structure 1 — Simple if

/**if (condition) {
    // code runs ONLY if condition is true
}

*/

let isLoggedIn = true;


if (isLoggedIn) {
    console.log("Welcome! Redirecting to dashboard...");
}

// What if it's false?
isLoggedIn = false;

if (isLoggedIn) {
    console.log("Welcome!"); // ← this is SKIPPED entirely
}

console.log("This always runs"); // ← this runs regardless