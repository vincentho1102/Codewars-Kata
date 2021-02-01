function digital_root(n) {
    return (''+n).length > 1 ? digital_root([...''+n].reduce((a,v) => a + +v, 0)) : n
}


console.log(digital_root(16), 7)
console.log(digital_root(456), 6)