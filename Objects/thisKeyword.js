/**
 * The this Keyword
 * Inside a method, this refers to the object itself. 
 * It's cleaner and safer than repeating the object name.
 */

let testRunner = {
    suiteName: "Smoke Suite",
    passedTests: 0,
    failedTests: 0,

    addPass() {                          // ← shorthand method syntax
        this.passedTests++;              // this = testRunner
    },

    addFail() {
        this.failedTests++;
    },

    getTotal() {
        return this.passedTests + this.failedTests;  // using this
    },

    printSummary() {
        console.log(`Suite  : ${this.suiteName}`);   // this.suiteName
        console.log(`Passed : ${this.passedTests}`);
        console.log(`Failed : ${this.failedTests}`);
        console.log(`Total  : ${this.getTotal()}`);  // calling own method
    }
};

testRunner.addPass();
testRunner.addPass();
testRunner.addPass();
testRunner.addFail();
testRunner.printSummary();