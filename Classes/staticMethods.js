/**
 * Static Methods:
 * Sometimes you need a method that belongs to the class itself — not to any individual object created from it. 
 * These are called static methods.
 * Real-World Analogy
A factory (class) builds cars (objects). The factory itself has tools like quality 
checkers and assembly stats that aren't part of any single car — they belong to the factory.
 */

class TestUtils {

    // Static — belongs to the class, not instances
    static formatDuration(ms) {
        if (ms < 1000) return `${ms}ms`;
        return `${(ms / 1000).toFixed(1)}s`;
    }

    static generateTestId() {
        return `TC-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }

    static getPassRate(passed, total) {
        if (total === 0) return "0%";
        return `${Math.round((passed / total) * 100)}%`;
    }

    static isValidEmail(email) {
        return email.includes("@") && email.includes(".");
    }
}

// Call directly on the CLASS — no 'new' needed
console.log(TestUtils.formatDuration(850));        // 850ms
console.log(TestUtils.formatDuration(3400));       // 3.4s
console.log(TestUtils.generateTestId());           // TC-1705123456789-432
console.log(TestUtils.getPassRate(42, 50));        // 84%
console.log(TestUtils.isValidEmail("priya@t.com")); // true