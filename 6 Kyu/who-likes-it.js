function likes(names) {
    return names.length ? (names.length < 3 ? names.join(' and ') + (names.length < 2 ? ' likes ' : ' like ') + 'this' : 
        (names.slice(0,2).join(', ') + ' and ').concat(names.slice(2).length > 1 ? names.slice(2).length + ' others' : names.slice(2)) + ' like this') : 
        'no one likes this'
}


console.log(likes([]), 'no one likes this');
console.log(likes(['Peter']), 'Peter likes this');
console.log(likes(['Jacob', 'Alex']), 'Jacob and Alex like this');
console.log(likes(['Max', 'John', 'Mark']), 'Max, John and Mark like this');
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']), 'Alex, Jacob and 2 others like this');