<<<<<<< HEAD

// Merge Two Arrays
console.log("Program 1 Merging Two Arrays");
function mergetwoarrays (arr1, arr2 ){
    return[...arr1,...arr2];
}

console.log(mergetwoarrays([1,2,3,4,],[5,6,7,8,9]));

//Increment a Number Represented as an Array

console.log("Program 2 : Increment a Number Represented as an Array");

function plusOne(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {

        if (arr[i] < 9) {
            arr[i]++;
            return arr;
        }

        arr[i] = 0;
    }

    arr.unshift(1);
    return arr;
}

console.log(plusOne([1, 2, 9]));

//Program 3 - Rearrange Array (Even Numbers First, Odd Numbers Last)
console.log("Program 3 :Rearrange Array (Even Numbers First, Odd Numbers Last)");

function rearrangeArray(arr) {
    let even = [];
    let odd = [];

    for (let num of arr) {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }

    return [...even, ...odd];
}

console.log(rearrangeArray([2,0,4,0,3,0,5,0]));

// Reverse Each Word in a Sentence
console.log("Program 4 :Reverse Each Word in a Sentence)");

function reverseWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseWords("My name is Amina"));

//Find Anagram Which is a Substring
console.log("Program 5 :Find Anagram Which is a Substring)");
function isAnagramSubstring(str, sub) {

    const sortedSub = sub.split("").sort().join("");

    for (let i = 0; i <= str.length - sub.length; i++) {

        let part = str.substring(i, i + sub.length);

        if (part.split("").sort().join("") === sortedSub) {
            return true;
        }
    }

    return false;
}

console.log(isAnagramSubstring("Programming", "gram")); // true
console.log(isAnagramSubstring("Hello", "World")); // false

//Search Insert Position
console.log("Program 6 :Search Insert Position)");
function searchInsert(numbers, target) {

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] >= target) {
            return i;
        }
    }

    return numbers.length;
}

const numbers = [1, 3, 5, 6];

console.log(searchInsert(numbers, 5)); // 2
console.log(searchInsert(numbers, 2)); // 1
console.log(searchInsert(numbers, 7)); // 4




=======

// Merge Two Arrays
console.log("Program 1 Merging Two Arrays");
function mergetwoarrays (arr1, arr2 ){
    return[...arr1,...arr2];
}

console.log(mergetwoarrays([1,2,3,4,],[5,6,7,8,9]));

//Increment a Number Represented as an Array

console.log("Program 2 : Increment a Number Represented as an Array");

function plusOne(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {

        if (arr[i] < 9) {
            arr[i]++;
            return arr;
        }

        arr[i] = 0;
    }

    arr.unshift(1);
    return arr;
}

console.log(plusOne([1, 2, 9]));

//Program 3 - Rearrange Array (Even Numbers First, Odd Numbers Last)
console.log("Program 3 :Rearrange Array (Even Numbers First, Odd Numbers Last)");

function rearrangeArray(arr) {
    let even = [];
    let odd = [];

    for (let num of arr) {
        if (num % 2 === 0) {
            even.push(num);
        } else {
            odd.push(num);
        }
    }

    return [...even, ...odd];
}

console.log(rearrangeArray([2,0,4,0,3,0,5,0]));

// Reverse Each Word in a Sentence
console.log("Program 4 :Reverse Each Word in a Sentence)");

function reverseWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.split("").reverse().join(""))
        .join(" ");
}

console.log(reverseWords("My name is Amina"));

//Find Anagram Which is a Substring
console.log("Program 5 :Find Anagram Which is a Substring)");
function isAnagramSubstring(str, sub) {

    const sortedSub = sub.split("").sort().join("");

    for (let i = 0; i <= str.length - sub.length; i++) {

        let part = str.substring(i, i + sub.length);

        if (part.split("").sort().join("") === sortedSub) {
            return true;
        }
    }

    return false;
}

console.log(isAnagramSubstring("Programming", "gram")); // true
console.log(isAnagramSubstring("Hello", "World")); // false

//Search Insert Position
console.log("Program 6 :Search Insert Position)");
function searchInsert(numbers, target) {

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] >= target) {
            return i;
        }
    }

    return numbers.length;
}

const numbers = [1, 3, 5, 6];

console.log(searchInsert(numbers, 5)); // 2
console.log(searchInsert(numbers, 2)); // 1
console.log(searchInsert(numbers, 7)); // 4




>>>>>>> d62e990e46d21b08cd114f5040d72847940ba026
