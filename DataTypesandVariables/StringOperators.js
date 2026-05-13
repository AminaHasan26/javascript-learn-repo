let url = "https://myapp.com/login";
let buttonText = "Submit";
let errorMsg = "Invalid username or password";
let emptyString = ""; // valid string — just empty

/**
 * Think of methods as tools that come built-in with every string.
You use them like this: yourString.methodName()
 */

//.length

let password = "MyP@ssword123";
console.log(password.length); // 13

// Real automation use:
// "Does the error message appear when password is less than 8 characters?"
let shortPassword = "abc";
console.log(shortPassword.length < 8); // true → validation should trigger

//Method 2 — .toUpperCase() and .toLowerCase()

// Pages sometimes show text in different cases
// Comparing in lowercase avoids case mismatch bugs
let expectedTitle = "welcome to myapp";
let actualTitle = "Welcome To MyApp";

console.log(actualTitle.toLowerCase() === expectedTitle); // true ✅
// Without toLowerCase(), "Welcome To MyApp" === "welcome to myapp" → false ❌



let appName = "MyBankingApp";
let appName2 = "My Banking App"
let appName3 = " My Banking App "

console.log(appName.length);          // 12 — how many characters
console.log(appName.toUpperCase());   // MYBANKINGAPP
console.log(appName.toLowerCase());   // mybankingapp

//Method 4 — .includes()
//Checks if a string contains another string. Returns true or false.
console.log(appName.includes("Bank")); // true — does it contain "Bank"?
let errorMessage = "Invalid username or password";
console.log(errorMessage.includes("Invalid"));  // true
console.log(errorMessage.includes("password")); // true
console.log(errorMessage.includes("email"));    // false
//Real automation use:
// Verify error message contains expected text
let actualError = "Error: Invalid username or password. Please try again.";

// We don't check the FULL string — just that key text is present
console.log(actualError.includes("Invalid username or password")); // true ✅

//Method 5 — .startsWith() and .endsWith()
//Checks how a string begins or ends.

let pageUrl = "https://myapp.com/dashboard";

console.log(pageUrl.startsWith("https")); // true  — secure connection ✅
console.log(pageUrl.startsWith("http:")); // false
console.log(pageUrl.endsWith("dashboard")); // true
console.log(pageUrl.endsWith("login"));     // false

//Real automation use:
// Verify URL is secure (starts with https)
let currentUrl = "https://mybank.com/account";
console.log(currentUrl.startsWith("https")); // true ✅ — security check passed

console.log(appName.charAt(5)); //Returns the character at the given index position. Index starts at 0.
console.log(appName.charCodeAt(5));//Returns the UTF-16 character code (number) of the character at the given index.
//Useful for comparing characters or encoding operations. 'A' = 65, 'a' = 97.


/*indexOf()
Returns the index of the first occurrence of a substring. Returns -1 if not found.
str.indexOf(searchValue, fromIndex?)
Searches left to right. Use fromIndex to start searching from a specific position.
*/
console.log(appName.indexOf("a"));
console.log(appName.indexOf("a",4));

/*
lastIndexOf()
Returns the index of the last occurrence of a substring. Returns -1 if not found.
str.lastIndexOf(searchValue, fromIndex?)

Searches right to left, opposite of indexOf().
*/

console.log(appName.lastIndexOf("a"));


/*substring()
Extracts characters between two indices (end index not included).
str.substring(start, end?)
If start > end, they are swapped automatically. Negative values are treated as 0.
*/

console.log(appName.substring(2,5));

/**
 slice()
Extracts a section of a string. Supports negative indices (count from end).
str.slice(start, end?)

Negative index -1 means last character, -2 means second to last, etc.
 */

console.log(appName.slice(2,5));

/**
 * split()
Splits a string into an array of substrings based on a separator.

str.split(separator, limit?)

Use "" as separator to split into individual characters. e.g. "hi".split("") → ["h","i"]


 */

console.log(appName2.split(" "));

/**
 * trim()
Removes whitespace from both the beginning and end of a string.
str.trim()
Only removes leading and trailing whitespace — not spaces in the middle.
 */

console.log(appName3.trim());

//Real automation use:
// Web pages often return text with extra whitespace
// Always trim before comparing
let textFromPage = "  Submit  ";
let expected = "Submit";

console.log(textFromPage === expected);               // false ❌ — spaces cause mismatch
console.log(textFromPage.trim() === expected);        // true  ✅

/**
 * trimStart()
Removes whitespace only from the beginning (left side) of a string.
str.trimStart()

Also aliased as trimLeft() in some environments.
 */

console.log(appName3.trimStart());

/**
 * trimEnd()
Removes whitespace only from the end (right side) of a string.
str.trimEnd()
Also aliased as trimRight() in some environments.
 */

console.log(appName3.trimEnd());

console.log(appName.replace("My", "Our")); // OurBankingApp

/**
 * charAt(index) — Returns the character at a specific position. "Hello".charAt(1) → "e". Same as bracket notation str[1], but safer since it returns "" instead of undefined for out-of-range indices.
charCodeAt(index) — Returns the numeric UTF-16 code of the character at an index. "A".charCodeAt(0) → 65. Useful for encoding, sorting, or character comparisons.
toUpperCase() — Converts the entire string to uppercase. "hello".toUpperCase() → "HELLO". Strings are immutable, so this returns a new string.
toLowerCase() — Converts to lowercase. "HELLO".toLowerCase() → "hello". Most commonly used for case-insensitive comparisons like str.toLowerCase() === input.toLowerCase().
indexOf(search, fromIndex?) — Finds the first occurrence of a substring, returns its index or -1 if not found. "banana".indexOf("a") → 1. Optional second argument sets where to start searching.
lastIndexOf(search) — Like indexOf() but searches from right to left, returning the last occurrence. "banana".lastIndexOf("a") → 5.
substring(start, end?) — Extracts characters from start up to (but not including) end. "Hello".substring(1, 4) → "ell". Negative values are treated as 0, and if start > end, they swap.
slice(start, end?) — Similar to substring(), but supports negative indices. "Hello".slice(-3) → "llo". More flexible and generally preferred over substring.
**substr(start, length?)** ⚠️ Deprecated — Extracts lengthcharacters starting fromstart. "Hello".substr(1, 3)→"ell". Avoid in new code; use slice()` instead.
split(separator, limit?) — Splits a string into an array. "a,b,c".split(",") → ["a", "b", "c"]. Use "" as separator to split into individual characters. Optional limit caps the array size.
trim() — Removes whitespace from both ends. "  hi  ".trim() → "hi". Essential for cleaning user input.
trimStart() — Removes whitespace from the left/start only. "  hi  ".trimStart() → "hi  ".
trimEnd() — Removes whitespace from the right/end only. "  hi  ".trimEnd() → "  hi".
 */

