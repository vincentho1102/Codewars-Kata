function getCount(str) {
    return (str.match(/[aiueo]/g) || []).length
}


console.log(getCount("abracadabra"), 5)