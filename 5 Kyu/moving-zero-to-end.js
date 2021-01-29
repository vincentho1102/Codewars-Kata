var moveZeros = function (arr) {
    const zeroArr = arr.filter(e => e === 0);
    const nonZeroArr = arr.filter(e => e !== 0);
    return nonZeroArr.concat(zeroArr)
}


console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]), [ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])