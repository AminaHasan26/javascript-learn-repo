// File: pages/LoginPage.js

class LoginPage {
    constructor(page) {
        this.page         = page;
        this.usernameInput = "#username";
        this.passwordInput = "#password";
        this.loginButton   = "#login-btn";
        this.errorMessage  = ".error-msg";
    }

    async navigate(url) {
        await this.page.goto(url);
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}

// Export the class
module.exports = LoginPage;