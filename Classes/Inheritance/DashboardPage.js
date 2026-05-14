// ── ANOTHER CHILD CLASS ───────────────────────────
const BasePage = require('./BasePage');
class DashboardPage extends BasePage {

    constructor(url, userRole) {
        super("Dashboard Page", url);
        this.userRole = userRole;
        this.widgets  = [];
    }

    addWidget(widgetName) {
        this.widgets.push(widgetName);
        console.log(`  📊 Widget added: ${widgetName}`);
    }

    verifyWelcomeMessage(userName) {
        console.log(`  ✅ Verifying welcome message for: ${userName}`);
    }

    verifyRoleAccess() {
        const adminWidgets   = ["User Management", "Reports", "Settings"];
        const managerWidgets = ["Reports", "Team View"];
        const viewerWidgets  = ["Dashboard View"];

        let expectedWidgets =
            this.userRole === "admin"   ? adminWidgets   :
            this.userRole === "manager" ? managerWidgets :
            viewerWidgets;

        console.log(`  🔐 Expected widgets for ${this.userRole}:`);
        expectedWidgets.forEach(w => console.log(`     - ${w}`));
    }
}


module.exports = DashboardPage;