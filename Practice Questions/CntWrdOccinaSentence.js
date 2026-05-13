<<<<<<< HEAD
function countWords(sentence) {
    const words = sentence.split(" ");
    const count = {};

    for (let word of words) {
        count[word] = (count[word] || 0) + 1;
    }

    for (let key in count) {
        if (count[key] > 1) {
            console.log(`"${key}" - ${count[key]}`);
        }
    }
}

=======
function countWords(sentence) {
    const words = sentence.split(" ");
    const count = {};

    for (let word of words) {
        count[word] = (count[word] || 0) + 1;
    }

    for (let key in count) {
        if (count[key] > 1) {
            console.log(`"${key}" - ${count[key]}`);
        }
    }
}

>>>>>>> d62e990e46d21b08cd114f5040d72847940ba026
countWords("My name is is is Amina Amina");