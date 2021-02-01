function anagrams(word, words) {
    return words.filter(v => [...v].sort().join`` === [...word].sort().join``)
}


console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']), ['aabb', 'bbaa'])
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']), ['carer', 'racer'])
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer']), [])