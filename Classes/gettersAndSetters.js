/**
 * Getters and Setters
 * Special methods that look like properties but run code when accessed or assigned.
 */

class TestSuite {

    constructor(name) {
        this.name        = name;
        this._results    = [];    // _ prefix = private by convention
        this._startTime  = Date.now();
    }

    addResult(testName, status, duration) {
        this._results.push({ testName, status, duration });
    }

    // GETTER — accessed like a property but runs code
    get totalTests() {
        return this._results.length;
    }

    get passedCount() {
        return this._results.filter(r => r.status === "pass").length;
    }

    get failedCount() {
        return this._results.filter(r => r.status === "fail").length;
    }

    get passRate() {
        if (this.totalTests === 0) return 0;
        return Math.round((this.passedCount / this.totalTests) * 100);
    }

    get duration() {
        return Date.now() - this._startTime;
    }

    // SETTER — runs code when assigned
    set suiteName(newName) {
        if (newName.trim() === "") {
            console.log(" Suite name cannot be empty");
            return;
        }
        this.name = newName.trim();
        console.log(` Suite renamed to: ${this.name}`);
    }

    printReport() {
        console.log(`\n Suite    : ${this.name}`);
        console.log(`   Total    : ${this.totalTests}`);  // ← getter
        console.log(`   Passed   : ${this.passedCount}`); // ← getter
        console.log(`   Failed   : ${this.failedCount}`); // ← getter
        console.log(`   Pass Rate: ${this.passRate}%`);   // ← getter
    }
}

let suite = new TestSuite("Regression Suite");

suite.addResult("Login Test",    "pass", 1200);
suite.addResult("Search Test",   "pass", 850);
suite.addResult("Checkout Test", "fail", 3400);
suite.addResult("Logout Test",   "pass", 600);

// Access getters like properties — no ()
console.log(suite.totalTests);  // 4
console.log(suite.passRate);    // 75

suite.printReport();

// Use setter like a property assignment
suite.suiteName = "Smoke Suite";  // Suite renamed to: Smoke Suite
suite.suiteName = "";             // Suite name cannot be empty