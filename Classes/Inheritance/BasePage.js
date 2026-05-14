// BASE CLASS — shared foundation
class BasePage {

    constructor(pageName, url) {
        this.pageName = pageName;
        this.url      = url;
        this.isLoaded = false;
    }

    navigate() {
        console.log(`🌐 Navigating to ${this.pageName}: ${this.url}`);
        this.isLoaded = true;
    }

    getTitle() {
        return this.pageName;
    }

    verifyLoaded() {
        if (this.isLoaded) {
            console.log(`✅ ${this.pageName} loaded successfully`);
        } else {
            console.log(`❌ ${this.pageName} not loaded yet`);
        }
    }

    takeScreenshot() {
        console.log(`📸 Screenshot taken of ${this.pageName}`);
    }
}

module.exports = BasePage;