/**
 * Methods (Functions Inside Objects)
 * Objects can hold functions as values. 
 * When a function lives inside an object it is called a method.
 */

/**
 * Real-World Analogy
Your TV remote (object) has:

Properties: brand, batteryLevel, isPaired
Methods: turnOn(), changeChannel(), mute()
 */

//Methods are things the object can do.

let testRunner = {
    suiteName: "Regression Suite",
    totalTests: 0,
    passedTests: 0,
    failedTests: 0,

    // Methods — functions inside the object
    addPass: function() {
        testRunner.totalTests++;
        testRunner.passedTests++;
    },

    addFail: function() {
        testRunner.totalTests++;
        testRunner.failedTests++;
    },

    getPassRate: function() {
        if (testRunner.totalTests === 0) return "0%";
        let rate = (testRunner.passedTests / testRunner.totalTests) * 100;
        return `${Math.round(rate)}%`;
    },

    printSummary: function() {
        console.log(`Suite   : ${testRunner.suiteName}`);
        console.log(`Total   : ${testRunner.totalTests}`);
        console.log(`Passed  : ${testRunner.passedTests}`);
        console.log(`Failed  : ${testRunner.failedTests}`);
        console.log(`Rate    : ${testRunner.getPassRate()}`);
    }
};

// Use the methods
testRunner.addPass();
testRunner.addPass();
testRunner.addFail();
testRunner.addPass();

testRunner.printSummary();