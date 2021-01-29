function solution(number) {
    return [...Array(number > 0 ? number : 0)].reduce((a,_,i) => a + (i % 3 === 0 || i % 5 === 0 ? i : 0), 0)
}


  
console.log(solution(10),23)