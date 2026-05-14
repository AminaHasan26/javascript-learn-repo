// Everything imported — clean and organized
import { test, expect } from "@playwright/test";
import LoginPage        from "../pages/LoginPage.js";
import DashboardPage    from "../pages/DashboardPage.js";
import { users, invalidUsers } from "../data/users.js";
import { baseURL }      from "../config/config.js";
import { withRetry }    from "../helpers/testUtils.js";

test.describe("Login Tests", () => {

    test("Valid admin login", async ({ page }) => {
        const loginPage     = new LoginPage(page);
        const dashboardPage = new DashboardPage(page);

        await loginPage.navigate("/login");
        await loginPage.login(users.admin.email, users.admin.password);
        await dashboardPage.waitForLoad();

        await expect(page).toHaveURL(/dashboard/);
    });

    test("Invalid credentials show error", async ({ page }) => {
        const loginPage = new LoginPage(page);

        await loginPage.navigate("/login");
        await loginPage.login("wrong@email.com", "wrongpassword");

        let error = await loginPage.getErrorMessage();
        expect(error).toContain("Invalid username or password");
    });

    // Loop through multiple invalid scenarios
    for (let userData of invalidUsers) {
        test(`Validation: ${userData.scenario}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.navigate("/login");
            await loginPage.login(userData.email, userData.password);
            expect(await loginPage.isErrorVisible()).toBe(true);
        });
    }
});

/**
 * This is what your complete Playwright framework will look like. Every concept you've learned — classes, async/await, error handling, modules — all working together.
 */