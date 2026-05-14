// File: tests/loginTest.js

const LoginPage = require("./Pages/LoginPage");

// Use it
let loginPage = new LoginPage(page);
 loginPage.navigate("https://myapp.com/login");
loginPage.login("priya@test.com", "Test@1234");