/**
 * Finally — Always Clean Up
 */

async function runTestWithCleanup(testName) {
    let browser = null;

    try {
        console.log(`\n ${testName} starting`);
        browser = "Chrome"; // simulate browser launch

        console.log(" Navigating to page...");
        console.log("  Filling form...");

        // Simulate a failure mid-test
        throw new Error("Assertion failed — wrong page title");

        console.log(" Test passed"); // never reached

    } catch (error) {
        console.log(` Test failed: ${error.message}`);
        console.log(" Saving failure screenshot...");

        // Re-throw if you want the test runner to know it failed
        // throw error;

    } finally {
        // This ALWAYS runs — success or failure
        if (browser) {
            console.log(" Closing browser — always happens");
        }
        console.log(" Updating test report — always happens");
        console.log(" Cleanup complete");
    }
}

runTestWithCleanup("Checkout Flow");