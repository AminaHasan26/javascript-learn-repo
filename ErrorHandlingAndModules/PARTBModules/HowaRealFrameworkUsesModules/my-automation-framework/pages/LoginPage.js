import BasePage from "./BasePage.js";

export default class LoginPage extends BasePage {

    constructor(page) {
        super(page, "Login Page");

        // All locators defined in one place
        this.locators = {
            username:     "#username",
            password:     "#password",
            loginBtn:     "#login-btn",
            errorMsg:     ".error-message",
            forgotPass:   "a[href='/forgot-password']",
            rememberMe:   "#remember-me"
        };
    }

    async login(username, password) {
        await this.page.fill(this.locators.username, username);
        await this.page.fill(this.locators.password, password);
        await this.page.click(this.locators.loginBtn);
    }

    async getErrorMessage() {
        return await this.page.textContent(this.locators.errorMsg);
    }

    async isErrorVisible() {
        return await this.page.isVisible(this.locators.errorMsg);
    }

    async clickForgotPassword() {
        await this.page.click(this.locators.forgotPass);
    }
}