// function persistence(num, count = 0) {
//     while ((''+num).length > 1) {
//         num = [...''+num].reduce((a,v) => a * v, 1)
//         count++
//     }
//     return count
// }


function persistence(num, count = 0) {
    return num > 9 ? (persistence([...''+num].reduce((a,v) => a * v, 1), count += 1)) : count
}


console.log(persistence(39),3);
console.log(persistence(4),0);
console.log(persistence(25),2);
console.log(persistence(999),4);