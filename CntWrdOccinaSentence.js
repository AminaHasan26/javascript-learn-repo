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

countWords("My name is is is Amina Amina");