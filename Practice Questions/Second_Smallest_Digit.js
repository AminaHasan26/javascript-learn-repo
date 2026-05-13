<<<<<<< HEAD
function secondSmallestDigit(str) {
    let digits = [];

    for (let char of str) {
        if (!isNaN(char) && char !== ' ') {
            digits.push(Number(char));
        }
    }


    // Remove duplicates
    digits = [...new Set(digits)];

    // Sort ascending
    digits.sort((a, b) => a - b);

    return digits.length >= 2 ? digits[1] : null;
}

console.log(secondSmallestDigit("claude2403edualc")); // 2
=======
function secondSmallestDigit(str) {
    let digits = [];

    for (let char of str) {
        if (!isNaN(char) && char !== ' ') {
            digits.push(Number(char));
        }
    }


    // Remove duplicates
    digits = [...new Set(digits)];

    // Sort ascending
    digits.sort((a, b) => a - b);

    return digits.length >= 2 ? digits[1] : null;
}

console.log(secondSmallestDigit("claude2403edualc")); // 2
>>>>>>> d62e990e46d21b08cd114f5040d72847940ba026
