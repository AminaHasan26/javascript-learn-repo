/**
 * Structure 3 — if / else if / else
When you have more than two possibilities:
 * 
 * if (firstCondition) {
    // runs if firstCondition is true
} else if (secondCondition) {
    // runs if firstCondition is false BUT secondCondition is true
} else if (thirdCondition) {
    // runs if both above are false BUT this is true
} else {
    // runs if ALL conditions above are false
}
 */

//Real automation example:

let httpStatusCode = 404;

if (httpStatusCode === 200) {
    console.log("✅ Page loaded successfully");
} else if (httpStatusCode === 401) {
    console.log("🔒 Unauthorized — user not logged in");
} else if (httpStatusCode === 403) {
    console.log("⛔ Forbidden — user lacks permission");
} else if (httpStatusCode === 404) {
    console.log("🔍 Page not found");
} else if (httpStatusCode === 500) {
    console.log("💥 Server error");
} else {
    console.log(`⚠️ Unexpected status code: ${httpStatusCode}`);
}