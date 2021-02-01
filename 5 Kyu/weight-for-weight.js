function orderWeight(weights) {
    const sum = n => [...''+n].reduce((a,v) => a + +v, 0)
    
    return weights.split` `.sort((a,b) => {
        const weightA = sum(a)
        const weightB = sum(b)
        return weightA < weightB ? -1 : weightA > weightB ? 1 : a < b ? -1 : a > b ? 1 : 0
    }).join` `
}


console.log(orderWeight("103 123 4444 99 2000"), "2000 103 123 4444 99")
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"), "11 11 2000 10003 22 123 1234000 44444444 9999")