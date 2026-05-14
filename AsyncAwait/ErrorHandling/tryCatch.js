/**
 * Part D — Error Handling with Try/Catch
 * 
 *What happens when something goes wrong? A page doesn't load? An element isn't found?
Without error handling — your entire test crashes with an ugly error.
With try/catch — you handle it gracefully.
 */

// Real-world analogy:
// try   = "attempt this action"
// catch = "if it fails, do THIS instead"
// finally = "always do this no matter what"

async function runTest() {
    try {
        // TRY to do these things
        console.log(" Loading page...");
        await wait(1000, " Page loaded");

        // Simulate something going wrong
        throw new Error("Element #submit-btn not found on page");

        // This line never runs if error thrown above
        console.log("This won't run");

    } catch (error) {
        // CATCH handles the failure
        console.log(`\n Test failed: ${error.message}`);
        console.log(" Taking failure screenshot...");
        console.log(" Logging error to report...");

    } finally {
        // FINALLY always runs — success OR failure
        console.log("\n Cleaning up...");
        console.log(" Closing browser...");
        console.log(" Updating test report...");
    }
}

runTest();