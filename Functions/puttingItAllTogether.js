// ============================================
// Test Helper Functions — reusable across tests
// ============================================

const formatDuration = (ms) => {
    if (ms < 1000) return `${ms}ms`;
    return `${(ms / 1000).toFixed(1)}s`;
};

const getPassRate = (passed, total) => {
    if (total === 0) return "0%";
    return `${Math.round((passed / total) * 100)}%`;
};

const printDivider = (char = "=", length = 40) => {
    console.log(char.repeat(length));
};

function printTestResult(testName, status, duration) {
    const icon = status === "pass" ? "✅" : 
                 status === "fail" ? "❌" : "⏭️";
    const time = formatDuration(duration);
    console.log(`${icon} ${testName.padEnd(25)} ${time}`);
}

function printSuiteReport(suiteName, results) {
    let passed = 0;
    let failed = 0;
    let skipped = 0;
    let totalDuration = 0;

    printDivider();
    console.log(`  TEST SUITE: ${suiteName}`);
    printDivider();

    for (let test of results) {
        printTestResult(test.name, test.status, test.duration);
        totalDuration += test.duration;

        if (test.status === "pass")  passed++;
        if (test.status === "fail")  failed++;
        if (test.status === "skip")  skipped++;
    }

    printDivider("-", 40);
    console.log(`  Passed  : ${passed}`);
    console.log(`  Failed  : ${failed}`);
    console.log(`  Skipped : ${skipped}`);
    console.log(`  Rate    : ${getPassRate(passed, passed + failed)}`);
    console.log(`  Time    : ${formatDuration(totalDuration)}`);
    printDivider();
}

// Use it
let myTestResults = [
    { name: "Login Test",        status: "pass", duration: 1200 },
    { name: "Search Test",       status: "pass", duration: 850  },
    { name: "Checkout Test",     status: "fail", duration: 3200 },
    { name: "Profile Update",    status: "pass", duration: 960  },
    { name: "Payment Flow",      status: "skip", duration: 0    }
];

printSuiteReport("Regression Suite", myTestResults);