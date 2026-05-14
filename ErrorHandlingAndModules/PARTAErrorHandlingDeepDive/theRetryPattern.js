/**
 * The Retry Pattern — Gold Standard in Automation
 * Flaky tests are the biggest problem in automation. 
 * The retry pattern handles temporary failures gracefully:
 * 
 */

async function withRetry(action, options = {}) {
    const {
        retries    = 3,
        delay      = 1000,
        testName   = "Unknown Test",
        onRetry    = null
    } = options;

    let lastError;

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`  🔄 Attempt ${attempt}/${retries}`);
            let result = await action();
            console.log(`  ✅ Succeeded on attempt ${attempt}`);
            return result; // success — return immediately

        } catch (error) {
            lastError = error;
            console.log(`  ⚠️  Attempt ${attempt} failed: ${error.message}`);

            if (onRetry) onRetry(attempt, error);

            // Don't wait after the last attempt
            if (attempt < retries) {
                console.log(`  ⏳ Waiting ${delay}ms before retry...`);
                await new Promise(r => setTimeout(r, delay));
            }
        }
    }

    // All retries exhausted
    throw new Error(
        `❌ "${testName}" failed after ${retries} attempts. Last error: ${lastError.message}`
    );
}

// ── Using the retry pattern ───────────────────────

let attemptCount = 0;

async function unstableLoginStep() {
    attemptCount++;
    // Simulates flaky behavior — fails first 2 times
    if (attemptCount < 3) {
        throw new Error("Network timeout — connection reset");
    }
    return "Login successful";
}

async function runFlakyTest() {
    try {
        console.log("🚀 Running Login Test with retry...\n");

        let result = await withRetry(
            unstableLoginStep,
            {
                retries:  3,
                delay:    500,
                testName: "Login Test",
                onRetry:  (attempt, error) => {
                    console.log(`  📝 Logged retry ${attempt} to report`);
                }
            }
        );

        console.log(`\n🎉 Test passed: ${result}`);

    } catch (error) {
        console.log(`\n💥 ${error.message}`);
    }
}

runFlakyTest();