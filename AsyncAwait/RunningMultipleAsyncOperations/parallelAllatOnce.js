/**
 * Parallel — All at Once with Promise.all
 */

async function runParallel() {
    console.log("Running tests in parallel...\n");

    let start = Date.now();

    // All three START simultaneously — finish when ALL done
    await Promise.all([
        wait(1000, " Test 1: Login — PASSED"),
        wait(1000, "Test 2: Search — PASSED"),
        wait(1000, " Test 3: Checkout — PASSED")
    ]);

    let total = ((Date.now() - start) / 1000).toFixed(1);
    console.log(`\n  Total time: ${total}s`); // ~1 second — 3x faster!
}

runParallel();

//This is exactly how Playwright runs tests in parallel across multiple browsers!

/**
 * Promise.allSettled — Run All, Collect All Results
 */

async function runAllTests() {
    let testPromises = [
        waitForValue(500,  "Test 1 complete", { name: "Login",    status: "pass" }),
        waitForValue(800,  "Test 2 complete", { name: "Search",   status: "pass" }),
        waitForValue(600,  "Test 3 complete", { name: "Checkout", status: "fail" }),
        waitForValue(1000, "Test 4 complete", { name: "Payment",  status: "pass" })
    ];

    // allSettled waits for ALL — even if some fail
    let results = await Promise.allSettled(testPromises);

    console.log("\n All Results:");
    results.forEach(result => {
        if (result.status === "fulfilled") {
            let test = result.value;
            let icon = test.status === "pass" ? "✅" : "❌";
            console.log(`  ${icon} ${test.name}`);
        } else {
            console.log(` Test crashed: ${result.reason}`);
        }
    });
}

runAllTests();