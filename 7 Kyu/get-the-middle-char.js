function getMiddle(s) {
    const form = Math.ceil(s.length / 2)
    return s.slice(form - 1, (s.length % 2 ? form : form + 1))
}


console.log(getMiddle("test"),"es");
console.log(getMiddle("testing"),"t");
console.log(getMiddle("middle"),"dd");
console.log(getMiddle("A"),"A");