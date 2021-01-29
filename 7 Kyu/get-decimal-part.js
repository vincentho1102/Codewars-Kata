function getDecimal(n) {
    return Math.abs(n % 1)
}


console.log(getDecimal(10), 0);
console.log(getDecimal(-1.2), 0.2);
console.log(getDecimal(4.5), 0.5);
console.log(getDecimal(-39946222.61237329), 6.1237329000000e-1);