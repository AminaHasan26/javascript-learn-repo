// File: pages/LoginPage.js

class LoginPage {
    constructor(page) {
        this.page          = page;
        this.usernameInput = "#username";
        this.passwordInput = "#password";
        this.loginButton   = "#login-btn";
    }

    async navigate() {
        await this.page.goto(`${BASE_URL}/login`);
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }
}

export default LoginPage; // ONE default export per file