/**if (condition) {
    // runs if condition is TRUE
} else {
    // runs if condition is FALSE
} */

let loginStatus = "failed";

if (loginStatus === "success") {
    console.log("✅ Test Passed — User logged in successfully");
} else {
    console.log("❌ Test Failed — Login did not succeed");
}

//Real automation scenario:

let errorMessageVisible = true;
let expectedError = "Invalid username or password";
let actualError = "Invalid username or password";

if (actualError === expectedError) {
    console.log("✅ Correct error message displayed");
} else {
    console.log(`❌ Wrong error. Expected: "${expectedError}" Got: "${actualError}"`);
}