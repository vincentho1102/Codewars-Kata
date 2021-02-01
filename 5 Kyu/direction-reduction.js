function dirReduc(arr) {
    const trims = arr.join` `.replace('  ', ' ')
    const newArr = trims.replace('NORTH SOUTH', '').replace('SOUTH NORTH', '').replace('WEST EAST', '').replace('EAST WEST', '')
    const result = newArr.trim().split` `;
    return newArr.length ? (result.length < arr.length ? dirReduc(result) : result) : []
}


console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])