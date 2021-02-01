var maxSequence = function(arr) {
    let total = 0;
    return arr.reduce((a,v) => {
        total = Math.max(total + v, 0)
        return Math.max(a, total)
    }, 0)
}


console.log(maxSequence([]), 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]), 6);
console.log(maxSequence([ -2, -1, -3, -4, -1, -2, -1, -5, -4 ]), 0);