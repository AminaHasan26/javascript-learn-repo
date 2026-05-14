async function safeClick(elementName) {
    try {
        await wait(300, `🖱️  Clicking: ${elementName}`);
        return true; // success
    } catch (error) {
        console.log(`❌ Could not click ${elementName}: ${error.message}`);
        return false; // failure
    }
}

async function safeGetText(elementName, fallback = "") {
    try {
        let text = await waitForValue(300, `📖 Reading: ${elementName}`, "Welcome, Priya!");
        return text;
    } catch (error) {
        console.log(`⚠️  Could not read ${elementName} — using fallback`);
        return fallback;
    }
}

async function fullTestFlow() {
    try {
        await wait(1000, "📄 Navigated to login page");
        await wait(500,  "⌨️  Username entered");
        await wait(500,  "⌨️  Password entered");

        let clicked = await safeClick("Login Button");

        if (!clicked) {
            throw new Error("Login button click failed");
        }

        await wait(1500, "📄 Dashboard loaded");

        let welcomeText = await safeGetText("Welcome Header");
        console.log(`✅ Got text: "${welcomeText}"`);

        await wait(500, "📸 Screenshot taken");
        console.log("\n🎉 Test PASSED");

    } catch (error) {
        console.log(`\n💥 Critical failure: ${error.message}`);

    } finally {
        console.log("🧹 Browser closed");
    }
}

fullTestFlow();