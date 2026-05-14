/**
 * Class with Full Methods
 */

class User {

    constructor(name, email, role) {
        this.name       = name;
        this.email      = email;
        this.role       = role;
        this.isLoggedIn = false;
        this.loginCount = 0;
        this.lastLogin  = null;
    }

    // ── Actions ──────────────────────────────

    login() {
        if (this.isLoggedIn) {
            console.log(`⚠️  ${this.name} is already logged in`);
            return;
        }
        this.isLoggedIn = true;
        this.loginCount++;
        this.lastLogin = new Date().toLocaleTimeString();
        console.log(`✅ ${this.name} logged in at ${this.lastLogin}`);
    }

    logout() {
        if (!this.isLoggedIn) {
            console.log(`⚠️  ${this.name} is not logged in`);
            return;
        }
        this.isLoggedIn = false;
        console.log(`👋 ${this.name} logged out`);
    }

    // ── Getters — return information ─────────

    isAdmin() {
        return this.role === "admin";
    }

    canEdit() {
        return this.role === "admin" || this.role === "manager";
    }

    getProfile() {
        return {
            name:       this.name,
            email:      this.email,
            role:       this.role,
            loginCount: this.loginCount,
            status:     this.isLoggedIn ? "Online" : "Offline"
        };
    }

    // ── Display ──────────────────────────────

    printProfile() {
        let profile = this.getProfile();
        console.log("================================");
        Object.entries(profile).forEach(([key, val]) => {
            console.log(`  ${key.padEnd(12)}: ${val}`);
        });
        console.log("================================");
    }
}

// ── Usage ────────────────────────────────────

let admin   = new User("Priya",  "priya@app.com",   "admin");
let manager = new User("Rahul",  "rahul@app.com",   "manager");
let viewer  = new User("Sneha",  "sneha@app.com",   "viewer");

admin.login();
admin.login(); // try to login again
manager.login();
viewer.logout(); // try to logout without logging in

console.log(`\nAdmin can edit   : ${admin.canEdit()}`);   // true
console.log(`Manager can edit : ${manager.canEdit()}`);  // true
console.log(`Viewer can edit  : ${viewer.canEdit()}`);   // false

admin.printProfile();