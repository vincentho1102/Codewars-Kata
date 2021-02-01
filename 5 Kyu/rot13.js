function rot13(message) {
    const asci = [...message].map(v => !v.match(/[^a-z]/i) ? (v.charCodeAt() > 96 ? ((v.charCodeAt() + 13) > 122 ? v.charCodeAt() + 13 - 122 + 96 : v.charCodeAt() + 13) : ((v.charCodeAt() + 13) > 90 ? v.charCodeAt() + 13 - 90 + 64 : v.charCodeAt() + 13)) : v.charCodeAt())
    return asci.map(v => String.fromCharCode(v)).join``
}


console.log(rot13("test"), "grfg")
console.log(rot13("Test"), "Grfg")   
console.log(rot13("Test!"), "Grfg!")   
console.log(rot13("10Test!"), "Grfg!")   