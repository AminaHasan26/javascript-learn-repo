//Named + Default Together

// File: pages/LoginPage.js

// Named exports — helper things
export const LOGIN_URL    = "https://myapp.com/login";
export const MAX_ATTEMPTS = 3;

// Default export — main class
export default class LoginPage {
    constructor(page) {
        this.page = page;
    }
    // methods...
}

// Importing both
import LoginPage2, { LOGIN_URL, MAX_ATTEMPTS } from "./pages/LoginPage.js";

console.log(LOGIN_URL);    // https://myapp.com/login
console.log(MAX_ATTEMPTS); // 3
let loginPage = new LoginPage(page);