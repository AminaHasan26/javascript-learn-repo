// ── CHILD CLASS — extends BasePage ───────────────
const BasePage = require('./BasePage');
class LoginPage extends BasePage {

    constructor(url) {
        super("Login Page", url);
//      ↑ calls BasePage constructor with these values
        this.loginAttempts = 0;
        this.maxAttempts   = 3;
    }

    // LoginPage-specific methods
    enterUsername(username) {
        console.log(`  ⌨️  Typing username: ${username}`);
    }

    enterPassword(password) {
        console.log(`  ⌨️  Typing password: ${"*".repeat(password.length)}`);
    }

    clickLogin() {
        this.loginAttempts++;
        console.log(`  🖱️  Clicking Login button (attempt ${this.loginAttempts})`);
    }

    login(username, password) {
        console.log(`\n--- Performing Login ---`);
        this.enterUsername(username);
        this.enterPassword(password);
        this.clickLogin();
    }

    isLocked() {
        return this.loginAttempts >= this.maxAttempts;
    }
}

module.exports = LoginPage;
