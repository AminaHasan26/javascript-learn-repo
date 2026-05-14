/**
 * The Page Object Model Preview
 * This is the direct real-world use of everything you just learned.
 *  Look how naturally classes map to automation pages:
 */

// ============================================
// Page Object Model — Industry Standard Pattern
// This is EXACTLY how real Playwright tests look
// ============================================

class BasePage {
    constructor(page, pageName) {
        this.page     = page;      // Playwright page object
        this.pageName = pageName;
    }

    async navigate(url) {
        console.log(`Navigating to ${url}`);
        // await this.page.goto(url);  ← real Playwright code
    }

    async takeScreenshot(name) {
        console.log(`Screenshot: ${name}`);
        // await this.page.screenshot({ path: `${name}.png` });
    }

    async waitForLoad() {
        console.log(`Waiting for ${this.pageName} to load...`);
        // await this.page.waitForLoadState("networkidle");
    }
}

class LoginPage extends BasePage {
    constructor(page) {
        super(page, "Login Page");

        // Locators — defined once, used everywhere
        this.usernameField = "#username";
        this.passwordField = "#password";
        this.loginButton   = "#login-btn";
        this.errorMessage  = ".error-message";
    }

    async login(username, password) {
        console.log(`Logging in as: ${username}`);
        // await this.page.fill(this.usernameField, username);
        // await this.page.fill(this.passwordField, password);
        // await this.page.click(this.loginButton);
    }

    async getErrorMessage() {
        console.log("Reading error message...");
        // return await this.page.textContent(this.errorMessage);
    }

    async isErrorVisible() {
        console.log("Checking if error is visible...");
        // return await this.page.isVisible(this.errorMessage);
    }
}

class DashboardPage extends BasePage {
    constructor(page) {
        super(page, "Dashboard Page");
        this.welcomeMessage = ".welcome-header";
        this.userMenu       = "#user-menu";
        this.logoutButton   = "#logout";
    }

    async getWelcomeText() {
        // return await this.page.textContent(this.welcomeMessage);
        return "Welcome, Priya!";
    }

    async logout() {
        console.log("Logging out...");
        // await this.page.click(this.userMenu);
        // await this.page.click(this.logoutButton);
    }
}

// ── How a real test uses Page Objects ────────────

async function runLoginTest() {
    // In real Playwright: const browser = await chromium.launch();
    // const page = await browser.newPage();
    const page = null; // placeholder for now

    const loginPage     = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);

    // Test steps read like plain English
    await loginPage.navigate("https://myapp.com/login");
    await loginPage.waitForLoad();
    await loginPage.login("priya@app.com", "Test@1234");
    await dashboardPage.waitForLoad();

    let welcome = await dashboardPage.getWelcomeText();
    console.log(`✅ Verified: ${welcome}`);

    await dashboardPage.logout();
    console.log("✅ Logout successful");
    await loginPage.takeScreenshot("post-logout");
}

runLoginTest();