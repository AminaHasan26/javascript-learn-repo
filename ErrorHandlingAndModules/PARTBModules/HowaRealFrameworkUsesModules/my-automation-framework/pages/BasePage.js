import { config } from "../config/config.js";

export default class BasePage {

    constructor(page, pageName) {
        this.page     = page;
        this.pageName = pageName;
        this.timeout  = config.timeouts.element;
    }

    async navigate(path = "") {
        await this.page.goto(`${config.baseURL}${path}`);
        console.log(`📄 Navigated to: ${this.pageName}`);
    }

    async waitForLoad() {
        await this.page.waitForLoadState("networkidle");
    }

    async takeScreenshot(label) {
        await this.page.screenshot({
            path: `./screenshots/${label}-${Date.now()}.png`
        });
        console.log(`📸 Screenshot: ${label}`);
    }

    async getTitle() {
        return await this.page.title();
    }
}