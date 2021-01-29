const zero = operation => operation ? operation(0) : 0
const one = operation => operation ? operation(1) : 1
const two = operation => operation ? operation(2) : 2
const three = operation => operation ? operation(3) : 3
const four = operation => operation ? operation(4) : 4
const five = operation => operation ? operation(5) : 5
const six = operation => operation ? operation(6) : 6
const seven = operation => operation ? operation(7) : 7
const eight = operation => operation ? operation(8) : 8
const nine = operation => operation ? operation(9) : 9

const plus = num1 => num2 => num1 + num2
const minus = num1 => num2 => num2 - num1
const times = num1 => num2 => num1 * num2
const dividedBy = num1 => num2 => Math.floor(num2 / num1)



console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);