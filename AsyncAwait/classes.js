/**
 * Part F — Async in Classes
 * Async methods work perfectly inside classes — 
 * which is exactly how Page Objects work in Playwright:
 */

class LoginPage {

    constructor(pageName) {
        this.pageName      = pageName;
        this.url           = "https://myapp.com/login";
        this.isLoaded      = false;
        this.loginAttempts = 0;
    }

    // Async method — returns a Promise automatically
    async navigate() {
        await wait(1000, ` Navigated to ${this.url}`);
        this.isLoaded = true;
    }

    async fillUsername(username) {
        if (!this.isLoaded) throw new Error("Page not loaded yet!");
        await wait(400, `  Username: ${username}`);
    }

    async fillPassword(password) {
        if (!this.isLoaded) throw new Error("Page not loaded yet!");
        await wait(400, `  Password: ${"*".repeat(password.length)}`);
    }

    async clickLogin() {
        await wait(300, "  Clicked Login button");
        this.loginAttempts++;
    }

    async login(username, password) {
        console.log(`\n--- Login Attempt ${this.loginAttempts + 1} ---`);
        await this.fillUsername(username);
        await this.fillPassword(password);
        await this.clickLogin();
    }

    async getErrorMessage() {
        return await waitForValue(
            300,
            " Reading error message...",
            "Invalid username or password"
        );
    }
}

class DashboardPage {

    async verifyLoaded() {
        await wait(1500, " Dashboard loaded");
    }

    async getWelcomeText() {
        return await waitForValue(
            300,
            " Reading welcome text...",
            "Welcome back, Priya!"
        );
    }

    async logout() {
        await wait(300, "  Clicked user menu");
        await wait(300, "  Clicked logout");
        await wait(500, "Redirected to login page");
    }
}

// ── The test ─────────────────────────────────────

async function runSmokeTest() {
    console.log(" Smoke Test: Login Flow\n");

    let loginPage     = new LoginPage("Login Page");
    let dashboardPage = new DashboardPage();

    try {
        // Navigate and login
        await loginPage.navigate();
        await loginPage.login("priya@app.com", "Test@1234");

        // Verify dashboard
        await dashboardPage.verifyLoaded();
        let welcome = await dashboardPage.getWelcomeText();
        console.log(`\n   Verified: "${welcome}"`);

        // Logout
        await dashboardPage.logout();
        console.log("  Logout successful");

        console.log("\n Smoke Test: PASSED");

    } catch (error) {
        console.log(`\n Smoke Test FAILED: ${error.message}`);
    }
}

runSmokeTest();


/**
 * This is EXACTLY what your Playwright tests will look like — 
 * just replace the wait() and waitForValue() helpers with real Playwright commands.
 */