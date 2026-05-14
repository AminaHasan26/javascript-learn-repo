// ── USING INHERITANCE ─────────────────────────────

const LoginPage = require('./LoginPage');
const DashboardPage = require('./DashboardPage');

let loginPage     = new LoginPage("https://myapp.com/login");
let dashboardPage = new DashboardPage("https://myapp.com/dashboard", "admin");

// Methods INHERITED from BasePage
loginPage.navigate();
loginPage.verifyLoaded();

// LoginPage-specific methods
loginPage.login("priya@app.com", "Test@1234");

// Dashboard — inherited + own methods
dashboardPage.navigate();
dashboardPage.verifyWelcomeMessage("Priya");
dashboardPage.verifyRoleAccess();
dashboardPage.addWidget("Reports");
dashboardPage.addWidget("User Management");

// Inherited method — works on both
loginPage.takeScreenshot();
dashboardPage.takeScreenshot();