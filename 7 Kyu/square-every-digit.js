function squareDigits(num) {
    return +[...''+num].map(v => v ** 2).join``
}


console.log(squareDigits(9119), 811181);