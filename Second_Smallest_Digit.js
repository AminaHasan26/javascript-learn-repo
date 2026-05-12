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
