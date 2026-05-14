/**
 * CommonJS — require / module.exports
 */

//Exporting

// File: commonJS/mathUtils.js

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function getPassRate(passed, total) {
    if (total === 0) return 0;
    return Math.round((passed / total) * 100);
}

const PI = 3.14159;

// Export everything you want to share
module.exports = {
    add,
    subtract,
    getPassRate,
    PI
};