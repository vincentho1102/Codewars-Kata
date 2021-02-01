function duplicateCount(text) {
    let count = {};
    text = text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        if (!count[text[i]]) count[text[i]] = 0;
        count[text[i]]++;
    }
    return Object.values(count).filter(e => e > 1).length
}


console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2,"should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")