// File: tests/loginTest.js

// Import exactly what you need
import { formatDuration, getPassRate, BASE_URL } from "../helpers/testUtils.js";

console.log(formatDuration(1250));      // 1.3s
console.log(getPassRate(45, 50));       // 90%
console.log(BASE_URL);                  // https://myapp.com

// Import with alias — rename to avoid conflicts
import { getPassRate as calcRate } from "../helpers/testUtils.js";
console.log(calcRate(8, 10));           // 80%

// Import everything under one name
import * as utils from "../helpers/testUtils.js";
console.log(utils.formatDuration(850)); // 850ms
console.log(utils.DEFAULT_TIMEOUT);     // 30000